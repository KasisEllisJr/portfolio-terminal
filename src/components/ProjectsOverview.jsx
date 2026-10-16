import { projectsData } from "../data/projectsData";

export default function ProjectsOverview() {
  return (
    <div className="projects-overview">
      <p className="projects-intro">
        A collection of projects exploring data analytics,
        software development, and IT infrastructure.
      </p>

      <div className="projects-directory">
        {projectsData.map((project) => (
          <div
            className="project-entry"
            key={project.id}
          >
            <div className="project-entry-header">
              <span className="project-title">
                [{project.number}] {project.title}
              </span>

              <span className="project-status">
                [{project.status}]
              </span>
            </div>

            <p className="project-description">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <p className="projects-footer">
        SELECT A PROJECT FROM THE DIRECTORY TO VIEW DETAILS.
      </p>
    </div>
  );
}