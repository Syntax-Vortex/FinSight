import useDataStore from "../Stores/useDataStore";

export default function getTopCategory() {
    const {transactions} = useDataStore();

    const map = {};

    transactions.forEach((t) => {
        if (t.type !== "expense") return;

        if (!map[t.category]) {
            map[t.category] = 0;
        }

        map[t.category] += t.amount;
    });

    let topCategory = null;
    let topAmount = 0;

    for (const category in map) {
        if (map[category] > topAmount) {
            topAmount = map[category];
            topCategory = category;
        }
    }

    return {
        category: topCategory,
        amount: topAmount,
    };
}