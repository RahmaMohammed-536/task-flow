import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboardpage from './Pages/Dashboardpage';
import ProjectsPage from './Pages/ProjectsPage';
import ProjectDetailsPage from './Pages/ProjectDetailsPage';
import TeamPage from './Pages/TeamPage';
import ReportsPage from './Pages/ReportsPage';
import CalendarPage from './Pages/CalendarPage';

function App() {
  return (
    
    
      <Router>
        <Routes>
          <Route path='/' element={<Dashboardpage></Dashboardpage>}></Route>
          <Route path='/projects' element={<ProjectsPage></ProjectsPage>}></Route>
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path='/teams' element={<TeamPage/>}></Route>
          <Route path='/reports' element={<ReportsPage/>}></Route>
          <Route path='/calendar' element={<CalendarPage/>}></Route>
        </Routes>
      </Router>
      
    


    
    
    
  );
};

export default App;
