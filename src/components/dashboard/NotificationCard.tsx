import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Notification } from '../../types';
import { Info, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface NotificationCardProps {
  notifications: Notification[];
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notifications }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Info size={16} className="text-blue-500" />;
      case 'warning':
        return <AlertTriangle size={16} className="text-amber-500" />;
      case 'success':
        return <CheckCircle size={16} className="text-emerald-500" />;
      case 'error':
        return <X size={16} className="text-red-500" />;
      default:
        return <Info size={16} className="text-blue-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: '2-digit',
      hour: '2-digit', 
      minute: '2-digit' 
    }).format(date);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No notifications</p>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-3 rounded-lg border ${notification.read ? 'bg-white' : 'bg-indigo-50'} transition-colors hover:bg-gray-50`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{getIcon(notification.type)}</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-0.5">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{formatDate(notification.createdAt)}</p>
                  </div>
                  {!notification.read && (
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;