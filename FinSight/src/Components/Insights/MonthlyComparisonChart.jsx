import useDataStore from "../../Stores/useDataStore";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function MonthlyComparisonChart() {

    const { monthlyComparisonData: data } = useDataStore();

    return (
        <div className="w-full h-full bg-white border-2 border-gray-300 rounded-xl p-6">
            <div className="mb-4">
                <h2 className="text-gray-900 text-xl font-semibold">Monthly Comparison</h2>
                <p className="text-gray-500 text-sm">Income vs expenses by month</p>
            </div>

            <ResponsiveContainer width="100%" height="78%">
                <BarChart data={data} barGap={16}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                    
                    <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} tickLine={false} axisLine={false} />
                    
                    <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value / 1000}k`} />
                    
                    <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                        }}
                        labelStyle={{ color: "#111827" }}
                        formatter={(value, name) => [`₹${value.toLocaleString("en-IN")}`, name === "income" ? "Income" : "Expenses"]}
                    />

                    <Bar dataKey="income" fill="#22c55e" radius={[6, 6, 0, 0]} maxBarSize={46} />
                    <Bar dataKey="expenses" fill="#ef4444" radius={[6, 6, 0, 0]} maxBarSize={46} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}