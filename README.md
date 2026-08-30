# TaskFlow

TaskFlow is a responsive project and team management platform built with React. It helps users organize projects, manage tasks, track progress, and review deadlines through a clean dashboard interface.

## Features

- Responsive dashboard with project and task statistics.

- Create and manage projects with project codes, descriptions, and due dates.

- Search projects by name or project code.

- Project details page with a Kanban workflow board.

- Create tasks and assign priorities and due dates.

- Move tasks through different workflow stages.

- Persistent data storage using browser localStorage.

- Team members overview with reusable member cards.

- Reports page with task distribution and completion rate.

- Calendar page for upcoming project and task deadlines.

- Responsive layout for desktop, tablet, and mobile screens.

## Technologies

- React.js

- JavaScript (JSX)

- React Router DOM

- Context API

- Tailwind CSS

- Bootstrap 5

- Browser localStorage

- Create React App

## Project Highlights

TaskFlow was built with a component-based architecture to keep the code reusable and easy to maintain. Shared application data is managed through the Context API, while React state and effects handle user interactions and browser persistence.

The project also demonstrates controlled forms, derived data using array methods such as `filter`, `map`, and `find`, reusable UI components, client-side routing, responsive layouts, and conditional rendering for empty states and missing projects.

## Application Flow

The application is organized around a simple project management workflow:

1. Users open the dashboard to review overall project and task metrics.

1. Users create projects from the Projects page.

1. Each project has a dedicated details page.

1. Tasks can be created inside a project and assigned a priority and due date.

1. Tasks move through the following workflow stages:

```
To do → In progress → Review → Done
```

1. Reports summarize the task distribution and completion rate.

1. Calendar displays upcoming project and task deadlines.

1. Team displays the members available in the workspace.

## Data Persistence

TaskFlow uses the browser's `localStorage` API to preserve data after refreshing the page. Projects and tasks are stored under the following keys:

```
taskflow-projects
taskflow-tasks
```

This approach keeps the project frontend-only while providing a realistic user experience without requiring a backend or database.

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your computer.

### Installation

Clone the repository and move into the project directory:

```bash
git clone <your-repository-url>
cd task-flow
```

Install the project dependencies:

```bash
npm install
```

### Run the Development Server

Start the application locally:

```bash
npm start
```

The application will open in the browser at:

```
http://localhost:3000
```

### Create a Production Build

To create an optimized production version of the application, run:

```bash
npm run build
```

The generated files will be placed in the `build` folder. This folder is ignored by Git because it is generated automatically from the source code.

## Project Structure

```
src/
├── Components/
│   ├── Common/
│   │   └── Statcard.jsx
│   ├── Layout/
│   │   ├── DashboardLayout.jsx
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   ├── Projects/
│   │   ├── CreateProjectForm.jsx
│   │   └── ProjectCard.jsx
│   └── Tasks/
│       ├── CreateTaskForm.jsx
│       ├── KanbanColumn.jsx
│       └── TaskCard.jsx
├── Context/
│   └── taskFlow.jsx
├── Data/
│   └── mocData.js
├── Pages/
│   ├── CalendarPage.jsx
│   ├── Dashboardpage.jsx
│   ├── ProjectDetailsPage.jsx
│   ├── ProjectsPage.jsx
│   ├── ReportsPage.jsx
│   └── TeamPage.jsx
├── App.js
├── index.js
└── index.css
```

## Main React Concepts Demonstrated

- Functional components and JSX.

- Props for passing data between components.

- `useState` for local component state.

- `useEffect` for synchronizing data with localStorage.

- Context API for shared projects and tasks state.

- React Router DOM for page navigation and dynamic project routes.

- Controlled inputs for project and task forms.

- Conditional rendering for empty results and not-found pages.

- Reusable components such as `Statcard`, `ProjectCard`, `TaskCard`, and `KanbanColumn`.

## Responsive Design

The interface follows a mobile-first approach. Layouts adapt across screen sizes using responsive Tailwind CSS utility classes, including stacked cards on small screens, multi-column layouts on larger screens, and responsive project and task forms.

## Current Scope and Limitations

TaskFlow is currently a frontend-only portfolio project. Data is stored locally in the browser, so it is not synchronized between devices or users. The application does not currently include authentication, a backend API, or a database.

## Future Improvements

- Add user authentication and protected routes.

- Connect the application to a backend API and database.

- Add drag-and-drop task movement for the Kanban board.

- Add task editing and deletion.

- Add project filtering by status and deadline.

- Add notifications for approaching deadlines.

- Add user-specific workspaces and permissions.

## Portfolio Note

TaskFlow was created to demonstrate practical frontend development skills through a complete React application with reusable components, shared state management, client-side routing, persistent browser storage, responsive UI design, and production build preparation.