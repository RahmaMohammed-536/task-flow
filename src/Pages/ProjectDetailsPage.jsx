import { useParams } from "react-router-dom";
import Dashboardlayout from "../Components/Layout/DashboardLayout";
import { useTaskFlow } from "../Context/taskFlow";
import { Link } from "react-router-dom";
import KanbanColumn from "../Components/Tasks/KanbanColumn";
import CreateTaskForm from "../Components/Tasks/CreateTaskForm";
import { useState } from "react";

function ProjectDetailsPage() {
    const {projectId} = useParams();
    const {projects , tasks , updateTaskStatus} = useTaskFlow();
    const [showTaskForm, setShowTaskForm] = useState(false);

    const project = projects.find((item)=> String(item.id) === projectId);
    if (!project) {
        return (
            <Dashboardlayout>
            <p>Project not found</p>
            </Dashboardlayout>
        );
    }

    const projectTasks = tasks.filter((task) => String(task.projectId) === String(project.id));
    const todoTasks = projectTasks.filter((task) => task.status ==="to-do");
    const inProgressTasks = projectTasks.filter((task) => task.status ==="in-progress");
    const reviewTasks = projectTasks.filter((task) => task.status ==="review");
    const doneTasks = projectTasks.filter((task) => task.status ==="done");


  return (
    <Dashboardlayout>
        <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
            <Link to = {"/projects"} className="text-sm font-bold text-[#f15a38]">
                Back to projects
            </Link>
            <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex justify-between items-center">
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#f15a38]">
                    {project.code}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        {project.status}
                    </span>
                </div>

                <h1 className="mt-6 text-3xl font-bold text-[#15263f]">
                    {project.name}
                </h1>

                <p className="mt-3 max-w-2xl text-slate-500">
                    {project.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5 text-sm text-slate-600">
                    Due date: {project.dueDate}
                </div>

            </article>

            <section className="mt-10">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#f15a38]">
                            Workflow
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-[#15263f]">
                            Project tasks
                        </h2>
                    </div>
                    <button className="rounded-lg bg-[#f15a38] px-4 py-2 font-bold text-white"
                    onClick={() => setShowTaskForm(true)}>
                        New task
                    </button>
                </div>
                {showTaskForm && <CreateTaskForm projectId= {project.id} onClose={()=>setShowTaskForm(false)} />}
                <div className="mt-6 grid gap-5 lg:grid-cols-4">
                    <KanbanColumn title="To do" tasks={todoTasks}  onMoveTask={updateTaskStatus}/>
                    <KanbanColumn title="In progress" tasks={inProgressTasks} onMoveTask={updateTaskStatus}/>
                    <KanbanColumn title="Review" tasks={reviewTasks} onMoveTask={updateTaskStatus}/>
                    <KanbanColumn title="Done" tasks={doneTasks} onMoveTask={updateTaskStatus}/>

                </div>
            </section>
            
        </div>
    </Dashboardlayout>
  );
};

export default ProjectDetailsPage;



