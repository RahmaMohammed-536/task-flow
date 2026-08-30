import { useState } from "react";
import { useTaskFlow } from "../../Context/taskFlow";

function CreateProjectForm(){
    const {createProject} = useTaskFlow();
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if(!name.trim() || !code.trim() || !description.trim() || !dueDate.trim() )
        {
            alert("you have to complate all data");
            return;
        }
        createProject({
            name,
            code,
            description,
            dueDate,
        });
        setName("");
        setCode("");
        setDescription("");
        setDueDate("");
    }


    return (
        <form
            className="mx-auto mt-8 max-w-2xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            onSubmit={handleSubmit}
        >
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#f15a38]">
                    Workspace setup
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#15263f]">
                    Create a new project
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                    Add the essential details. You can add tasks after creating it.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Project name
                    </label>
                    <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[#f15a38]"
                    placeholder="e.g. Website redesign"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="code" className="text-sm font-semibold text-slate-700">
                    Project code
                    </label>
                    <input
                    id="code"
                    type="text"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[#f15a38]"
                    placeholder="e.g. WEB-01"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-semibold text-slate-700">
                    Project description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="min-h-24 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[#f15a38]"
                    placeholder="What will this project deliver?"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="dueDate" className="text-sm font-semibold text-slate-700">
                    Due date
                </label>
                <input
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[#f15a38]"
                />
            </div>

            <div className="flex justify-end border-t border-slate-100 pt-5">
                <button
                    type="submit"
                    className="rounded-lg bg-[#f15a38] px-5 py-3 font-bold text-white transition hover:bg-[#d84e30]"
                >
                    Create project
                </button>
            </div>
        </form>
    );


};

export default CreateProjectForm;