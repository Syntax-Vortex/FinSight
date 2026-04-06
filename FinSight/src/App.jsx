import { useState } from "react";
import DashBody from "./Components/Dashboard/DashBody";
import Sidebar from "./Components/Sidebar/Sidebar";
import PageLayout from "./Layout/PageLayout";
import TransactionsBody from "./Components/Transactions/TransactionsBody";
import InsightsBody from "./Components/Insights/InsightsBody";

export default function App() {

    const [ activePanel, setActivePanel ] = useState(0);
    const [ isAdmin, setIsAdmin ] = useState(false);

  return (
    <PageLayout setIsAdmin={setIsAdmin} isAdmin={isAdmin}>
        <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>  
        {activePanel == 0 && <DashBody setActivePanel={setActivePanel}/>}
        {activePanel == 1 && <TransactionsBody isAdmin={isAdmin}/> }
        {activePanel == 2 && <InsightsBody /> }
        
    </PageLayout>
  )
}
