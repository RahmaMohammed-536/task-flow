import Dashboardlayout from "../Components/Layout/DashboardLayout";
import { useTaskFlow } from "../Context/taskFlow";

function TeamPage(){
    const {members} = useTaskFlow();
    return(
        <Dashboardlayout>
            <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="mt-8 text-center text-3xl font-bold text-[#15263f] sm:text-4xl">
                    Team
                </h2>
                <p className="mt-2 text-center text-slate-500">Your project team</p>
                <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member) => (
                        <article key={member.id}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm 
                            transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <h3 className="text-xl font-bold text-[#15263f]">{member.name}</h3>
                            <p className="mt-2 text-sm capitalize text-slate-500">{member.role}</p>
                        </article>
                    ))}

                </section>
            </div>
        </Dashboardlayout>
    );
};

export default TeamPage;