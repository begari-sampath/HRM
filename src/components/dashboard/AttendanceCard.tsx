import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { Attendance } from '../../types';

interface AttendanceCardProps {
  attendance: Attendance[];
  userRole: string;
}

const AttendanceCard: React.FC<AttendanceCardProps> = ({ attendance, userRole }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: '2-digit',
    }).format(date);
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <Badge variant="success">Present</Badge>;
      case 'absent':
        return <Badge variant="danger">Absent</Badge>;
      case 'late':
        return <Badge variant="warning">Late</Badge>;
      case 'half-day':
        return <Badge variant="primary">Half Day</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {attendance.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No attendance records</p>
          ) : (
            attendance.map((record) => (
              <div 
                key={record.id} 
                className="p-4 rounded-lg border bg-white transition-colors hover:bg-gray-50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      {/* Show employee name only for admin and HR */}
                      {(userRole === 'admin' || userRole === 'hr') && (
                        <h4 className="text-sm font-medium text-gray-900">{record.employeeName}</h4>
                      )}
                      <span className="text-sm text-gray-600">{formatDate(record.date)}</span>
                      {getStatusBadge(record.status)}
                    </div>
                    
                    {record.status !== 'absent' && (
                      <div className="mt-2 text-sm">
                        <div className="flex items-center gap-4">
                          <div>
                            <span className="text-gray-500">Check in:</span>{' '}
                            <span className="font-medium">{record.checkIn || 'Not recorded'}</span>
                          </div>
                          
                          <div>
                            <span className="text-gray-500">Check out:</span>{' '}
                            <span className="font-medium">{record.checkOut || 'Not recorded'}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceCard;