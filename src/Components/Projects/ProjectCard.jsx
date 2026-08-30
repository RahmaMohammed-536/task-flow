import { Link } from "react-router-dom";
function ProjectCard({project}){
    return(
        <Link to={"/projects/" + project.id} className="block">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ">
                <h2>{project.code}</h2>
                <h3 className="mt-2 text-xl font-bold text-[#15263f]">{project.name}</h3>
                <p className="mt-3 text-sm text-slate-500">{project.description}</p>
                <div className="mt-5 flex justify-between border-t pt-3 text-sm">
                    <span>{project.status}</span>
                    <span>{project.dueDate}</span>
                </div>
            </article>
        </Link>
    );
    
};

export default ProjectCard;