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
        <div className="mx-4 py-4 w-full h-full flex flex-col justify-start items-center gap-4">
            <div className="flex w-full justify-between items-center gap-4">
                <Card title={'Expenditure Last month'} value={`Rs. ${monthlyData.savings}`} Valuetype={2} percent={-3} percentType={1}/>
                <Card title={'Savings Last Month'} value={`Rs .${monthlyData.savings}`} Valuetype={1} percent={-7} percentType={2}/>
                <Card title={'Income last month'} value={`Rs. ${monthlyData.savings}`} Valuetype={1} percent={0} percentType={0}/>
                <Card title={'Top Spending Category'} value={top.category} Valuetype={2} percent={20} percentType={2}/>
                <Card title={'Avg. Transaction cost'} value={avg} Valuetype={2}/>
            </div>
            <div className="w-full flex-1">
                <MonthlyComparisonChart />
            </div>
        </div>
    )
}