export default function getMonthlyComparisonData(transactions) {
    const map = {};

    transactions.forEach((t) => {
        const date = new Date(t.date);
        const monthKey = date.toLocaleDateString("en-IN", {
            month: "short",
            year: "2-digit",
        });

        if (!map[monthKey]) {
            map[monthKey] = { month: monthKey, income: 0, expenses: 0 };
        }

        if (t.type === "income") {
            map[monthKey].income += t.amount;
        } else {
            map[monthKey].expenses += t.amount;
        }
    });

    return Object.values(map);
}