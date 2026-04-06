import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function PageLayout(props){
    const {children, isAdmin, setIsAdmin} = props;

    return(
        <div className="w-screen h-screen bg-gray-100">
            <Navbar  setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>
            <div className="w-full h-full pt-15 flex justify-start items-center">
                {children}
            </div>
            
        </div>
    )
}