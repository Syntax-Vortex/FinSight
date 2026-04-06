export default function Navbar({ isAdmin, setIsAdmin }) {
    return (
        <div className="fixed top-0 left-0 z-40 flex h-16 w-full items-center justify-between gap-4 border-b-2 border-gray-200 bg-white px-4">
            <div className="flex min-w-0 items-center gap-3 text-violet-400">
                <svg
                    className="size-7 md:size-8 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 16v5" />
                    <path d="M16 14v7" />
                    <path d="M20 10v11" />
                    <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                    <path d="M4 18v3" />
                    <path d="M8 14v7" />
                </svg>

                <p className="truncate text-2xl md:text-3xl font-bold">FinSight</p>
            </div>

            <div className="flex md:hidden items-center gap-2 shrink-0">
                <p className="text-sm font-medium text-gray-600">Role</p>

                <div className="relative">
                    <select
                        value={isAdmin ? "admin" : "viewer"}
                        onChange={(e) => setIsAdmin(e.target.value === "admin")}
                        className="
                            appearance-none rounded-lg border-2 border-gray-200 bg-white
                            px-3 py-2 pr-8 text-sm text-gray-800 outline-none transition
                            hover:border-gray-300 hover:bg-gray-50 focus:border-violet-400 cursor-pointer
                        "
                    >
                        <option value="viewer">Viewer</option>
                        <option value="admin">Admin</option>
                    </select>

                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                        ▼
                    </span>
                </div>
            </div>
        </div>
    );
}