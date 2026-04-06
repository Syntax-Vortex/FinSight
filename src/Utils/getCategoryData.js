export default function getCategoryData(transactions) {
    const map = {};

    transactions.forEach((t) => {
        if (t.type === "expense") {
            map[t.category] = (map[t.category] || 0) + t.amount;
        }
    });

    return Object.entries(map).map(([name, value]) => ({
        name,
        value,
    }));
}