import useDataStore from "../Stores/useDataStore";

export default function getMonthlyData() {
    const { transactions } = useDataStore();

    const aprilData = { income: 0, expenses: 0, savings: 0 };

    transactions.forEach((t) => {
        const date = new Date(t.date);

        if (date.getMonth() === 3) {
            if (t.type === "income") {
                aprilData.income += t.amount;
            } else {
                aprilData.expenses += t.amount;
            }
        }
    });

    aprilData.savings = aprilData.income - aprilData.expenses;

    return aprilData;
}