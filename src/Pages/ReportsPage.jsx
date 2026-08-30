import Dashboardlayout from "../Components/Layout/DashboardLayout";
import { useTaskFlow } from "../Context/taskFlow";
import StatCard from "../Components/Common/Statcard";

function ReportsPage(){
    const {projects, tasks} = useTaskFlow();
    const completedTasks = tasks.filter(
        (task) => task.status === "done"
    ).length;

    const completionRate = tasks.length === 0 ? 0 : Math.round((completedTasks/tasks.length)*100);

    const todoTasks = tasks.filter(
        (task) => task.status === "to-do"
    ).length;

    const inProgressTasks = tasks.filter(
        (task) => task.status === "in-progress"
    ).length;

    const reviewTasks = tasks.filter(
        (task) => task.status === "review"
    ).length;

    
    return(
        <Dashboardlayout>
             <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="mt-8 text-center text-3xl font-bold text-[#15263f] sm:text-4xl">
                    Reports
                </h2>
                <p className="mt-2 text-center text-slate-500">Project and task performance overview</p>

                <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    <StatCard title="To Do Tasks"
                        value={todoTasks}
                        text="Tasks waiting to start"
                    >
                    </StatCard>
                    <StatCard title="In progress tasks"
                        value={inProgressTasks}
                        text="Tasks currently being handled"
                    >
                    </StatCard>
                    <StatCard title="Review tasks"
                        value={reviewTasks}
                        text="Tasks waiting for review"
                    >
                    </StatCard>
                    <StatCard title="Completed tasks"
                        value={completedTasks}
                        text="Tasks ready to close"
                    >
                    </StatCard>
                </section>

                <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-bold text-[#15263f]">
                        Completion rate
                        </h3>
                        <p className="text-2xl font-bold text-[#f15a38]">
                        {completionRate}%
                        </p>
                    </div>

                    <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                        className="h-full rounded-full bg-[#f15a38] transition-all duration-500"
                        style={{ width: `${completionRate}%` }}
                        ></div>
                    </div>
                </section>


                <section className="mt-10">
                    <h3 className="text-xl font-bold text-[#15263f]">
                        Project summary
                    </h3>

                    <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project) => {
                        const projectTasks = tasks.filter(
                            (task) => String(task.projectId) === String(project.id)
                        );

                        return (
                            <article
                            key={project.id}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                            >
                            <h4 className="text-lg font-bold text-[#15263f]">
                                {project.name}
                            </h4>
                            <p className="mt-2 text-sm text-slate-500">
                                {projectTasks.length} tasks
                            </p>
                            </article>
                        );
                        })}
                    </div>
                </section>

            </div>
        </Dashboardlayout>
           
    )
};

export default ReportsPage;

