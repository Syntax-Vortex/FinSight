export default function Card(props) {
    const { title, value, Valuetype, percent, percentType } = props;

    return (
        <div className="flex-1 h-46.25 md:h-55 lg:h-45 border-2 max-w-62.5 border-gray-300 rounded-xl bg-white py-4 px-6 flex flex-col gap-4 justify-start items-start
                        hover:scale-[1.01] hover:shadow-lg duration-150">
            <p className="lg:font-semibold text-md lg:text-lg text-gray-400">{title}</p>

            <div className={`font-semibold text-xl lg:text-3xl flex justify-start items-center gap-4 ${Valuetype == 1? 'text-green-500' : Valuetype==2? 'text-red-500' : ''}`}>
                {value}
            </div>

            <div className={`lg:font-semibold px-2 rounded-md text-sm ${percentType == 1? 'text-green-500 bg-green-100' : percentType==2? 'text-red-500 bg-red-100' 
                                : percentType==0? '' : 'opacity-0'}`}>
                {percent}% change this month
            </div>
        </div>
    )
}