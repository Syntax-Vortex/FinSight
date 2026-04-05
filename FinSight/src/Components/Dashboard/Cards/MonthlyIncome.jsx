export default function MonthlyIncome() {
    return (
        <div className="w-[320px] border-2 border-gray-200 rounded-xl bg-white py-4 px-6 flex flex-col gap-4 justify-start items-start">
            <p className="font-semibold text-lg text-gray-400">Monthly Income</p>

            <div className="font-semibold text-3xl flex justify-start items-center gap-4">
                ₨ 32,619.36
                <div>
                    <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
            </div>

            <p className="text-green-400 bg-green-100 px-1 rounded-sm mt-5 text-sm">+19% vs last month</p>
        </div>
    )
}