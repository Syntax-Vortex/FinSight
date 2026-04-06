import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import TransactionCard from "./TransactionCard";
import useDataStore from "../../Stores/useDataStore";
import AddTransactionModal from "./AddTransactionModal";

export default function TransactionsBody({ isAdmin }) {
    const { transactions } = useDataStore();
    const [finalTransactions, setFinalTransactions] = useState([]);

    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Date");

    const [addTransactionOpen, setAddTransactionOpen] = useState(false);

    const [searchVal, setSearchVal] = useState("");

    const categories = ["All", "Salary", "Freelance", "Food", "Shopping", "Travel", "Bills", "Entertainment", "Health"];
    const sortOptions = ["Date", "Name"];

    const getProcessedTransactions = (includeSearch = true) => {
        let temp = [...transactions];

        if (includeSearch && searchVal !== "") {
            temp = temp.filter((transaction) =>
                transaction.name.toLowerCase().includes(searchVal.toLowerCase())
            );
        }

        if (selectedCategory !== "All") {
            temp = temp.filter((item) => item.category === selectedCategory);
        }

        if (selectedSort === "Name") {
            temp.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSort === "Date") {
            temp.sort((a, b) => b.date.localeCompare(a.date));
        }

        return temp;
    };

    const search = () => {
        setFinalTransactions(getProcessedTransactions(true));
    };

    useEffect(() => {
        setFinalTransactions(getProcessedTransactions(false));
        setSearchVal("");
    }, [transactions, selectedCategory, selectedSort]);

    return (
        <div className="w-full h-full flex flex-col gap-4 bg-white rounded-md md:mx-4 md:p-4 min-w-0">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center w-full gap-4 lg:gap-6 min-w-0">
                <div className="w-full lg:flex-1 lg:min-w-0 h-11 md:h-10 flex items-center justify-between border-2 border-gray-300 rounded-lg px-3 md:px-2 text-gray-800">
                    <input
                        className="flex-1 min-w-0 h-full border-none outline-0 bg-transparent text-sm md:text-base"
                        type="text"
                        placeholder="Search by name"
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)} />

                    <button
                        onClick={search}
                        className="h-full flex items-center justify-center pl-3 ml-3 border-l-2 border-gray-300 shrink-0">
                        <svg
                            className="size-5 md:size-6 text-gray-400 hover:text-gray-800 duration-150"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="m21 21-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </svg>
                    </button>
                </div>

                <div className="w-full lg:w-auto flex items-center justify-between sm:justify-start gap-4 md:gap-6 flex-wrap shrink-0">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                        <p className="font-semibold text-gray-600 text-sm md:text-base lg:text-xl whitespace-nowrap">
                            Filter:
                        </p>
                        <Dropdown
                            options={categories}
                            open={categoryDropdownOpen}
                            setOpen={setCategoryDropdownOpen}
                            selected={selectedCategory}
                            setSelected={setSelectedCategory}
                        />
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                        <p className="font-semibold text-gray-600 text-sm md:text-base lg:text-xl whitespace-nowrap">
                            Sort:
                        </p>
                        <Dropdown
                            options={sortOptions}
                            open={sortDropdownOpen}
                            setOpen={setSortDropdownOpen}
                            selected={selectedSort}
                            setSelected={setSelectedSort}
                        />
                    </div>

                    <AddTransactionModal open={addTransactionOpen} setOpen={setAddTransactionOpen} />

                    <button disabled={!isAdmin} onClick={() => setAddTransactionOpen(true)}
                        className={`px-5 py-2 rounded-md text-white duration-150
                            ${isAdmin? "bg-blue-400 hover:bg-blue-300 cursor-pointer": "bg-blue-200 cursor-not-allowed opacity-70"}`}>Add+
                    </button>
                </div>
            </div>

            <div className="w-full flex-1 min-h-0 flex flex-col justify-start items-center min-w-0">
                <div className="bg-gray-200 w-full h-12 hidden md:grid grid-cols-[0.8fr_1.2fr_1fr_1fr_1fr_1fr_2fr_0.5fr] items-center text-base lg:text-xl font-semibold px-4 rounded-md text-gray-600 min-w-0">
                    <p>ID</p>
                    <p>Name</p>
                    <p>Amount</p>
                    <p>Type</p>
                    <p>Category</p>
                    <p>Date</p>
                    <p>Description</p>
                    <p>Delete</p>
                </div>

                <div className="w-full flex-1 min-h-0 overflow-y-auto overflow-x-hidden min-w-0">
                    {finalTransactions.length > 0 &&
                        finalTransactions.map((transaction) => (
                            <TransactionCard transaction={transaction} key={transaction.id} isAdmin={isAdmin} />
                        ))}
                </div>
            </div>
        </div>
    );
}