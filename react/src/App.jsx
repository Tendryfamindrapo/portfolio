/*import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Button from "./components/Button";
import Skills from "./sections/Skills";
import Projects from "./Sections/Project";
import Contact from "./sections/Contact";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main>
        <SectionTitle
          title="Mon portfolio"
          subtitle="Bienvenue sur mon portfolio"
        />

        <Button>
          Voir mes projets
        </Button>

        <section>
          <SectionTitle
            title="Mes compÃ©tences"
            subtitle="Technologies que j'utilise"
          />

          <SkillCard
            name="React"
              progress={65}
            level="IntermÃ©diaire"
          />

          <SkillCard
            name="JavaScript"
              progress={65}
            level="IntermÃ©diaire"
          />

          <SkillCard
            name="PHP"
              progress={35}
            level="DÃ©butant"
          />
        </section>

        <section>
          <SectionTitle
            title="Mes projets"
            subtitle="Quelques projets rÃ©alisÃ©s"
          />

          <ProjectCard
            title="MÃ©tÃ©o Madagascar"
            description="Application mÃ©tÃ©o dÃ©veloppÃ©e avec React."
            image="/images/meteo.png"
            technologies={[
              "React",
              "JavaScript",
              "API"
            ]}
            github="https://github.com/"
            demo="https://example.com/"
          />
        </section>

        <section>
          <SectionTitle
            title="Me contacter"
            subtitle="Retrouvez-moi sur mes rÃ©seaux"
          />

          <SocialLinks />
        </section>
      </main>

      <Footer />
    </>
  );
}*/
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";

import Button from "./components/Button";
import SectionTitle from "./components/SectionTitle";

import Skills from "./sections/Skills";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";

import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>

        {/* =========================
            INTRODUCTION
        ========================= */}

        <section className="intro">

          <div className="intro-copy">
            <SectionTitle
              title="Mon portfolio"
              subtitle="Bienvenue sur mon portfolio"
            />
          </div>

          <Button>
            Voir mes projets
          </Button>

        </section>


        {/* =========================
            COMPÃ‰TENCES
        ========================= */}

        <section
          className="skills"
          id="skills"
        >

          <SectionTitle
            title="Mes compétences"
            subtitle="Technologies que j'utilise"
          />

          <div className="skills-container">
            <SkillCard
              name="HTML"
              progress={90}
              level="Avancé"
            />  

            <SkillCard
              name="CSS"
              progress={90}
              level="Avancé"
            />

            <SkillCard
              name="React"
              progress={65}
              level="Intermédiaire"
            />

            <SkillCard
              name="JavaScript"
              progress={65}
              level="Intermédiaire"
            />

            <SkillCard
              name="Python"
              progress={35}
              level="Débutant"
            />
            <title>
              les base de donne
            </title>
               <SkillCard
              name="PostgreSQL"
              progress={65}
              level="Intermédiaire"
            />
            <SkillCard
              name="MySQL"
              progress={65}
              level="Intermédiaire"
            />
          </div>
        </section>


        {/* =========================
            PROJETS
        ========================= */}

        <Projects />


        {/* =========================
            CONTACT
        ========================= */}

        <section
          className="contact"
          id="contact"
        >

          <SectionTitle
            title="Me contacter"
            subtitle="Retrouvez-moi sur mes rÃ©seaux"
          />

          <SocialLinks />

        </section>

      </main>

      <Footer />

    </>
  );
}


export default App;

