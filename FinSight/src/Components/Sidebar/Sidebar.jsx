export default function Sidebar({ setActivePanel, activePanel }) {

    return (
        <div className="h-full w-1/7 bg-white flex flex-col py-4 px-2 gap-6">
            <div className="flex flex-col gap-2">
                <button className={` flex justify-start items-center gap-4 p-2 rounded-lg duration-150 cursor-pointer
                        ${(activePanel==0)? ' text-white bg-violet-400' : ' hover:bg-gray-200 hover:text-black hover:border-gray-200'}`} 
                        onClick={() => setActivePanel(0)}>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
                    Dashboard
                </button>

                <button className={` flex justify-start items-center gap-4 p-2 rounded-lg duration-150  cursor-pointer
                        ${(activePanel==1)? ' text-white bg-violet-400' : ' hover:bg-gray-200 hover:text-black hover:border-gray-200'}`}
                         onClick={() => setActivePanel(1)}>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                    Transactions
                </button>

                <button className={` flex justify-start items-center gap-4 p-2 rounded-lg duration-150  cursor-pointer
                        ${(activePanel==2)? ' text-white bg-violet-400' : ' hover:bg-gray-200 hover:text-black hover:border-gray-200'}`}
                         onClick={() => setActivePanel(2)}>
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                    Insights
                </button>
            </div>

        </div>
    )
}