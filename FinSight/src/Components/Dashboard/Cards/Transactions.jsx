import { useEffect, useState } from "react";
import useDataStore from "../../../Stores/useDataStore"
import BiggestExpense from "./BiggestExpense";

export default function Transactions({setActivePanel}) {
    const { transactions } = useDataStore();
    const [sortedExpenses, setSortedExpenses] = useState([]);

    useEffect(() => {
        setSortedExpenses(transactions.filter(t => t.type === 'expense').sort((a, b) => b.amount - a.amount));
    }, [transactions])

    return (
        <div className="w-full h-auto flex-1 bg-white border-2 border-gray-200 rounded-xl hover:scale-[1.01] duration-150 flex px-4
                        py-2 flex-col justify-around items-center gap-2">
            <div className="flex justify-end items-center w-full">
                <p className="font-semibold text-lg md:text-xl ml-auto">Biggest Expenses for the month</p>
                <button className="ml-auto text-md md:text-lg text-blue-400 hover:underline cursor-pointer" onClick={() => {setActivePanel(1)}}>View All</button>
            </div>
            <div className="h-0.5 w-[95%] bg-gray-200 md:hidden"></div>
            <div className="flex flex-wrap w-full justify-between items-center gap-2">
                <BiggestExpense expense={sortedExpenses[0]} />
                <div className="w-0.5 h-[95%] bg-gray-300 hidden md:block"></div>
                <div className="h-0.5 w-[95%] bg-gray-200 md:hidden"></div>
                <BiggestExpense expense={sortedExpenses[1]} />
                <div className="w-0.5 h-[95%] bg-gray-300 hidden md:block"></div>
                <div className="h-0.5 w-[95%] bg-gray-200 md:hidden"></div>
                <BiggestExpense expense={sortedExpenses[2]} />
            </div>
        </div>
    )
}