import "./ProjectPage.css";
import Header from "../../componates/Header/Header.jsx";

function ProjectPage({ project }) {
  return (
    <>
    <Header />
    <div className="projectPage">
      <div className="projectPage__image-container">
        <img src={project.image} alt={project.name} className="projectPage__image" />
      </div>
      <h1>{project.name}</h1>
      <div className="ProjectPage__Description">
      <p className="projectPage__description">{project.description}</p>
      </div>
      <p>Type: {project.type}</p>
      <p> Reason for disposal: {project.reasonForDisposal}</p>
      <div className="projectPage__Tools">
        <h2>Tools:</h2>
        <p className="projectPage__tools-text">{project.ToolsUsed}</p>
      </div>
      <div className="projectPage__Breakdown">
        <h2>Breakdown:</h2>
        <p className="projectPage__breakdown-text">{project.breakdown}</p>
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