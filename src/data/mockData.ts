import { User, LeaveRequest, Notification, Attendance, Performance, DashboardStat } from '../types';
import { Clock, Users, Briefcase, Calendar, Trophy, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'admin@example.com',
    role: 'admin',
    department: 'Management',
    position: 'CEO',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '555-123-4567',
    hireDate: '2020-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'hr@example.com',
    role: 'hr',
    department: 'Human Resources',
    position: 'HR Manager',
    avatar: 'https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '555-987-6543',
    hireDate: '2020-03-10',
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'employee@example.com',
    role: 'employee',
    department: 'Engineering',
    position: 'Software Developer',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '555-456-7890',
    hireDate: '2021-05-20',
    manager: 'Jane Smith',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily@example.com',
    role: 'employee',
    department: 'Marketing',
    position: 'Marketing Specialist',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '555-789-0123',
    hireDate: '2021-07-15',
    manager: 'Jane Smith',
  },
  {
    id: '5',
    name: 'Michael Wilson',
    email: 'michael@example.com',
    role: 'employee',
    department: 'Finance',
    position: 'Financial Analyst',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '555-321-6547',
    hireDate: '2022-01-10',
    manager: 'John Doe',
  },
];

// Mock Leave Requests
export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '3',
    employeeName: 'Robert Johnson',
    type: 'vacation',
    startDate: '2024-07-10',
    endDate: '2024-07-15',
    status: 'pending',
    reason: 'Family vacation',
    createdAt: '2024-06-20T10:30:00Z',
  },
  {
    id: '2',
    employeeId: '4',
    employeeName: 'Emily Davis',
    type: 'sick',
    startDate: '2024-06-25',
    endDate: '2024-06-26',
    status: 'approved',
    reason: 'Fever and cold',
    comments: 'Get well soon!',
    createdAt: '2024-06-24T09:15:00Z',
  },
  {
    id: '3',
    employeeId: '5',
    employeeName: 'Michael Wilson',
    type: 'personal',
    startDate: '2024-07-05',
    endDate: '2024-07-05',
    status: 'rejected',
    reason: 'Personal errands',
    comments: 'Important meeting on this day',
    createdAt: '2024-06-28T14:45:00Z',
  },
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Leave Request',
    message: 'Robert Johnson has requested vacation leave',
    type: 'info',
    read: false,
    createdAt: '2024-06-20T10:35:00Z',
  },
  {
    id: '2',
    title: 'Performance Review Due',
    message: 'Complete performance review for Emily Davis by July 15th',
    type: 'warning',
    read: false,
    createdAt: '2024-06-25T11:20:00Z',
  },
  {
    id: '3',
    title: 'Leave Approved',
    message: 'Your sick leave request has been approved',
    type: 'success',
    read: true,
    createdAt: '2024-06-24T13:45:00Z',
  },
  {
    id: '4',
    title: 'Meeting Reminder',
    message: 'Team meeting tomorrow at 10:00 AM',
    type: 'info',
    read: true,
    createdAt: '2024-06-28T09:00:00Z',
  },
];

// Mock Attendance
export const mockAttendance: Attendance[] = [
  {
    id: '1',
    employeeId: '3',
    employeeName: 'Robert Johnson',
    date: '2024-06-29',
    checkIn: '09:02:00',
    checkOut: '17:30:00',
    status: 'present',
  },
  {
    id: '2',
    employeeId: '4',
    employeeName: 'Emily Davis',
    date: '2024-06-29',
    checkIn: '09:15:00',
    checkOut: '17:45:00',
    status: 'present',
  },
  {
    id: '3',
    employeeId: '5',
    employeeName: 'Michael Wilson',
    date: '2024-06-29',
    checkIn: '08:45:00',
    checkOut: '17:15:00',
    status: 'present',
  },
  {
    id: '4',
    employeeId: '3',
    employeeName: 'Robert Johnson',
    date: '2024-06-28',
    checkIn: '09:30:00',
    checkOut: '18:00:00',
    status: 'late',
  },
  {
    id: '5',
    employeeId: '4',
    employeeName: 'Emily Davis',
    date: '2024-06-28',
    checkIn: '',
    checkOut: '',
    status: 'absent',
  },
];

// Mock Performance Reviews
export const mockPerformance: Performance[] = [
  {
    id: '1',
    employeeId: '3',
    employeeName: 'Robert Johnson',
    reviewerId: '2',
    reviewerName: 'Jane Smith',
    period: 'Q2 2024',
    score: 4.5,
    strengths: 'Technical skills, problem-solving, collaboration',
    improvements: 'Documentation, time management',
    comments: 'Robert has been an outstanding team member this quarter.',
    createdAt: '2024-06-25T15:30:00Z',
  },
  {
    id: '2',
    employeeId: '4',
    employeeName: 'Emily Davis',
    reviewerId: '2',
    reviewerName: 'Jane Smith',
    period: 'Q2 2024',
    score: 4.2,
    strengths: 'Creativity, communication, initiative',
    improvements: 'Meeting deadlines, prioritization',
    comments: 'Emily has shown great progress in her marketing initiatives.',
    createdAt: '2024-06-26T14:00:00Z',
  },
];

// Dashboard Stats
export const mockAdminStats: DashboardStat[] = [
  {
    id: '1',
    title: 'Total Employees',
    value: 24,
    change: 2,
    icon: 'Users',
    color: 'indigo',
  },
  {
    id: '2',
    title: 'Attendance Rate',
    value: '94%',
    change: -1,
    icon: 'Clock',
    color: 'emerald',
  },
  {
    id: '3',
    title: 'Open Positions',
    value: 3,
    change: 1,
    icon: 'Briefcase',
    color: 'amber',
  },
  {
    id: '4',
    title: 'Performance Score',
    value: '4.2',
    change: 0.3,
    icon: 'Trophy',
    color: 'blue',
  },
];

export const mockHrStats: DashboardStat[] = [
  {
    id: '1',
    title: 'Pending Leaves',
    value: 5,
    change: -2,
    icon: 'Calendar',
    color: 'amber',
  },
  {
    id: '2',
    title: 'Attendance Today',
    value: '96%',
    change: 2,
    icon: 'CheckCircle',
    color: 'emerald',
  },
  {
    id: '3',
    title: 'Document Updates',
    value: 8,
    change: 3,
    icon: 'FileText',
    color: 'blue',
  },
  {
    id: '4',
    title: 'Pending Reviews',
    value: 7,
    change: -1,
    icon: 'Trophy',
    color: 'indigo',
  },
];

export const mockEmployeeStats: DashboardStat[] = [
  {
    id: '1',
    title: 'Remaining Leaves',
    value: 12,
    change: 0,
    icon: 'Calendar',
    color: 'emerald',
  },
  {
    id: '2',
    title: 'Late Arrivals',
    value: 2,
    change: -1,
    icon: 'AlertTriangle',
    color: 'amber',
  },
  {
    id: '3',
    title: 'Performance Score',
    value: '4.5',
    change: 0.3,
    icon: 'Trophy',
    color: 'indigo',
  },
  {
    id: '4',
    title: 'Tasks Completed',
    value: 28,
    change: 5,
    icon: 'CheckCircle',
    color: 'blue',
  },
];

// Helper functions to get data based on role
export const getDashboardStatsByRole = (role: string): DashboardStat[] => {
  switch (role) {
    case 'admin':
      return mockAdminStats;
    case 'hr':
      return mockHrStats;
    case 'employee':
      return mockEmployeeStats;
    default:
      return [];
  }
};

export const getCurrentUser = (role: string): User => {
  return mockUsers.find(user => user.role === role) || mockUsers[0];
};