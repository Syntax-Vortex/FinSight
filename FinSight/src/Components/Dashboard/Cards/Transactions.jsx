import { useEffect, useState } from "react";
import useDataStore from "../../../Stores/useDataStore"
import BiggestExpense from "./BiggestExpense";

export default function Transactions() {
    const { transactions } = useDataStore();
    const [sortedExpenses, setSortedExpenses] = useState([]);

    useEffect(() => {
        setSortedExpenses(transactions.filter(t => t.type === 'expense').sort((a, b) => b.amount - a.amount));
    }, [transactions])

    return (
        <div className="w-full flex-1 bg-white border-2 border-gray-200 rounded-xl hover:scale-[1.01] duration-150 flex px-4
                        py-2 flex-col justify-between items-center">
            <div className="flex justify-end items-center w-full">
                <p className="font-semibold text-xl ml-auto">Biggest Expenses for the month</p>
                <div className="ml-auto text-blue-400 hover:underline cursor-pointer">View All</div>
            </div>
            <div className="flex w-full justify-between items-center">
                <BiggestExpense expense={sortedExpenses[0]} />
                <div className="w-0.5 h-[95%] bg-gray-300"></div>
                <BiggestExpense expense={sortedExpenses[1]} />
                <div className="w-0.5 h-[95%] bg-gray-300"></div>
                <BiggestExpense expense={sortedExpenses[2]} />
            </div>
        </div>
    )
}