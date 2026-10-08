import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h2>Mes projets</h2>

      <p>
        Quelques projets que j'ai réalisés
      </p>

      <div className="projects-container">

        <ProjectCard
          title="Météo Madagascar"
          description="Application météo développée avec React."
          image="/images/meteo.png"
          technologies={[
            "React",
            "JavaScript",
            "API"
          ]}
          github="https://github.com/"
          demo="https://example.com/"
        />
        <ProjectCard
          title="Horloges Mondiales"
          description="Application d'horloges mondiales développée avec React."
          image="/images/horloges.png"
          technologies={[
            "React",
            "JavaScript",
            "API"
          ]}
          github="https://github.com/"
          demo="https://example.com/"
        />

      </div>

    </section>
  )
}

export default Projects