import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { LeaveRequest } from '../../types';

interface LeaveRequestsCardProps {
  leaveRequests: LeaveRequest[];
  userRole: string;
}

const LeaveRequestsCard: React.FC<LeaveRequestsCardProps> = ({ leaveRequests, userRole }) => {
  // Only admins and HR can approve/reject leave requests
  const canManageRequests = userRole === 'admin' || userRole === 'hr';
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: '2-digit',
    }).format(date);
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
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
    switch (type) {
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

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Leave Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaveRequests.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No leave requests</p>
          ) : (
            leaveRequests.map((request) => (
              <div 
                key={request.id} 
                className="p-4 rounded-lg border bg-white transition-colors hover:bg-gray-50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-medium text-gray-900">{request.employeeName}</h4>
                      {getStatusBadge(request.status)}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{getTypeLabel(request.type)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-gray-500">
                        {formatDate(request.startDate)} - {formatDate(request.endDate)}
                      </p>
                    </div>
                  </div>
                  
                  {canManageRequests && request.status === 'pending' && (
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <Button variant="success" size="sm">
                        Approve
                      </Button>
                      <Button variant="outline" size="sm">
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
                
                {request.reason && (
                  <p className="text-sm text-gray-600 mt-2 border-t pt-2">
                    <span className="font-medium">Reason:</span> {request.reason}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaveRequestsCard;