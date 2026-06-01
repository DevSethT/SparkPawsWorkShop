import "./ProjectsPage.css";
import Header from "../../componates/Header/Header.jsx";

function ProjectsPage() {
  return (
    <div className="projects-page">
        <div className="projectsPage__top">
            <Header />    
        <h1>Projects Page</h1>
        <button className="projectsPage__addProject">Add Project</button>
        </div>
        <div className="projectsPage__projectsList">
            {/* map projects from data saved */}
        </div>
    </div>
  );
}

export default ProjectsPage;