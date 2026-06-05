import "./ProjectPage.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../componates/Header/Header.jsx";
import Projects from "../../utils/Projects.js";

function ProjectPage() {
  const { id } = useParams();
  const [storedProjects, setStoredProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("projects")) ?? Projects;
  });
  const [isEditing, setIsEditing] = useState(false);
  const project = storedProjects.find((project) => project.id === Number(id));
  const [editProject, setEditProject] = useState(project ?? {});

  function getStatusClassName(status) {
    const normalizedStatus = status.toLowerCase().replace(/\s+/g, "-");

    if (normalizedStatus === "completed" || normalizedStatus === "done") {
      return "projectPage__status projectPage__status--done";
    }

    if (normalizedStatus === "in-progress" || normalizedStatus === "inprogress") {
      return "projectPage__status projectPage__status--inProgress";
    }

    return "projectPage__status projectPage__status--notStarted";
  }

  function openEditProjectForm() {
    setEditProject(project);
    setIsEditing(true);
  }

  function closeEditProjectForm() {
    setIsEditing(false);
  }

  function handleEditProjectChange(event) {
    const { name, value } = event.target;

    setEditProject((currentProject) => ({
      ...currentProject,
      [name]: value,
    }));
  }

  function handleEditProjectSubmit(event) {
    event.preventDefault();

    const updatedProjects = storedProjects.map((currentProject) => {
      if (currentProject.id !== project.id) {
        return currentProject;
      }

      return {
        ...currentProject,
        ...editProject,
      };
    });

    setStoredProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setIsEditing(false);
  }

  if (!project) {
    return (
      <>
        <Header />
        <div className="projectPage">
          <h1>Project Not Found</h1>
          <p>This project does not exist or may have been moved.</p>
          <Link className="projectPage__backLink" to="/projects">Back to Projects</Link>
        </div>
      </>
    );
  }

  return (
    <>
    <Header />
    <div className="projectPage">
      <Link className="projectPage__backLink" to="/projects">Go Back</Link>
      <button className="projectPage__editBtn" type="button" onClick={openEditProjectForm}>Edit Project</button>
      {isEditing && (
        <form className="projectPage__editForm" onSubmit={handleEditProjectSubmit}>
          <label>
            Project Name:
            <input type="text" name="name" value={editProject.name ?? ""} onChange={handleEditProjectChange} required />
          </label>
          <label>
            Type of Project:
            <select name="TypeOfProject" value={editProject.TypeOfProject ?? ""} onChange={handleEditProjectChange} required>
              <option value="">Select a type</option>
              <option value="Teardown">Teardown</option>
              <option value="Repair">Repair</option>
              <option value="Exsplore">Exsplore</option>
            </select>
          </label>
          <label>
            Status:
            <select name="Status" value={editProject.Status ?? ""} onChange={handleEditProjectChange} required>
              <option value="">Select a status</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Completed">Completed</option>
              <option value="not Started">Not Started</option>
            </select>
          </label>
          <label>
            Tools Used:
            <input type="text" name="ToolsUsed" value={editProject.ToolsUsed ?? ""} onChange={handleEditProjectChange} required />
          </label>
          <label>
            Time Took:
            <input type="text" name="TimeTook" value={editProject.TimeTook ?? ""} onChange={handleEditProjectChange} required />
          </label>
          <label>
            Reason for Disposal:
            <textarea name="reasonForDesposal" value={editProject.reasonForDesposal ?? ""} onChange={handleEditProjectChange} required></textarea>
          </label>
          <label>
            Breakdown Steps:
            <textarea name="BreakdownSteps" value={editProject.BreakdownSteps ?? ""} onChange={handleEditProjectChange} required></textarea>
          </label>
          <label>
            Description:
            <textarea name="discription" value={editProject.discription ?? ""} onChange={handleEditProjectChange} required></textarea>
          </label>
          <div className="projectPage__editActions">
            <button type="submit">Save Project</button>
            <button type="button" onClick={closeEditProjectForm}>Cancel</button>
          </div>
        </form>
      )}
      <div className="projectPage__image-container">
        <img src={project.images[0]} alt={project.name} className="projectPage__image" />
      </div>
      <div className="projectHeader">
      <h1>{project.name}</h1>
      <p className="projectPage__type">Type: {project.TypeOfProject}</p>
      <p className={getStatusClassName(project.Status)}>{project.Status}</p>
      </div>
      <div className="ProjectPage__Description">
      <p className="projectPage__description">{project.discription}</p>
      </div>
      <div className="projectPage__reason">
      <p className="projectPage__reason-text">Reason for disposal: {project.reasonForDesposal}</p>
      </div>
      <div className="projectPage__Tools">
        <h2>Tools:</h2>
        <p className="projectPage__tools-text">{project.ToolsUsed}</p>
      </div>
      <div className="projectPage__Breakdown">
        <h2>Breakdown:</h2>
        <p className="projectPage__breakdown-text">{project.BreakdownSteps}</p>
      </div>
      <div className="projectPage__TimeTaken">
        <h2>Time Taken:</h2>
        <p className="projectPage__time-taken-text">{project.TimeTook}</p>
      </div>
    </div>
    </>
  );
}

export default ProjectPage;
