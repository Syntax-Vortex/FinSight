export default function BiggestExpense({ expense }) {
    return (
        <div className="flex flex-col md:h-full w-45 justify-start items-start">
            <p className="font-semibold text-lg md:text-xl">{expense?.name}</p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full text-lg md:text-xl font-semibold">
                <p className="text-gray-400 text-[16px]">Id: {expense?.id}</p>
                <p className="text-gray-400 text-[16px]">Date: {expense?.date}</p>
            </div>

            <p className="text-red-400 md:font-semibold text-lg md:text-2xl mt-3">Rs. {expense?.amount}</p>
            <p>{expense?.description}</p>
        </div>
    )
}