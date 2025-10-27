export default function PropertyStatus() {
  const occupied = 10;
  const vacant = 2;
  const total = occupied + vacant;
  const occupiedPercentage = (occupied / total) * 100;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Property Status</h2>

      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="20"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#22C55E"
              strokeWidth="20"
              strokeDasharray={`${occupiedPercentage * 5.03} ${(100 - occupiedPercentage) * 5.03}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-gray-900">{occupied}</div>
            <div className="text-sm text-gray-500">Occupied</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-12 w-full">
          <div className="text-center">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Occupied</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{occupied}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="text-sm text-gray-600">Vacant</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{vacant}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
