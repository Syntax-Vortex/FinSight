export default function Sidebar() {
    return (
        <div className="h-full w-1/7 bg-white flex flex-col py-4 px-2 gap-6">
            

            <div className="flex flex-col gap-2">
                <button className=" flex justify-start items-center gap-4 text-white bg-violet-400 p-2 rounded-lg">
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
                    Dashboard
                </button>

                <button className=" flex justify-start items-center gap-4 p-2 rounded-lg hover:bg-gray-200 duration-150">
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
                    Dashboard
                </button>

                <button className=" flex justify-start items-center gap-4 p-2 rounded-lg  hover:bg-gray-200 duration-150">
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
                    Dashboard
                </button>
            </div>

        </div>
    )
}