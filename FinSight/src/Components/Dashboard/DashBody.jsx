import AssetTotal from "./Cards/AssetTotal";
import BalanceChart from "./Cards/BalanceChart";
import MonthlyExpenses from "./Cards/MonthlyExpenses";
import MonthlyIncome from "./Cards/MonthlyIncome";
import MonthlySavings from "./Cards/MonthlySavings";
import PiChart from "./Cards/PiChart";

export default function DashBody() {
    return (
        <div className="mx-4 py-4 w-full h-full flex justify-start items-center">
            <div className="flex flex-col justify-start items-center h-full w-full gap-4">
                <div className="flex justify-start w-full items-center gap-2">
                    <AssetTotal />
                    <MonthlyIncome />
                    <MonthlyExpenses />
                    <MonthlySavings />
                </div>

                <div className="flex justify-start w-full items-start gap-2 h-full">
                    <BalanceChart />
                    <PiChart />
                </div>
            </div>



        </div>
    )
}