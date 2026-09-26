import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <span className="section-index">04 · Projects</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <article className="panel project-card" key={project.id}>
            <span className="project-tag">file {String(i + 1).padStart(2, '0')}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" /> Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square" /> Live
                </a>
              )}
              {!project.github && !project.demo && <span className="pending">link coming soon</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
