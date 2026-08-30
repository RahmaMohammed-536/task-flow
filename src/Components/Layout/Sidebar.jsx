import { Link } from "react-router-dom";
function SideBar(){
    
    return(
        <aside className="sticky top-0 z-30 h-screen w-64 shrink-0 self-start bg-[#15263f] p-5 text-white" >
        <h2 className="text-xl font-bold">TaskFlow</h2>
        <p className="mt-1 text-xs text-slate-400">OPRATION ATLAS</p>
        <nav className="mt-10">
            <ul className="space-y-3">
                <li>
                    <Link to={"/"} 
                        className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/10 hover:text-white">
                        Overview
                    </Link>
                </li>
                <li>
                    <Link to={"/projects"} 
                        className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/10 hover:text-white">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to={"/calendar"} 
                        className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/10 hover:text-white">
                        Calendar
                    </Link>
                </li>
                <li>
                    <Link to={"/teams"}
                        className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/10 hover:text-white">
                        Teams
                    </Link>
                </li>
                <li>
                    <Link to={"/reports"}
                        className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/10 hover:text-white">
                        Reports
                    </Link>
                </li>
            </ul>
        </nav>
       </aside>
    )
};

export default SideBar;