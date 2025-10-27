import { Search, Filter, Mail, Phone, MapPin, Calendar, Plus, MoreVertical } from 'lucide-react';

const tenants = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@email.com',
    phone: '(555) 123-4567',
    property: '123 Maple St, Unit 4B',
    leaseStart: 'Jan 15, 2024',
    leaseEnd: 'Oct 15, 2024',
    rent: 1500,
    status: 'active',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob.williams@email.com',
    phone: '(555) 234-5678',
    property: '789 Oak Ave, Apt 2',
    leaseStart: 'Mar 1, 2024',
    leaseEnd: 'Oct 28, 2024',
    rent: 1200,
    status: 'active',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@email.com',
    phone: '(555) 345-6789',
    property: '456 Pine Ln, House',
    leaseStart: 'Feb 5, 2024',
    leaseEnd: 'Nov 5, 2024',
    rent: 2400,
    status: 'active',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    id: 4,
    name: 'Diana Miller',
    email: 'diana.miller@email.com',
    phone: '(555) 456-7890',
    property: '321 Birch Rd, Unit 10',
    leaseStart: 'Jan 12, 2024',
    leaseEnd: 'Nov 12, 2024',
    rent: 1800,
    status: 'active',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
];

export default function Tenants() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tenants</h1>
          <p className="text-gray-600">Manage your tenant information</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-600/30 hover:shadow-xl transform hover:-translate-y-0.5">
          <Plus className="w-5 h-5" />
          <span className="font-semibold">Add Tenant</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tenants..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tenants.map((tenant) => (
          <div
            key={tenant.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={tenant.photo}
                  alt={tenant.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{tenant.name}</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    Active Lease
                  </span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{tenant.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{tenant.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{tenant.property}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl mb-4">
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Lease Period</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">{tenant.leaseStart} - {tenant.leaseEnd}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Monthly Rent</p>
                <p className="text-2xl font-bold text-gray-900">${tenant.rent}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm">
                View Details
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
