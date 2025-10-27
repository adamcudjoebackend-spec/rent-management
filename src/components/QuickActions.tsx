import { Plus, UserPlus, FileText, DollarSign } from 'lucide-react';

const actions = [
  { icon: Plus, label: 'Add Property', color: 'blue' },
  { icon: UserPlus, label: 'New Tenant', color: 'green' },
  { icon: FileText, label: 'Create Lease', color: 'purple' },
  { icon: DollarSign, label: 'Record Payment', color: 'emerald' },
];

export default function QuickActions() {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => (
        <button
          key={action.label}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg
            bg-${action.color}-600 hover:bg-${action.color}-700
            text-white font-medium
            transition-all duration-200
            shadow-lg shadow-${action.color}-600/30
            hover:shadow-xl hover:shadow-${action.color}-600/40
            transform hover:-translate-y-0.5
            hidden md:flex
          `}
        >
          <action.icon className="w-4 h-4" />
          <span className="text-sm">{action.label}</span>
        </button>
      ))}
    </div>
  );
}
