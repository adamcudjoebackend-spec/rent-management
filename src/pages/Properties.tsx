import { Search, Filter, MapPin, Home, DollarSign, Users, Plus, MoreVertical } from 'lucide-react';

const properties = [
  {
    id: 1,
    name: '123 Maple Street',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    type: 'Apartment',
    units: 4,
    occupied: 3,
    monthlyIncome: 4800,
    address: '123 Maple St, Boston, MA',
    status: 'active',
  },
  {
    id: 2,
    name: '789 Oak Avenue',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    type: 'Apartment',
    units: 6,
    occupied: 5,
    monthlyIncome: 7200,
    address: '789 Oak Ave, Boston, MA',
    status: 'active',
  },
  {
    id: 3,
    name: '456 Pine Lane',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    type: 'House',
    units: 1,
    occupied: 1,
    monthlyIncome: 2400,
    address: '456 Pine Ln, Cambridge, MA',
    status: 'active',
  },
  {
    id: 4,
    name: '321 Birch Road',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    type: 'Condo',
    units: 1,
    occupied: 0,
    monthlyIncome: 0,
    address: '321 Birch Rd, Somerville, MA',
    status: 'vacant',
  },
];

export default function Properties() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Properties</h1>
          <p className="text-gray-600">Manage your property portfolio</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-xl transform hover:-translate-y-0.5">
          <Plus className="w-5 h-5" />
          <span className="font-semibold">Add Property</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              {property.status === 'vacant' && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                    Vacant
                  </span>
                </div>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{property.address}</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <Home className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Type</p>
                  <p className="text-sm font-semibold text-gray-900">{property.type}</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <Users className="w-4 h-4 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Units</p>
                  <p className="text-sm font-semibold text-gray-900">{property.occupied}/{property.units}</p>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <DollarSign className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Income</p>
                  <p className="text-sm font-semibold text-gray-900">${property.monthlyIncome}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm">
                    View Details
                  </button>
                  <button className="flex-1 px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
