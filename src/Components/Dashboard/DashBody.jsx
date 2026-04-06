import BalanceChart from "./Cards/BalanceChart";
import Monthly from "./Cards/Monthly";
import PiChart from "./Cards/PiChart";
import Transactions from "./Cards/Transactions";

export default function DashBody({setActivePanel}) {
    return (
        <div className="mx-4 py-4 w-full h-full flex justify-start items-center">
            <div className="flex flex-col justify-start items-center h-full w-full gap-2 overflow-y-scroll">
                <div className="flex flex-wrap md:flex-nowrap justify-between w-full items-center gap-2">
                    <Monthly title='Asset Total' value={32419.63} percent={19}/>
                    <Monthly title='Monthly Expenses' value={32419.63} percent={19}/>
                    <Monthly title='Monthly Income' value={32419.63} percent={19}/>
                    <Monthly title='Monthly Savings' value={32419.63} percent={19}/>
                </div>

                <div className="flex justify-start w-full items-start gap-2 md:h-full">
                    <div className="w-full md:w-[60%] h-full flex flex-col justify-start items-center gap-2">
                        <BalanceChart />
                        <PiChart className='md:hidden'/>
                        <Transactions setActivePanel={setActivePanel}/>
                    </div>
                    <PiChart className={'hidden md:block'}/>
                </div>
            </div>



        </div>
    )
}