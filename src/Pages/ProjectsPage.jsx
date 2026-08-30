import Dashboardlayout from "../Components/Layout/DashboardLayout";
import { useTaskFlow } from "../Context/taskFlow";
import ProjectCard from "../Components/Projects/ProjectCard";
import CreateProjectForm from "../Components/Projects/CreateProjectForm";
import { useState } from "react";

function ProjectsPage(){
    const {projects} = useTaskFlow();
    const [searchText, setSearchText]=useState("");
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchText.toLowerCase()) ||
        project.code.toLowerCase().includes(searchText.toLowerCase())
    );

    return(
        <Dashboardlayout>
            <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="mt-8 text-center text-3xl font-bold text-[#15263f] sm:text-4xl">Projects</h2>
                <input
                    type="search"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Search by project name or code"
                    className="mx-auto mt-6 block w-full max-w-md rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#f15a38] focus:ring-4 focus:ring-orange-100"
                />

                <CreateProjectForm></CreateProjectForm>
                {filteredProjects.length === 0 ? (
                    <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                        <h3 className="text-lg font-bold text-[#15263f]">
                        No projects found
                        </h3>
                        <p className="mt-2 text-sm text-slate-500">
                        Try searching with a different project name or code.
                        </p>
                    </div>
                    ) : (
                    <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                        ))}
                    </section>
                )}
            </div>
        </Dashboardlayout>
    );
};

export default ProjectsPage;

