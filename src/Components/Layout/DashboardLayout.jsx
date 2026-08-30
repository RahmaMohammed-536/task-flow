import SideBar from "./Sidebar";
import TopBar from "./Topbar";
function Dashboardlayout({children}){
    return(
        <div className="min-h-screen flex">
            <SideBar/>
            <div className="min-w-0 flex-1 bg-[#fbf8f2]">
                <TopBar />
                {children}
            </div>
        </div>
    )
};

export default Dashboardlayout;
