export default function TransactionCard({ transaction }) {
    const categoryColors = {
        Food: "#6366f1",
        Shopping: "#22c55e",
        Travel: "#f59e0b",
        Bills: "#ef4444",
        Entertainment: "#3b82f6",
        Health: "#a855f7",
        Salary: "#14b8a6",
        Freelance: "#f97316"
    };

    const isAdmin = true;

    return (
        <>
            <div className="w-full hidden md:grid grid-cols-[0.8fr_1.2fr_1fr_1fr_1fr_1fr_2fr_0.5fr] items-center px-4 py-3 text-xl border-b
                        border-gray-200 hover:bg-gray-100 rounded-md duration-150">
                <p className="text-gray-500 font-semibold">ID: {transaction.id}</p>

                <p className=" font-semibold">{transaction.name}</p>

                <p className={`${(transaction.type == 'income') ? 'text-green-400' : 'text-red-400'}`}>
                    {transaction.amount}
                </p>

                <p className={`${(transaction.type == 'income') ? 'text-green-400' : 'text-red-400'}`}>
                    {transaction.type}
                </p>

                <p style={{ color: categoryColors[transaction.category] }}>
                    {transaction.category}
                </p>

                <p>{transaction.date}</p>

                <p className="wrap-break-words">
                    {transaction.description}
                </p>

                <button disabled={!isAdmin} className={`ml-auto duration-150 ${isAdmin ? "hover:text-red-800 active:text-red-950 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"}`}>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                </button>
            </div>

            <div className="w-full flex md:hidden flex-col gap-2 px-2">
                <div className="flex flex-wrap  justify-start items-center text-md gap-4 mt-2">
                    <p className="text-gray-500 font-semibold">ID: {transaction.id}</p>

                    <p className=" font-semibold">{transaction.name}</p>

                    <p className={`${(transaction.type == 'income') ? 'text-green-400' : 'text-red-400'}`}>
                        {transaction.amount}
                    </p>

                    <p className={`${(transaction.type == 'income') ? 'text-green-400' : 'text-red-400'}`}>
                        {transaction.type}
                    </p>

                    <p style={{ color: categoryColors[transaction.category] }}>
                        {transaction.category}
                    </p>

                    <p>{transaction.date}</p>

                    <p className="wrap-break-words">
                        {transaction.description}
                    </p>

                    <button disabled={!isAdmin} className={`ml-auto duration-150 ${isAdmin ? "hover:text-red-800 active:text-red-950 cursor-pointer"
                        : "opacity-50 cursor-not-allowed"}`}>
                        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                    </button>
                </div>

                <hr className="text-gray-400"/>
            </div>

        </>

    )
}