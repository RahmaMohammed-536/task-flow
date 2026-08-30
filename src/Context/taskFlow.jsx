import { createContext,useContext,useState ,useEffect} from "react";
import {initialProjects,initialTasks , members} from "../Data/mocData";

const TaskFlowContext = createContext();


export function TaskFlowProvider({children}){
    const [projects,setProjects] = useState(()=>{
        const savedProjects = localStorage.getItem("taskflow-projects");
        if(savedProjects){
            return JSON.parse(savedProjects);
        }
        return initialProjects;
    }    
    );
    const [tasks , setTasks] = useState(()=>{
        const savedTasks = localStorage.getItem("taskflow-tasks");
        if(savedTasks){
            return JSON.parse(savedTasks);
        }
        return initialTasks;
    }
    );

    function createProject(projectData){
        const newProject ={
            ...projectData,
            id : crypto.randomUUID(),
            status: "active",
            members: ["m1","m2"],   
        };
        setProjects((currentProjects)=>[
            ...currentProjects,
            newProject,
        ]);
    };

    function createTask(taskData){
        const newTask={
            ...taskData,
            status: "to-do",
            id: crypto.randomUUID(),
            tags: [],
            comments: 0,

        };
        setTasks((currentTasks)=>[
            ...currentTasks,
            newTask,
        ]);
    };

    function updateTaskStatus(taskId,newStatus){
        setTasks((currentTasks)=>
            currentTasks.map((task)=>
                task.id === taskId ? {...task,status: newStatus} : task
            )
        );
    };

   useEffect(() => {
    localStorage.setItem("taskflow-projects", JSON.stringify(projects));
    }, [projects]);

    useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
    }, [tasks]);



    return(
        <TaskFlowContext.Provider value = {{projects,tasks,createProject, createTask,updateTaskStatus,members}}>
        {children}
        </TaskFlowContext.Provider>
    );
};

export function useTaskFlow (){
    return useContext(TaskFlowContext);
};
    



    
