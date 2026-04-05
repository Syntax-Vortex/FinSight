import DashBody from "./Components/Dashboard/DashBody";
import Sidebar from "./Components/Sidebar/Sidebar";
import PageLayout from "./Layout/PageLayout";

export default function App() {

  return (
    <PageLayout>
        <Sidebar />  
        <DashBody />
    </PageLayout>
  )
}
