import React from 'react';
import { Card } from '../ui/Card';
import { DashboardStat } from '../../types';
import { 
  Users, Clock, Briefcase, Trophy, Calendar, 
  FileText, CheckCircle, AlertTriangle 
} from 'lucide-react';

interface StatCardProps {
  stat: DashboardStat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const getIcon = () => {
    switch (stat.icon) {
      case 'Users':
        return <Users size={24} />;
      case 'Clock':
        return <Clock size={24} />;
      case 'Briefcase':
        return <Briefcase size={24} />;
      case 'Trophy':
        return <Trophy size={24} />;
      case 'Calendar':
        return <Calendar size={24} />;
      case 'FileText':
        return <FileText size={24} />;
      case 'CheckCircle':
        return <CheckCircle size={24} />;
      case 'AlertTriangle':
        return <AlertTriangle size={24} />;
      default:
        return <Users size={24} />;
    }
  };

  const getColors = () => {
    switch (stat.color) {
      case 'indigo':
        return { bg: 'bg-indigo-100', text: 'text-indigo-600' };
      case 'emerald':
        return { bg: 'bg-emerald-100', text: 'text-emerald-600' };
      case 'amber':
        return { bg: 'bg-amber-100', text: 'text-amber-600' };
      case 'blue':
        return { bg: 'bg-blue-100', text: 'text-blue-600' };
      case 'red':
        return { bg: 'bg-red-100', text: 'text-red-600' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600' };
    }
  };

  const { bg, text } = getColors();

  return (
    <Card className="overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
          <div className={`p-2 rounded-full ${bg}`}>
            <div className={text}>{getIcon()}</div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
          {stat.change !== undefined && (
            <p className={`flex items-center mt-1 text-xs ${stat.change >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
              {stat.change >= 0 ? '+' : ''}{stat.change}
              <span className="ml-2">from last month</span>
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;