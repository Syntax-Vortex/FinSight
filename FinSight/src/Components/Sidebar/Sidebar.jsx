export default function Sidebar({ setActivePanel, activePanel }) {
    const baseBtn =
        "flex items-center rounded-lg duration-150 cursor-pointer";
    const activeBtn = "text-white bg-violet-400";
    const inactiveBtn = "hover:bg-gray-200 hover:text-black";

    return (
        <div
            className="
                fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] z-50
                flex justify-around items-center px-2
                md:static md:h-full md:w-1/7 md:border-t-0 md:shadow-none md:flex-col md:justify-start md:items-stretch md:py-4 md:px-2 md:gap-6
            "
        >
            <div className="w-full flex justify-around items-center md:flex-col md:justify-start md:items-stretch md:gap-2">
                <button
                    className={`
                        ${baseBtn}
                        ${activePanel == 0 ? activeBtn : inactiveBtn}
                        flex-col gap-1 px-2 py-1 text-[11px] min-w-0
                        md:flex-row md:justify-start md:gap-4 md:p-2 md:text-base
                    `}
                    onClick={() => setActivePanel(0)}
                >
                    <svg
                        className="size-5 md:size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="7" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                    <span className="truncate">Dashboard</span>
                </button>

                <button
                    className={`
                        ${baseBtn}
                        ${activePanel == 1 ? activeBtn : inactiveBtn}
                        flex-col gap-1 px-2 py-1 text-[11px] min-w-0
                        md:flex-row md:justify-start md:gap-4 md:p-2 md:text-base
                    `}
                    onClick={() => setActivePanel(1)}
                >
                    <svg
                        className="size-5 md:size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                        <path d="M12 18V6" />
                    </svg>
                    <span className="truncate">Transactions</span>
                </button>

                <button
                    className={`
                        ${baseBtn}
                        ${activePanel == 2 ? activeBtn : inactiveBtn}
                        flex-col gap-1 px-2 py-1 text-[11px] min-w-0
                        md:flex-row md:justify-start md:gap-4 md:p-2 md:text-base
                    `}
                    onClick={() => setActivePanel(2)}
                >
                    <svg
                        className="size-5 md:size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                    </svg>
                    <span className="truncate">Insights</span>
                </button>
            </div>
        </div>
    );
}