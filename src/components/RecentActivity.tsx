import { DollarSign, UserCheck, FileText, Home } from 'lucide-react';

const activities = [
  {
    icon: DollarSign,
    title: 'Payment Received',
    description: 'Alice Johnson paid $1,500',
    time: '2 hours ago',
    color: 'green',
  },
  {
    icon: UserCheck,
    title: 'New Tenant',
    description: 'Bob Williams moved into Unit 4B',
    time: '5 hours ago',
    color: 'blue',
  },
  {
    icon: FileText,
    title: 'Lease Signed',
    description: 'Charlie Brown signed 12-month lease',
    time: '1 day ago',
    color: 'purple',
  },
  {
    icon: Home,
    title: 'Maintenance Complete',
    description: 'HVAC repair at 789 Oak Ave',
    time: '2 days ago',
    color: 'orange',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-3 group cursor-pointer">
            <div className={`
              flex-shrink-0 w-10 h-10 rounded-lg
              bg-${activity.color}-50 text-${activity.color}-600
              flex items-center justify-center
              group-hover:scale-110 transition-transform
            `}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600 truncate">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
