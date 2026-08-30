import Dashboardlayout from "../Components/Layout/DashboardLayout";
import { useTaskFlow } from "../Context/taskFlow";

function CalendarPage(){
    const {projects , tasks} = useTaskFlow();
    return(
        <Dashboardlayout>
            <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
                <h2 className="mt-8 text-center text-3xl font-bold text-[#15263f] sm:text-4xl">
                    Calendar
                </h2>
                <p className="mt-2 text-center text-slate-500">Upcoming project and task deadlines</p>
                <section className="mt-10">
                    <h3 className="text-xl font-bold text-[#15263f]">
                        Project deadlines
                    </h3>

                    <div className="mt-5 space-y-3">
                        {projects.length === 0 ? (
                            <p className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
                                No project deadlines yet.
                            </p>
                            ) : (
                                    projects.map((project) => (
                                        <article
                                        key={project.id}
                                        className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                                        >
                                        <div>
                                            <h4 className="text-lg font-bold text-[#15263f]">
                                            {project.name}
                                            </h4>
                                            <p className="mt-1 text-sm text-slate-500">
                                            {project.code}
                                            </p>
                                        </div>

                                        <time className="text-sm font-semibold text-[#f15a38]">
                                            Due: {project.dueDate}
                                        </time>
                                        </article>
                                    ))  
                                )
                        }

                    </div>
                </section>
                <section className="mt-10">
                    <h3 className="text-xl font-bold text-[#15263f]">
                        Task deadlines
                    </h3>

                    <div className="mt-5 space-y-3">
                        {tasks.length === 0 ? (
                            <p className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
                                No task deadlines yet.
                            </p>
                            ) : (
                                    tasks.map((task) => (
                                        <article
                                            key={task.id}
                                            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 
                                            shadow-sm sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            <div>
                                            <h4 className="text-lg font-bold text-[#15263f]">
                                                {task.title}
                                            </h4>
                                            <p className="mt-1 text-sm capitalize text-slate-500">
                                                Priority: {task.priority}
                                            </p>
                                            </div>

                                            <time className="text-sm font-semibold text-[#f15a38]">
                                                Due: {task.dueDate}
                                            </time>
                                        </article>
                                    )) 
                                )
                        }
                    </div>
                </section>


                    
            </div>
        </Dashboardlayout>
    );

};

export default CalendarPage;

