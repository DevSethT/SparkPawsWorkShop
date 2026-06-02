import "./ProjectPage.css";
import { Link, useParams } from "react-router-dom";
import Header from "../../componates/Header/Header.jsx";
import Projects from "../../utils/Projects.js";

function ProjectPage() {
  const { id } = useParams();
  const project = Projects.find((project) => project.id === Number(id));

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
