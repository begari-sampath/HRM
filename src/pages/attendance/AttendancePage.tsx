import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { mockAttendance } from '../../data/mockData';
import { Attendance } from '../../types';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const AttendancePage: React.FC = () => {
  const [attendance] = useState<Attendance[]>(mockAttendance);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-600">Track daily attendance and working hours</p>
        </div>
        <Button
          variant={isCheckedIn ? "danger" : "success"}
          onClick={() => setIsCheckedIn(!isCheckedIn)}
        >
          {isCheckedIn ? (
            <>
              <XCircle size={20} className="mr-2" />
              Check Out
            </>
          ) : (
            <>
              <CheckCircle size={20} className="mr-2" />
              Check In
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-4">
        {attendance.map((record) => (
          <Card key={record.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {record.employeeName}
                    </h3>
                    {getStatusBadge(record.status)}
                  </div>
                  <p className="text-gray-600">
                    {new Date(record.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                {record.status !== 'absent' && (
                  <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Check In</p>
                        <p className="font-semibold">{record.checkIn || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Check Out</p>
                        <p className="font-semibold">{record.checkOut || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AttendancePage;