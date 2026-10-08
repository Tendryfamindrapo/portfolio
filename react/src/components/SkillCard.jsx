function SkillCard({ name, level, progress }) {
  return (
    <article className="skill-card">
      <div className="skill-heading">
        <h3>{name}</h3>
        <span>{level}</span>
      </div>

      <div
        className="skill-progress"
        role="progressbar"
        aria-label={`Niveau ${name}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <span
          className="skill-progress-bar"
          style={{ "--skill-progress": `${progress}%` }}
        />
      </div>
    </article>
  );
}

export default SkillCard;
