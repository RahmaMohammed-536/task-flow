import { useState } from "react";
import { useTaskFlow } from "../../Context/taskFlow";

function CreateTaskForm({projectId , onClose}){
    const {createTask} = useTaskFlow();
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("medium");
    const [dueDate, setDueDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!title.trim() || !dueDate) {
            alert("Enter task title and due date");
            return;
        }

        createTask({
            title,
            priority,
            dueDate,
            projectId,
        });

        setTitle("");
        setPriority("medium");
        setDueDate("");
        onClose();
    };

    return(
        <form onSubmit={handleSubmit}
        className="mx-auto mt-6 w-full max-w-xl space-y-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
        >
            <div className="space-y-2">
                <label htmlFor="taskName"
                    className="block text-base font-semibold text-slate-700">
                    Task name
                </label>

                <input
                    id="taskName"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Enter a new task"
                    className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none 
                    transition focus:border-[#f15a38] focus:ring-2 focus:ring-orange-100"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="priority" className="block text-base font-semibold text-slate-700" >
                    priority
                </label>
                <select id="priority" value={priority} 
                    onChange={(event)=>setPriority(event.target.value)}
                    className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none 
                    transition focus:border-[#f15a38] focus:ring-2 focus:ring-orange-100"
                >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                </select>
            </div>

            <div className="space-y-2">
            <label htmlFor="dueDate" className="block text-base font-semibold text-slate-700">
                Due Date
            </label>
            <input type="date" id="dueDate" placeholder="Enter due date" 
                value={dueDate} onChange={(event)=> setDueDate(event.target.value)}
                className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none 
                transition focus:border-[#f15a38] focus:ring-2 focus:ring-orange-100"
            />
            </div>
            <div className="space-x-2">
            <button type="submit"
                className="w-full rounded-xl bg-[#f15a38] px-5 py-3 text-base font-bold text-white 
                shadow-sm transition duration-200 hover:bg-[#d84e30] hover:shadow-md active:scale-[0.98] sm:w-auto">
                Create task
            </button>

            <button type="button"
                onClick={()=> onClose()}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold
                text-slate-700 transition hover:bg-slate-50" >
                Cancel
            </button>
            </div>


        </form>
        
    );

};

export default CreateTaskForm;