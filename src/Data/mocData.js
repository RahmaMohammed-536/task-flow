export const members = [
    {
        id: "m1",
        name: "Ahmed",
        role: "product designer",

    } ,
    {
        id: "m2",
        name: "Omar",
        role: "frontend developer",
    }

];

export const initialProjects = [
  {
    id: "p1",
    name: "Atlas Mobile App",
    code: "ATL-01",
    description: "Mobile app project for field teams.",
    status: "active",
    dueDate: "2026-09-14",
    members: ["m1", "m2"],
  },
];


export const initialTasks = [
  {
    id: "t1",
    projectId: "p1",
    title: "Build sidebar",
    status: "to-do",
    priority: "high",
    assigneeId: "m2",
    dueDate: "2026-08-24",
  },
];
