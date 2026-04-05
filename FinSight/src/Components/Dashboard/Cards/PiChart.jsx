import Data from '../../../Data/transactions.json';
import getCategoryData from '../../../Utils/getCategoryData';

import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function PiChart() {
    const transactions = Data.transactions;

    const data = getCategoryData(transactions);

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
        <div className="w-[40%] h-62.5 bg-white border-2 border-gray-200 rounded-xl p-2">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={dataWithColors}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={3}
                    />
                    <Tooltip formatter={(value) => [`₹${value}`, "Amount"]} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}