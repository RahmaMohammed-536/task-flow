import TaskCard from "./TaskCard";

function KanbanColumn({title , tasks , onMoveTask}){
    return(
        <section className="bg-slate-100 rounded-2xl p-4">
            <div className="flex justify-between">
                <h2 className="font-bold text-[#15263f]">{title}</h2>
                <span className="rounded-full bg-white px-2 py-1 text-xs font-bold">
                    {tasks.length}
                </span>
            </div>
            <div className="mt-4 space-y-3">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} onMoveTask={onMoveTask}></TaskCard>
                    
                ))}
            </div>
            
        </section>
    );
};

export default KanbanColumn;
