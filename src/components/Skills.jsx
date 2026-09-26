import { skills } from '../data'

const TICK_COUNT = 20

function Gauge({ level }) {
  const filledTicks = Math.round((level / 100) * TICK_COUNT)

  return (
    <div className="gauge" aria-hidden="true">
      {Array.from({ length: TICK_COUNT }).map((_, i) => (
        <span key={i} className={`tick ${i < filledTicks ? 'filled' : ''}`} />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <span className="section-index">03 · Skills</span>
        <h2 className="section-title">Technical skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="panel" key={skill.name}>
            <div className="skill-head">
              <h3>{skill.name}</h3>
              <span className="skill-value">{skill.level}%</span>
            </div>
            <Gauge level={skill.level} />
          </div>
        ))}
      </div>
    </section>
  )
}
