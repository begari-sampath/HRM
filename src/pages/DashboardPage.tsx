import React from 'react';
import { User } from '../types';
import StatCard from '../components/dashboard/StatCard';
import NotificationCard from '../components/dashboard/NotificationCard';
import LeaveRequestsCard from '../components/dashboard/LeaveRequestsCard';
import AttendanceCard from '../components/dashboard/AttendanceCard';
import { 
  getDashboardStatsByRole, 
  mockNotifications, 
  mockLeaveRequests, 
  mockAttendance 
} from '../data/mockData';

interface DashboardPageProps {
  user: User;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user }) => {
  const stats = getDashboardStatsByRole(user.role);
  
  return (
    <div className="px-4 py-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome, {user.name}!
        </h1>
        <p className="mt-1 text-gray-600">
          Here's what's happening in your organization today.
        </p>
      </header>
      
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>
      
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NotificationCard notifications={mockNotifications.slice(0, 3)} />
        
        {user.role === 'employee' ? (
          <AttendanceCard
            attendance={mockAttendance.filter(a => a.employeeId === user.id).slice(0, 4)}
            userRole={user.role}
          />
        ) : (
          <LeaveRequestsCard 
            leaveRequests={mockLeaveRequests.slice(0, 3)} 
            userRole={user.role} 
          />
        )}
      </section>
      
      {/* Dashboard widgets specific to each role */}
      {user.role === 'admin' && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Organization Overview
          </h2>
          {/* Additional admin-specific widgets would go here */}
        </section>
      )}
      
      {user.role === 'hr' && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            HR Management
          </h2>
          {/* Additional HR-specific widgets would go here */}
        </section>
      )}
      
      {user.role === 'employee' && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            My Activities
          </h2>
          {/* Additional employee-specific widgets would go here */}
        </section>
      )}
    </div>
  );
};

export default DashboardPage;