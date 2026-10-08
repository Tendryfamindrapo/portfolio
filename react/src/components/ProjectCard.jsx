function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo
}) {
  return (
    <article className="project-card">

      <div className="project-image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <div className="project-content">

        <h3>{title}</h3>

        <p className="project-description">
          {description}
        </p>

        <div className="technologies">

          {technologies.map((technology, index) => (
            <span key={index}>
              {technology}
            </span>
          ))}

        </div>

        <div className="project-links">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>

        </div>

      </div>

    </article>
  )
}

export default ProjectCard