export default function BiggestExpense({ expense }) {
    return (
        <div className="flex flex-col h-full w-45 justify-start items-start">
            <p className="font-semibold text-xl">{expense?.name}</p>
            <div className="flex justify-between items-end w-full text-xl font-semibold">
                <p className="text-gray-400 text-[16px]">Id: {expense?.id}</p>
                <p className="text-gray-400 text-[16px]">Date: {expense?.date}</p>
            </div>

            <p className="text-red-400 font-semibold text-2xl mt-3">Rs. {expense?.amount}</p>
            <p>{expense?.description}</p>
        </div>
    )
}