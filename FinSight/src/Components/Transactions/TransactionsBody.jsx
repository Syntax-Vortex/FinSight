import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import TransactionCard from "./TransactionCard";
import useDataStore from "../../Stores/useDataStore";

export default function TransactionsBody() {
    const { transactions } = useDataStore();
    const [finalTransactions, setFinalTransactions] = useState([]);

    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Date");

    const [searchVal, setSearchVal] = useState('');

    const categories = ['All', "Salary", "Freelance", "Food", 'Shopping', 'Travel', 'Bills', 'Entertainment', 'Health'];
    const sortOptions = ['Date', 'Name'];

    const search = () => {
        let temp = [...transactions];

        if (searchVal !== '') {
            temp = temp.filter(transaction =>transaction.name.toLowerCase().includes(searchVal.toLowerCase()));
        }

        if (selectedCategory !== 'All') {
            temp = temp.filter(item => item.category === selectedCategory);
        }

        if (selectedSort === 'Name') {
            temp.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSort === 'Date') {
            temp.sort((a, b) => b.date.localeCompare(a.date));
        }

        setFinalTransactions(temp);
    };

    useEffect(() => {
        let temp = transactions;

        if (selectedCategory !== 'All') temp = temp.filter(item => item.category == selectedCategory);
        else temp = temp;

        if (selectedSort == 'Name') temp.sort((a, b) => a.name.localeCompare(b.name));
        else if (selectedSort == 'Date') temp.sort((a, b) => b.date.localeCompare(a.date));

        setFinalTransactions(temp);
        setSearchVal('');
    }, [selectedCategory, selectedSort])

    return (
        <div className="mx-4 p-4 w-full h-full flex flex-col gap-4 justify-start items-start bg-white rounded-md">
            <div className="flex justify-start items-center w-full gap-6">
                <div className="flex-1 h-10 pl-2 pr-4 border-2 border-gray-300 outline-0 flex justify-between items-center text-gray-800">
                    <input className="w-[90%] h-full border-none outline-0" type="text" placeholder="Search by name"
                        value={searchVal} onChange={(e) => { setSearchVal(e.target.value) }} />
                    <button onClick={search} className="border-l-2 border-gray-300 h-full pl-4">
                        <svg className="size-6 text-gray-400 hover:text-gray-800 cursor-pointer duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                    </button>
                </div>

                <div className="flex justify-start items-center h-full gap-4">
                    <p className="font-semibold text-gray-600 text-xl">Filter: </p>
                    <Dropdown options={categories} open={categoryDropdownOpen} setOpen={setCategoryDropdownOpen} selected={selectedCategory}
                        setSelected={setSelectedCategory} />
                </div>

                <div className="flex justify-start items-center h-full gap-4">
                    <p className="font-semibold text-gray-600 text-xl">Sort: </p>
                    <Dropdown options={sortOptions} open={sortDropdownOpen} setOpen={setSortDropdownOpen} selected={selectedSort}
                        setSelected={setSelectedSort} />
                </div>
            </div>


            <div className="w-full flex-1 min-h-0 flex flex-col justify-start items-center">
                <div className="bg-gray-200 w-full h-12 grid grid-cols-[0.8fr_1.2fr_1fr_1fr_1fr_1fr_2fr_0.5fr] items-center text-xl font-semibold px-4 rounded-md text-gray-600">
                    <p>ID</p>
                    <p>Name</p>
                    <p>Amount</p>
                    <p>Type</p>
                    <p>Category</p>
                    <p>Date</p>
                    <p>Description</p>
                    <p>Delete</p>
                </div>

                <div className="w-full flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
                    {finalTransactions.length > 0 && finalTransactions.map((transaction, i) => {
                        return (
                            <TransactionCard transaction={finalTransactions[i]} key={transaction.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}