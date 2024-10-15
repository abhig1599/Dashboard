"use client"
export default function TopPerformers() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="font-bold mb-4">Top Performers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-purple-200 p-4 rounded-md">
          <p>XCritical</p>
          <p>Average Return: 3.7%</p>
          <p>Risk: 67%</p>
        </div>
        {/* Card 2 */}
        <div className="bg-purple-200 p-4 rounded-md">
          <p>XCritical</p>
          <p>Average Return: 3.7%</p>
          <p>Risk: 67%</p>
        </div>
        {/* Card 3 */}
        <div className="bg-purple-200 p-4 rounded-md">
          <p>XCritical</p>
          <p>Average Return: 3.7%</p>
          <p>Risk: 67%</p>
        </div>
        {/* Card 4 */}
        <div className="bg-purple-200 p-4 rounded-md">
          <p>XCritical</p>
          <p>Average Return: 3.7%</p>
          <p>Risk: 67%</p>
        </div>
      </div>
    </div>
  );
}
