const incomeData = [
  { month: 'Mar', amount: 14200 },
  { month: 'Apr', amount: 16100 },
  { month: 'May', amount: 13800 },
  { month: 'Jun', amount: 18500 },
  { month: 'Jul', amount: 17200 },
  { month: 'Aug', amount: 19800 },
];

export default function IncomeOverview() {
  const maxAmount = Math.max(...incomeData.map(d => d.amount));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Income Overview</h2>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>All time</option>
        </select>
      </div>

      <div className="h-64 flex items-end justify-between gap-4 md:gap-6">
        {incomeData.map((data) => {
          const heightPercentage = (data.amount / maxAmount) * 100;

          return (
            <div key={data.month} className="flex-1 flex flex-col items-center gap-3">
              <div className="w-full relative group">
                <div
                  className="w-full bg-blue-600 rounded-t-lg transition-all hover:bg-blue-700 cursor-pointer"
                  style={{ height: `${heightPercentage * 2}px` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${data.amount.toLocaleString()}
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-600 font-medium">{data.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
