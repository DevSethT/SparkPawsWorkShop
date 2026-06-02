import "./ProjectsPage.css";
import { useState } from "react";
import Header from "../../componates/Header/Header.jsx";
import ProjectCard from "../../componates/ProjectCard/ProjectCard.jsx";
import Projects from "../../utils/Projects.js";
import AddProjectModal from "../../componates/AddProjectModal/AddProjectModal.jsx";

function ProjectsPage() {
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);

  function openAddProjectModal() {
    setIsAddProjectModalOpen(true);
  }

  function closeAddProjectModal() {
    setIsAddProjectModalOpen(false);
  }

  return (
    <div className="projects-page">
        <div className="projectsPage__top">
            <Header />    
        <h1>Projects Page</h1>
        <button className="projectsPage__addProjectBtn" onClick={openAddProjectModal}>Add Project</button>
        </div>
        <div className="projectsPage__projectsList">
            {/* map projects from data saved */}
            {Projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
        {isAddProjectModalOpen && <AddProjectModal onClose={closeAddProjectModal} />}
    </div>
  );
}

export default ProjectsPage;
