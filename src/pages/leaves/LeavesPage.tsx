// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
// import Badge from '../../components/ui/Badge';
// import Button from '../../components/ui/Button';
// import { mockLeaveRequests } from '../../data/mockData';
// import { LeaveRequest } from '../../types';
// import { Plus, Calendar } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const LeavesPage: React.FC = () => {
//   const [leaveRequests] = useState<LeaveRequest[]>(mockLeaveRequests);
//   const navigate = useNavigate();

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'pending':
//         return <Badge variant="warning">Pending</Badge>;
//       case 'approved':
//         return <Badge variant="success">Approved</Badge>;
//       case 'rejected':
//         return <Badge variant="danger">Rejected</Badge>;
//       default:
//         return <Badge>Unknown</Badge>;
//     }
//   };

//   const getTypeLabel = (type: string) => {
//     switch (type) {
//       case 'vacation':
//         return 'Vacation Leave';
//       case 'sick':
//         return 'Sick Leave';
//       case 'personal':
//         return 'Personal Leave';
//       default:
//         return 'Other Leave';
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Leave Management</h1>
//           <p className="text-gray-600">Track and manage employee leave requests</p>
//         </div>
        
       
      
//       </div>

//       <div className="grid gap-4">
//         {leaveRequests.map((request) => (
//           <Card key={request.id}>
//             <CardContent className="p-6">
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                 <div>
//                   <div className="flex items-center gap-2 mb-2">
//                     <h3 className="text-lg font-semibold text-gray-900">
//                       {request.employeeName}
//                     </h3>
//                     {getStatusBadge(request.status)}
//                   </div>
//                   <p className="text-gray-600">{getTypeLabel(request.type)}</p>
//                   <div className="flex items-center gap-2 mt-2 text-gray-600">
//                     <Calendar size={18} />
//                     <span>
//                       {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
//                     </span>
//                   </div>
//                 </div>

//                 {request.status === 'pending' && (
//                   <div className="flex gap-2">
//                     <Button variant="success" size="sm">Approve</Button>
//                     <Button variant="danger" size="sm">Reject</Button>
//                   </div>
//                 )}
//               </div>

//               {request.reason && (
//                 <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                   <p className="text-gray-700">
//                     <span className="font-medium">Reason: </span>
//                     {request.reason}
//                   </p>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeavesPage;


import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Calendar } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type LeaveRequest = {
  lId: number;
  leaveType: string;
  leaveDate: string;
  employeeId: number;
  status: string;
  reason?: string;
  employeeName?: string;
};

const LeavesPage: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const fetchLeaveRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8080/leaves/getAllLeaves');
      setLeaveRequests(response.data);
    } catch (error) {
      toast.error('Failed to fetch leave requests');
    }
  };

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'approved':
        return <Badge variant="success">Approved</Badge>;
      case 'rejected':
        return <Badge variant="danger">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type.toLowerCase()) {
      case 'vacation':
        return 'Vacation Leave';
      case 'sick':
        return 'Sick Leave';
      case 'personal':
        return 'Personal Leave';
      default:
        return 'Other Leave';
    }
  };

  const handleAction = async (lId: number, action: 'accept' | 'reject') => {
    setLoadingId(lId);
    const apiUrl = `http://localhost:8080/leaves/${lId}/${action}`;
    try {
      const payload = {
        lId: lId,
        status: action === 'accept' ? 'approved' : 'rejected',
      };

      await axios.put(apiUrl, payload);
      toast.success(`Leave ${action === 'accept' ? 'approved' : 'rejected'} successfully`);
      fetchLeaveRequests(); // Refresh the list
    } catch (error) {
      toast.error(`Failed to ${action} leave`);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Leave Management</h1>
        <p className="text-gray-600">Track and manage employee leave requests</p>
      </div>

      <div className="grid gap-4">
        {leaveRequests.map((request) => (
          <Card key={request.lId}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {request.employeeName || `Emp ID: ${request.employeeId}`}
                    </h3>
                    {getStatusBadge(request.status)}
                  </div>
                  <p className="text-gray-600">{getTypeLabel(request.leaveType)}</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-600">
                    <Calendar size={18} />
                    <span>{new Date(request.leaveDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {request.status.toLowerCase() === 'pending' && (
                  <div className="flex gap-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleAction(request.lId, 'accept')}
                      disabled={loadingId === request.lId}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleAction(request.lId, 'reject')}
                      disabled={loadingId === request.lId}
                    >
                      Reject
                    </Button>
                  </div>
                )}
              </div>

              {request.reason && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <span className="font-medium">Reason: </span>
                    {request.reason}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeavesPage;

