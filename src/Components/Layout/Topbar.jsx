import { Link } from "react-router-dom";
function TopBar(){
    return(
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200
            bg-white/95 p-4 text-slate-700 backdrop-blur"
        >
            <div className="flex items-center gap-3">
                <button className="rounded-lg border px-4 py-2 text-black">
                Notifications
                </button>

                <Link
                    to="/projects"
                    className="rounded-lg bg-[#f15a38] px-4 py-2 font-bold text-white transition hover:bg-[#d84e30]"
                >
                    New Project
                </Link>

            </div>
        </header>
    )


};

export default TopBar;