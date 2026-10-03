import './App.css';
import { AppCards } from './components/AppCards';
import { ThemeToggle } from './components/ThemeToggle';

// Edit these to personalize the page. Leave a value empty ('') to hide it.
const SITE = {
  name: 'Anna Jolly',
  domain: 'annajolly.io',
  bio: 'Senior Software Developer based in Montréal, specializing in front-end development. I build scalable, intuitive web experiences primarily with React and Node.js, and I’m passionate about transforming product vision into polished, impactful software.',
  email: 'anna@annajolly.io',
  github: 'https://github.com/annajolly',
  linkedin: 'https://www.linkedin.com/in/anna-jolly-671478127',
  resume: '', // link to a résumé PDF
};

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header className="site-header">
        <a href="#top" className="wordmark">
          {SITE.domain}
        </a>
        <nav className="site-nav" aria-label="Main">
          {SITE.github && (
            <a href={SITE.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}
          {SITE.linkedin && (
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          )}
          {SITE.email && <a href={`mailto:${SITE.email}`}>Contact</a>}
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <h1 className="hero-title">
            {SITE.name} <em>software developer.</em>
          </h1>
          <div className="hero-aside">
            {SITE.bio && <p>{SITE.bio}</p>}
            {SITE.email && (
              <a className="mono" href={`mailto:${SITE.email}`}>
                {SITE.email} →
              </a>
            )}
          </div>
        </section>

        <div id="work" className="section-head">
          <h2>Selected work</h2>
          <span className="mono muted">Hover to preview · click to visit</span>
        </div>

        <AppCards />
      </main>

      <footer id="about" className="site-footer">
        <span className="muted-strong">
          © {year} {SITE.name}
        </span>
        <div className="footer-links">
          {SITE.resume && (
            <a href={SITE.resume} target="_blank" rel="noopener noreferrer">
              Résumé ↗
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
