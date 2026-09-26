import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-status">
          <span className="pulse" />
          System online
        </span>

        <h1>
          Hi, I'm <span>{profile.displayName}</span>
        </h1>
        <p className="hero-role">role: {profile.role.toLowerCase()}</p>
        <p className="tagline">{profile.tagline}</p>

        <div className="hero-buttons">
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <i className="fa-solid fa-file-pdf" /> View resume
          </a>
          <a href="#projects" className="btn btn-secondary">
            Explore projects
          </a>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="ring outer" />
        <div className="ring inner" />
        <div className="core">
          <img src={profile.profileImage} alt={`${profile.fullName} — ${profile.role}`} />
        </div>
      </div>
    </section>
  )
}
