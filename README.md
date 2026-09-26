# Jayapradeesh — Portfolio (React)

A React + Vite rebuild of the portfolio, with a HUD/onboard-AI console theme
(dark base, single cyan signal color, monospace HUD readouts).

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Project structure

```
src/
  data.js            <- ALL editable content: profile, about, experience,
                        skills, projects. Edit this file for updates —
                        you shouldn't need to touch the components below.
  index.css          <- theme + all styling (CSS variables at the top)
  App.jsx            <- assembles the page from the sections below
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
    HudBackdrop.jsx  <- the animated circuit-grid/scanline background
public/
  images/            <- profile photo, project screenshots
  resume/            <- resume PDF served at /resume/<file>.pdf
```

### Adding a project
Open `src/data.js` and add an entry to the `projects` array:

```js
{
  id: 'unique-slug',
  name: 'Project Name',
  description: 'One or two lines about what it does.',
  stack: ['Tech', 'Tech', 'Tech'],
  github: 'https://github.com/you/repo', // or null to hide
  demo: 'https://your-demo-url.com',      // or null to hide
}
```

### Updating experience or skills
Same idea — edit the `experience` or `skills` arrays in `src/data.js`.

### Changing the theme
All colors, fonts, and spacing live as CSS variables at the top of
`src/index.css` under `:root`. Change `--signal` to swap the accent color,
or `--void`/`--panel` to change the background tones.

## Deploying to GitHub Pages

1. Push this project to your existing GitHub repo (see below).
2. Install the deploy dependency (already in `package.json`) and run:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes the `dist/` folder to a `gh-pages` branch.
3. In your repo settings → **Pages**, set the source to the `gh-pages` branch.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

> The Vite config uses a relative base path (`base: './'`), so it works
> whether the site is served from a repo subpath or a root/custom domain —
> no extra config needed.

## Updating your existing GitHub repo

Since this replaces your old static HTML/CSS/JS site:

```bash
# from inside your existing repo folder
rm -rf * .gitignore          # clear out the old static files (keep .git)
# copy all files from this project in, then:
git add .
git commit -m "Rebuild portfolio in React with new theme and projects"
git push
```
