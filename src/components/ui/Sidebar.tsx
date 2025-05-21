import React, { useState } from 'react';
import { User, Role } from '../../types';
import Avatar from './Avatar';
import {
  Users,
  User as UserIcon,
  FileText,
  Calendar,
  Clock,
  Award,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  user: User;
  onLogout: () => void;
  onNavigate: (path: string) => void;
  activePath: string;
}

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  roles: Role[];
}

const Sidebar: React.FC<SidebarProps> = ({
  user,
  onLogout,
  onNavigate,
  activePath
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { 
      title: 'Dashboard', 
      path: '/dashboard', 
      icon: <BarChart3 size={20} />, 
      roles: ['admin', 'hr', 'employee'] 
    },
    { 
      title: 'Employees', 
      path: '/employees', 
      icon: <Users size={20} />, 
      roles: ['admin', 'hr'] 
    },
    { 
      title: 'Leave Management', 
      path: '/leaves', 
      icon: <Calendar size={20} />, 
      roles: ['admin', 'hr', 'employee'] 
    },
    { 
      title: 'Attendance', 
      path: '/attendance', 
      icon: <Clock size={20} />, 
      roles: ['admin', 'hr', 'employee'] 
    },
    { 
      title: 'Performance', 
      path: '/performance', 
      icon: <Award size={20} />, 
      roles: ['admin', 'hr', 'employee'] 
    },
    { 
      title: 'Documents', 
      path: '/documents', 
      icon: <FileText size={20} />, 
      roles: ['admin', 'hr', 'employee'] 
    },
    { 
      title: 'Profile', 
      path: '/profile', 
      icon: <UserIcon size={20} />, 
      roles: ['admin', 'hr', 'employee'] 
    },
    { 
      title: 'Settings', 
      path: '/settings', 
      icon: <Settings size={20} />, 
      roles: ['admin', 'hr'] 
    },
  ];

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(user.role)
  );

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-indigo-600 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo and branding */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 text-white p-1.5 rounded">
                <Users size={24} />
              </div>
              <h1 className="text-xl font-bold text-gray-900">HRMS</h1>
            </div>
          </div>
          
          {/* User profile */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Avatar src={user.avatar} alt={user.name} size="md" />
              <div>
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              {filteredMenuItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => {
                      onNavigate(item.path);
                      if (isOpen) setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                      activePath === item.path
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;