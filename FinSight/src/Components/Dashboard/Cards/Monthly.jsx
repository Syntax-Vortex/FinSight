export default function Monthly(props) {
    const {title, value, percent} = props;

    return (
        <div className="flex-1 max-w-50 md:flex-nowrap p-3 lg:pb-8 border-2 border-gray-200 rounded-xl bg-white lg:py-4 lg:px-6 flex flex-col gap-4 justify-start items-start
                        hover:scale-[1.01] hover:shadow-lg duration-150">
            <p className="font-semibold text-md text-gray-400 text-nowrap">{title}</p>

            <div className="font-semibold text-lg lg:text-2xl flex justify-start items-center gap-4 text-nowrap">
                ₨ {value}
                <div>
                    <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
            </div>
        </div>
    )
}