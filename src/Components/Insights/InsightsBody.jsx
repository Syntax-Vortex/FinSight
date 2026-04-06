import { getAverageSpend } from "../../Utils/getAverageSpend";
import getMonthlyData from "../../Utils/getMonthlyData";
import getTopCategory from "../../Utils/getTopCategory";
import Card from "./Card";
import MonthlyComparisonChart from "./MonthlyComparisonChart";

export default function InsightsBody() {
    let monthlyData = getMonthlyData();
    const top = getTopCategory();
    const avg = getAverageSpend();

    return (
        <div className="w-full flex-1 min-h-0 overflow-y-auto px-4 pt-45 pb-24 md:pt-6 md:pb-0">
            <div className="w-full flex flex-col justify-start items-center gap-4">
                <div className="flex flex-wrap lg:flex-nowrap w-full justify-between items-center gap-4">
                    <Card title={'Expenditure Last month'} value={`Rs. ${monthlyData.savings}`} Valuetype={2} percent={-3} percentType={1} />
                    <Card title={'Savings Last Month'} value={`Rs .${monthlyData.savings}`} Valuetype={1} percent={-7} percentType={2} />
                    <Card title={'Income last month'} value={`Rs. ${monthlyData.savings}`} Valuetype={1} percent={0} percentType={0} />
                    <Card title={'Top Category'} value={top.category} Valuetype={2} percent={20} percentType={2} />
                    <Card title={'Avg. Transaction cost'} value={avg} Valuetype={2} />
                </div>

                <div className="w-full h-80 lg:h-100">
                    <MonthlyComparisonChart />
                </div>
            </div>
        </div>
    )
}