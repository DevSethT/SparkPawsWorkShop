import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <img src={project.images[0]} alt={`${project.name} image`} className="project-image" />
      <p>Type: {project.TypeOfProject}</p>
      <p>Status: {project.Status}</p>
      <p>Reason for Disposal: {project.reasonForDesposal}</p>
      <p>Description: {project.discription}</p>
    </div>
  );
}

export default ProjectCard;