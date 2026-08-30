import Dashboardlayout from "../Components/Layout/DashboardLayout";
import { useTaskFlow } from "../Context/taskFlow";
import StatCard from "../Components/Common/Statcard";


function Dashboardpage(){
    
    const {projects , tasks} = useTaskFlow();
    const completedTasks = tasks.filter((task)=>task.status === "done").length;
    const inProgressTasks = tasks.filter((task)=> task.status ==="in-progress").length;
    const reviewTasks = tasks.filter((task)=> task.status ==="review").length;
    const latestTasks = tasks.slice(-4).reverse();

    return(
        <Dashboardlayout>
            <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <StatCard title="Total projects" value={projects.length} text="Projects in your workspace"></StatCard>
                <StatCard title="Total tasks" value={tasks.length} text="Tasks across all projects"></StatCard>
                <StatCard title="Completed tasks" value={completedTasks} text="Tasks ready to close"></StatCard>
                <StatCard title="In Progress tasks" value={inProgressTasks} text="Tasks in progress"></StatCard>
                <StatCard title="Review tasks" value={reviewTasks} text="Tasks on review"></StatCard> 
            </section>

            <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#15263f]">Latest Tasks</h2>
                <p className="mt-1 text-sm text-slate-500">Your four most recently added tasks.</p>
                <div className="mt-5 space-y-3 ">
                    {latestTasks.map((task)=>
                        (
                            <article key={task.id} className="flex flex-col gap-3 rounded-xl border border-slate-200
                                bg-slate-50 p-4 sm:flex-row 
                                sm:items-center sm:justify-between"
                            >
                                <div>
                                    <h3 className="font-bold text-[#15263f]">{task.title}</h3>
                                    <p className="mt-1 text-sm text-slate-500">Due : {task.dueDate}</p>
                                </div>
                                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#f15a38]">
                                    {task.status}
                                </span>
                            </article>
                        )
                    )}
                </div>
            </section>
        </Dashboardlayout>
    )
    
};

export default Dashboardpage;

