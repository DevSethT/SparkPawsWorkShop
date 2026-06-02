import "./ProjectsPage.css";
import Header from "../../componates/Header/Header.jsx";
import ProjectCard from "../../componates/ProjectCard/ProjectCard.jsx";
import Projects from "../../utils/Projects.js";
import AddProjectModal from "../../componates/AddProjectModal/AddProjectModal.jsx";

function ProjectsPage() {
  return (
    <div className="projects-page">
        <div className="projectsPage__top">
            <Header />    
        <h1>Projects Page</h1>
        <button className="projectsPage__addProjectBtn">Add Project</button>
        </div>
        <div className="projectsPage__projectsList">
            {/* map projects from data saved */}
            {Projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
        <AddProjectModal />
    </div>
  );
}

export default ProjectsPage;