import "./ProjectPage.css";
import Header from "../../componates/Header/Header.jsx";

function ProjectPage({ project }) {
  return (
    <>
    <Header />
    <div className="project-page">
        <img src={project.image} alt={project.name} className="project-page__image" />
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
    </>
  );
}

export default ProjectPage;