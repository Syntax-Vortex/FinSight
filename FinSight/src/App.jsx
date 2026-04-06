import { useState } from "react";
import DashBody from "./Components/Dashboard/DashBody";
import Sidebar from "./Components/Sidebar/Sidebar";
import PageLayout from "./Layout/PageLayout";
import TransactionsBody from "./Components/Transactions/TransactionsBody";
import InsightsBody from "./Components/Insights/InsightsBody";

export default function App() {

    const [ activePanel, setActivePanel ] = useState(0);

  return (
    <PageLayout>
        {/* <Sidebar activePanel={activePanel} setActivePanel={setActivePanel}/>   */}
        {activePanel == 0 && <DashBody setActivePanel={setActivePanel}/>}
        {activePanel == 1 && <TransactionsBody /> }
        {activePanel == 2 && <InsightsBody /> }
        
    </PageLayout>
  )
}
