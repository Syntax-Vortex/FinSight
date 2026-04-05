import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function PageLayout(props){
    const {children} = props;

    return(
        <div className="w-screen h-screen bg-gray-100">
            <Navbar />
            <div className="w-full h-full pt-15 flex justify-start items-center">
                {children}
            </div>
            
        </div>
    )
}