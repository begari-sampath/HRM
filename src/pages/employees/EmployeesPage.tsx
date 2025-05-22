// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
// import Avatar from '../../components/ui/Avatar';
// import Badge from '../../components/ui/Badge';
// import Button from '../../components/ui/Button';
// import { mockUsers } from '../../data/mockData';
// import { User, Role } from '../../types';
// import { UserPlus, Mail, Phone, Calendar } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';


// const EmployeesPage: React.FC = () => {
//   const [employees] = useState<User[]>(mockUsers);

//   const getDepartmentColor = (department: string) => {
//     const colors: Record<string, string> = {
//       'Management': 'primary',
//       'Human Resources': 'secondary',
//       'Engineering': 'success',
//       'Marketing': 'warning',
//       'Finance': 'danger'
//     };

//     return colors[department] || 'default';
//   };
//   const navigate = useNavigate();

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
//           <p className="text-gray-600">Manage your organization's employees</p>
//         </div>
//           <Button variant="primary" onClick={() => navigate('/addemployee')}>
//           <UserPlus size={20} className="mr-2" />
//           Add Employee
//         </Button>
//       </div>

//       <div className="grid gap-4">
//         {employees.map((employee) => (
//           <Card key={employee.id}>
//             <CardContent className="p-6">
//               <div className="flex items-start gap-4">
//                 <Avatar 
//                   src={employee.avatar} 
//                   alt={employee.name} 
//                   size="lg" 
//                 />
//                 <div className="flex-1">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         {employee.name}
//                       </h3>
//                       <p className="text-gray-600">{employee.position}</p>
//                     </div>
//                     <Badge variant={getDepartmentColor(employee.department)}>
//                       {employee.department}
//                     </Badge>
//                   </div>
                  
//                   <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="flex items-center text-gray-600">
//                       <Mail size={18} className="mr-2" />
//                       {employee.email}
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                       <Phone size={18} className="mr-2" />
//                       {employee.phone}
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                       <Calendar size={18} className="mr-2" />
//                       Joined {new Date(employee.hireDate).toLocaleDateString()}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmployeesPage;




import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { UserPlus, Mail, Phone, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Backend DTO type (adjust field names if needed)
type Employee = {
  empId: number;
  ename: string;
  email: string;
  phnone: string;
  eployeeId: string;
  avatar?: string;
  department?: string;
  position?: string;
  hireDate?: string;
};

const EmployeesPage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/emps/getEmps');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const getDepartmentColor = (department: string = '') => {
    const colors: Record<string, string> = {
      'Management': 'primary',
      'Human Resources': 'secondary',
      'Engineering': 'success',
      'Marketing': 'warning',
      'Finance': 'danger'
    };
    return colors[department] || 'default';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-600">Manage your organization's employees</p>
        </div>
        <Button variant="primary" onClick={() => navigate('/addemployee')}>
          <UserPlus size={20} className="mr-2" />
          Add Employee
        </Button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading employees...</p>
      ) : (
        <div className="grid gap-4">
          {employees.map((employee) => (
            <Card key={employee.empId}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar
                    src={employee.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${employee.ename}`}
                    alt={employee.ename}
                    size="lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {employee.ename}
                        </h3>
                        <p className="text-gray-600">{employee.position || 'Employee'}</p>
                      </div>
                      <Badge variant={getDepartmentColor(employee.department)}>
                        {employee.department || 'General'}
                      </Badge>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center text-gray-600">
                        <Mail size={18} className="mr-2" />
                        {employee.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone size={18} className="mr-2" />
                        {employee.phnone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={18} className="mr-2" />
                        Joined{' '}
                        {employee.hireDate
                          ? new Date(employee.hireDate).toLocaleDateString()
                          : 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeesPage;
