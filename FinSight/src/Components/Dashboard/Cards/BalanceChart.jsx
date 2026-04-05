import useDataStore from '../../../Stores/useDataStore'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

export default function BalanceChart() {
    const { balanceData: data } = useDataStore();

    if (!data.length) {
        return (
            <div className="w-[60%] h-62.5 flex items-center justify-center bg-white border-2 border-gray-200 rounded-xl">
                <p className="text-gray-500">No data available</p>
            </div>
        );
    }

    return (
        <div className="w-full h-66 bg-white border-2 border-gray-200 rounded-xl p-2 flex flex-col justify-start items-center hover:scale-[1.01] duration-150">
            <p className='font-semibold text-xl'>Balance trend</p>
            <div className='w-[99%] h-full'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                        <CartesianGrid vertical={true} strokeDasharray="3 3" opacity={0.5} />

                        <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#6b7280" }} tickLine={false} axisLine={true} interval="preserveStartEnd" tickFormatter={(date) => new Date(date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                        })
                        } />

                        <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} tickLine={false} axisLine={true} tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`} />

                        <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }} labelFormatter={(date) => new Date(date).toLocaleDateString()} formatter={(value) => [`₹${value}`, "Balance"]} />

                        <Line type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={1.5} dot={false} activeDot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}