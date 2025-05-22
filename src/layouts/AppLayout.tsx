import React, { useState } from 'react';
import { User } from '../types';
import Sidebar from '../components/ui/Sidebar';
import DashboardPage from '../pages/DashboardPage';
import EmployeesPage from '../pages/employees/EmployeesPage';
import LeavesPage from '../pages/leaves/LeavesPage';
import AttendancePage from '../pages/attendance/AttendancePage';
import PerformancePage from '../pages/performance/PerformancePage';
import DocumentsPage from '../pages/documents/DocumentsPage';
import ProfilePage from '../components/dashboard/profilepage';
interface AppLayoutProps {
  user: User;
  onLogout: () => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({ user, onLogout }) => {
  const [activePath, setActivePath] = useState('/dashboard');
  
  const handleNavigate = (path: string) => {
    setActivePath(path);
  };
  
  const renderPage = () => {
    switch (activePath) {
      case '/dashboard':
        return <DashboardPage user={user} />;
      case '/employees':
        return <EmployeesPage />;
      case '/leaves':
        return <LeavesPage />;
      case '/attendance':
        return <AttendancePage />;
      case '/performance':
        return <PerformancePage />;
      case '/documents':
        return <DocumentsPage />;
        case '/profile':
          return <ProfilePage/>
      default:
        return (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center p-8">
              <h2 className="text-xl font-semibold text-gray-700">
                {activePath.substring(1).charAt(0).toUpperCase() + activePath.slice(2)} Page
              </h2>
              <p className="mt-2 text-gray-500">
                This page is under construction.
              </p>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        user={user} 
        onLogout={onLogout} 
        onNavigate={handleNavigate}
        activePath={activePath}
      />
      
      <main className="lg:pl-64 min-h-screen">
        {renderPage()}
      </main>
    </div>
  );
};

export default AppLayout;