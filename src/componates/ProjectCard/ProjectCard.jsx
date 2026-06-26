import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link className="projectCard" to={`/projects/${project.id}`}>
      <h2 className="projectCard__title">{project.name}</h2>
      <div className="projectCard__image-container">
        {/* <img src={project.images[0] || ""} alt={`${project.name} image`} className="projectCard__image" /> */}
      </div>
      <div className="projectCard__details">
      <p className="projectCard__type">Type: {project.TypeOfProject}</p>
      <p className="projectCard__status">Status: {project.Status}</p>
      </div>
      <p className="projectCard__reason">Reason for Disposal: {project.reasonForDesposal}</p>
      <p className="projectCard__description">Description: {project.discription}</p>
    </Link>
  );
}

export default ProjectCard;
