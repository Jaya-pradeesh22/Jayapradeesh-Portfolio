import { aboutParagraphs, stats } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <span className="section-index">01 · About</span>
        <h2 className="section-title">About me</h2>
      </div>

      <div className="about-grid">
        <div className="panel about-bio">
          {aboutParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="stat-list">
          {stats.map((stat) => (
            <div className="panel stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
