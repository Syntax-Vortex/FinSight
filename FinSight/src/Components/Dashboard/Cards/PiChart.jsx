import useDataStore from '../../../Stores/useDataStore';

import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function PiChart() {
    const { categoryData: data } = useDataStore();

    const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#3b82f6", "#a855f7"];

    const dataWithColors = data.map((entry, index) => ({
        ...entry,
        fill: COLORS[index % COLORS.length],
    }));

    if (!data.length) {
        return (
            <div className="w-[40%] h-62.5 flex items-center justify-center bg-white border-2 border-gray-200 rounded-xl">
                <p className="text-gray-500">No data available</p>
            </div>
        );
    }

    return (
        <div className="w-[40%] h-full bg-white border-2 border-gray-200 rounded-xl p-2 flex flex-col justify-start items-center hover:scale-[1.01] duration-150">
            <p className='text-xl font-semibold'>Categorical Expenses</p>
            <div className='w-full h-[80%]'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={dataWithColors}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={65}
                            outerRadius={105}
                            paddingAngle={3}
                            labelLine={{ stroke: "#888", strokeWidth: 1 }}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        />
                        <Tooltip
                            formatter={(value) => [`₹${value}`, "Amount"]}
                            contentStyle={{
                                fontSize: '12px',
                                padding: '4px 8px',
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Color category grid */}
            <div className="w-full mt-4 grid grid-cols-2 gap-2 px-4">
                {dataWithColors.map((entry, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div
                            className="w-4 h-4 rounded-sm"
                            style={{ backgroundColor: entry.fill }}
                        ></div>
                        <p className="text-sm">{entry.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}