
import { useEffect, useState } from "react";

const roles = [
  "Développeur Full Stack",
  "Développeur Front-End",
  "Développeur Back-End",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const currentRole = roles[roleIndex];

    if (reduceMotion.matches) return;

    let timeoutId;

    if (!isDeleting && displayedRole.length < currentRole.length) {
      timeoutId = window.setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }, 85);
    } else if (!isDeleting) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1400);
    } else if (displayedRole.length > 0) {
      timeoutId = window.setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
      }, 38);
    } else {
      setIsDeleting(false);
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayedRole, isDeleting, roleIndex]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedRole(roles[roleIndex]);
    }
  }, [roleIndex]);

  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-text">

          <p className="hero-intro">
            Bonjour, je suis
          </p>

          <h1>
            Tendry Famindrapo
          </h1>

          <h2 className="hero-role" aria-label={roles[roleIndex]}>
            <span aria-hidden="true">{displayedRole}</span>
          </h2>

          <p className="hero-description">
            Je suis étudiant en informatique et passionné
            par le développement web. Je crée des applications
            web modernes et fonctionnelles avec React et les
            technologies web.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary"
            >
              Voir mes projets
            </a>

            <a
              href="/cv/mon-cv.pdf"
              className="btn secondary"
            >
              Télécharger mon CV
            </a>

          </div>

        </div>


        <div className="hero-image">

          <img
            src="/images/profile.jpg"
            alt="Photo de Tendry Famindrapo"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;

