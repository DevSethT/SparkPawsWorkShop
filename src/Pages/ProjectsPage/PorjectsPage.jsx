import "./ProjectsPage.css";
import { useState, useEffect } from "react";
import Header from "../../componates/Header/Header.jsx";
import ProjectCard from "../../componates/ProjectCard/ProjectCard.jsx";
import Projects from "../../utils/Projects.js";
import AddProjectModal from "../../componates/AddProjectModal/AddProjectModal.jsx";

function ProjectsPage() {
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [projects, setProjects] = useState(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    return Array.isArray(storedProjects) && storedProjects.length > 0 ? storedProjects : Projects;
  });


  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);


  function openAddProjectModal() {
    setIsAddProjectModalOpen(true);
  }

  function closeAddProjectModal() {
    setIsAddProjectModalOpen(false);
  }
  
  function addProject(newProject) {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
    closeAddProjectModal();
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
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
        {isAddProjectModalOpen && <AddProjectModal onClose={closeAddProjectModal} onAddProject={addProject} />}
    </div>
  );
}

export default ProjectsPage;
