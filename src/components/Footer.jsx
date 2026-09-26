import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} {profile.fullName} · built with React
    </footer>
  )
}
