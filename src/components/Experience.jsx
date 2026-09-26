import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <span className="section-index">02 · Experience</span>
        <h2 className="section-title">Work experience</h2>
      </div>

      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-node panel" key={`${job.company}-${job.client}`}>
            <div className="timeline-head">
              <h3>{job.title}</h3>
            </div>
            <p className="timeline-meta">
              {job.company} · {job.track} · client: <span className="client">{job.client}</span> · {job.period} ·{' '}
              {job.location}
            </p>

            <ul className="timeline-points">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
