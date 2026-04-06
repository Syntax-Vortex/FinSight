import { useEffect, useState } from 'react';
import useDataStore from '../../../Stores/useDataStore';

import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function PiChart({ className }) {
    const { categoryData: data } = useDataStore();

    const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#3b82f6", "#a855f7"];

    const dataWithColors = data.map((entry, index) => ({
        ...entry,
        fill: COLORS[index % COLORS.length],
    }));

    const [isMd, setIsMd] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsMd(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!data.length) {
        return (
            <div className="w-[40%] h-62.5 flex items-center justify-center bg-white border-2 border-gray-200 rounded-xl">
                <p className="text-gray-500">No data available</p>
            </div>
        );
    }

    return (
        <div className={`w-full md:w-[40%] md:h-full min-h-66 h-auto bg-white border-2 border-gray-200 rounded-xl p-2 flex flex-col justify-around
                        items-center hover:scale-[1.01] duration-150 ${className}`}>
            <div className='text-xl font-semibold text-center'>Categorical Expenses</div>
            <div className='w-full h-full flex justify-start md:flex-col md:justify-center'>
                <div className='w-full h-full md:h-[70%]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={dataWithColors}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={65}
                                outerRadius={105}
                                paddingAngle={3}
                                labelLine={{ stroke: "#888", strokeWidth: isMd? 1 : 0 }}
                                label={({ name, percent }) => isMd? `${name} ${(percent * 100).toFixed(0)}%` : ''}
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

                <div className="md:w-full grid grid-cols-1 md:grid-cols-2 gap-2 px-4">
                    {dataWithColors.map((entry, index) => (
                        <div key={index} className="flex justify-end md:justify-start items-center space-x-2">
                            <p className="text-sm md:hidden">{entry.name}</p>
                            <div
                                className="min-w-4 min-h-4 rounded-sm"
                                style={{ backgroundColor: entry.fill }}
                            ></div>
                            <p className="text-sm hidden md:block">{entry.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}