export default function Navbar(){
    return(
        <div className="flex w-full h-15 bg-white fixed top-0 justify-start items-center gap-6 px-4 border-b-2 border-gray-200">

            <div className="w-full flex flex-col text-left text-violet-400 gap-2 items-center">
                <div className="w-full flex text-left text-violet-400 gap-4">
                    <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16v5" /><path d="M16 14v7" /><path d="M20 10v11" /><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" /><path d="M4 18v3" /><path d="M8 14v7" /></svg>
                    <p className="font-bold text-3xl">FinSight</p>
                </div>
            </div>
        </div>
    )
}