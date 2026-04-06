import useDataStore from "../Stores/useDataStore";

export function getAverageSpend() {
    const {transactions} = useDataStore();
    
    const expenses = transactions.filter((t) => t.type === "expense");

    if (!expenses.length) return 0;

    const total = expenses.reduce((sum, t) => sum + t.amount, 0);

    return Number((total / expenses.length).toFixed(2));
}