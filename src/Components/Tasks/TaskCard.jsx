function TaskCard({task , onMoveTask}){
    let nextStatus = "";
    if (task.status === "to-do") {
    nextStatus = "in-progress";
    } else if (task.status === "in-progress") {
    nextStatus = "review";
    } else if (task.status === "review") {
    nextStatus = "done";
    }

    return(
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <h2 className="text-sm font-bold text-[#15263f]">{task.title}</h2>
                <span className="rounded-full bg-red-50 px-2 py-1 text-xs font-bold text-red-600">
                    {task.priority}
                </span>
            </div>
            
            <p className="mt-4 text-xs text-slate-500">
                Due: {task.dueDate}
            </p>
            {nextStatus && (
            <button
                type="button"
                onClick={() => onMoveTask(task.id, nextStatus)}
                className="mt-4 w-full rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-bold text-[#f15a38] transition hover:bg-orange-100"
            >
                Move next
            </button>
            )}


        </article>
    );

};

export default TaskCard;