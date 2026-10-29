import { useEffect, useState } from 'react';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  { name: 'React', icon: 'react', tone: 'lilac' },
  { name: 'JavaScript', icon: 'javascript', tone: 'yellow' },
  { name: 'HTML', icon: 'html', tone: 'peach' },
  { name: 'CSS', icon: 'css', tone: 'blue' },
  { name: 'C++', icon: 'code', tone: 'mint' },
  { name: 'DSA', icon: 'database', tone: 'pink' },
  { name: 'Web development', icon: 'globe', tone: 'lavender' },
  { name: 'SQL', icon: 'database', tone: 'blue' },
  { name: 'GitHub Copilot', icon: 'sparkle', tone: 'lilac' },
];

const experienceHighlights = [
  <>
    Contributed to the <strong>Delhi Metro Sarthi website</strong>, a React-powered web
    experience for the Delhi Metro Sarthi App, improving navigation,
    accessibility, and the rider experience.
  </>,
  <>
    Worked with cross-functional teams on feature delivery, code reviews, and
    collaborative development.
  </>,
  <>
    Helped ship UI updates and feature enhancements for the{' '}
    <strong>Delhi Metro Sarthi App</strong>.
  </>,
];

function Icon({ name, size = 20, className = '' }) {
  const paths = {
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    arrowRight: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    code: <><path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></>,
    graduation: <><path d="m2 10 10-5 10 5-10 5-10-5Z" /><path d="M6 12v5c3.5 3 8.5 3 12 0v-5M22 10v6" /></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></>,
    html: <><path d="m4 3 1.5 17L12 22l6.5-2L20 3H4Z" /><path d="M8 8h8l-.5 3H9l.3 3h5.9l-.4 3-2.8.8-2.8-.8-.2-2" /></>,
    javascript: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M12 8v7a2 2 0 0 0 4 0M9 17a2 2 0 0 1-4 0" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-2.9-8.6A2 2 0 0 1 4.3 2.2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8.2 10.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .6 3 .7a2 2 0 0 1 1.4 1.7Z" /></>,
    react: <><circle cx="12" cy="12" r="2" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></>,
    sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3ZM19 14l1.1 3.1L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-.9L19 14Z" /></>,
    x: <><path d="m18 6-12 12M6 6l12 12" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}

function ClayIcon({ name, tone = 'lilac' }) {
  return (
    <span className={`clay-icon clay-icon--${tone}`}>
      <Icon name={name} size={20} />
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#home">Skip to content</a>
      <header className="site-header">
        <nav className="nav-shell container" aria-label="Main navigation">
          <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Tanya Kumari, home">
            tk<span>.</span>
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="menu-toggle clay-button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <Icon name={menuOpen ? 'x' : 'menu'} />
          </button>
          <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
            {navigation.map((item) => (
              <a
                aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                className={activeSection === item.href.slice(1) ? 'nav-link nav-link--active' : 'nav-link'}
                href={item.href}
                key={item.label}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <Icon name="arrow" size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow"><span className="status-dot" /> Open to full-time opportunities</span>
              <p className="hero-intro">Hello, I&apos;m<span aria-hidden="true">✳</span></p>
              <h1>Tanya <span>Kumari</span></h1>
              <p className="hero-description">
                Web developer and computer science graduate who turn ideas into intuitive web experiences, with clean code and an eye for the details.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Say hello <Icon name="arrowRight" size={18} />
                </a>
                <a className="text-link" href="#experience">Explore my experience</a>
              </div>
              <div className="hero-footnote">
                <span className="footnote-line" />
                <span>Curious by nature. Developer by choice.</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Decorative 3D-style developer illustration" role="img">
              <div className="hero-glow" />
              <div className="orbit orbit--one" />
              <div className="orbit orbit--two" />
              <div className="floaty floaty--spark"><Icon name="sparkle" size={22} /></div>
              <div className="floaty floaty--dot" />
              <div className="floaty floaty--plus">+</div>
              <div className="profile-tile clay-card">
                <div className="profile-topline">
                  <span className="profile-window"><i /><i /><i /></span>
                  <span className="profile-label">A little about me</span>
                  <Icon name="arrow" size={16} />
                </div>
                <div className="profile-avatar">
                  <div className="avatar-halo" />
                  <div className="avatar-shape"><span>tk</span></div>
                  <span className="avatar-spark avatar-spark--one">✳</span>
                  <span className="avatar-spark avatar-spark--two">✦</span>
                </div>
                <div className="profile-caption">
                  <span className="caption-kicker">DESIGN-MINDED DEVELOPER</span>
                  <span className="caption-name">Tanya Kumari</span>
                  <span className="caption-location"><span /> Building things for the web</span>
                </div>
                <div className="code-sticker"><Icon name="code" size={19} /></div>
              </div>
              <div className="floating-note floating-note--top clay-card">
                <span className="note-emoji">✳</span>
                <span>Made with<br /><strong>curiosity</strong></span>
              </div>
              <div className="floating-note floating-note--bottom clay-card">
                <ClayIcon name="react" tone="blue" />
                <span>Currently creating<br /><strong>with React</strong></span>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span /> A little more about me</a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow"><Icon name="sparkle" size={15} /> A bit about me</span>
            </div>
            <div className="about-layout">
              <div className="about-copy">
                <p className="about-lead">
                  Computer Science graduate. Developer by practice. Curious by nature. Always building, learning, and improving.
                </p>
                <p>
                  During my final year of B.Tech, I gained hands-on experience as a Software Engineer Intern at Autope Payment Solutions, contributing to React-powered web and mobile experiences for Delhi Metro. My foundation in data structures and C++ shapes how I approach problems, while my interest in web development drives what I build.
                </p>
                <p>
                  I&apos;m now looking for a full-time opportunity where I can
                  contribute, keep growing, and build thoughtful, accessible
                  products with a collaborative team.
                </p>
              </div>
              <div className="about-cards">
                <article className="about-card clay-card">
                  <ClayIcon name="graduation" tone="peach" />
                  <div>
                    <span className="card-overline">JECRC University, Jaipur(2022-2026)</span>
                    <h3>B.Tech-CSE</h3>
                    <p>CGPA: 9.3</p>
                  </div>
                  <span className="card-index">01</span>
                </article>
                <article className="about-card clay-card">
                  <ClayIcon name="graduation" tone="peach" />
                  <div>
                    <span className="card-overline">Creane Memorial High School, Gaya(2022)</span>
                    <h3>CBSE XII</h3>
                    <p>86.4%</p>
                  </div>
                  <span className="card-index">02</span>
                </article>
                <article className="about-card clay-card">
                  <ClayIcon name="graduation" tone="peach" />
                  <div>
                    <span className="card-overline">Nazareth Academy, Gaya(2020)</span>
                    <h3>CBSE X</h3>
                    <p>87.4%</p>
                  </div>
                  <span className="card-index">03</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="eyebrow"><Icon name="sparkle" size={15} /> My toolkit</span>
              <h2>Tools I like <span>working with.</span></h2>
              <p>A growing collection of things I use to bring ideas to life.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  className={`skill-card clay-card skill-card--${skill.tone}`}
                  key={skill.name}
                  style={{ '--skill-index': index }}
                >
                  <ClayIcon name={skill.icon} tone={skill.tone} />
                  <span>{skill.name}</span>
                  <Icon className="skill-arrow" name="arrow" size={15} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow"><Icon name="sparkle" size={15} /> Where I&apos;ve been</span>
              <h2>A little hands-on <span>experience.</span></h2>
            </div>
            <article className="experience-card clay-card">
              <div className="experience-rail">
                <span className="rail-icon"><Icon name="briefcase" size={19} /></span>
                <span className="rail-line" />
              </div>
              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <span className="role-label">INTERNSHIP</span>
                    <h3>Software Engineer Intern</h3>
                    <p className="company-name">Autope Payment Solutions Limited</p>
                  </div>
                  <span className="date-chip"><Icon name="calendar" size={15} /> Sep 2025 — Feb 2026</span>
                </div>
                <p className="experience-summary">
                  Contributed to digital products that help make everyday journeys a little smoother.
                </p>
                <ul className="experience-list">
                  {experienceHighlights.map((highlight, index) => (
                    <li key={index}><Icon name="check" size={16} /> <span>{highlight}</span></li>
                  ))}
                </ul>
                <div className="recognition-note">
                  <span className="recognition-star">✳</span>
                  Recognized for proactive problem-solving and clean UI implementation
                </div>
              </div>
              <div className="experience-decoration" aria-hidden="true">✳</div>
            </article>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="container">
            <div className="contact-panel clay-card">
              <div className="contact-copy">
                <span className="eyebrow"><Icon name="sparkle" size={15} /> Have something in mind?</span>
                <h2>Let&apos;s make<br /><span>something lovely.</span></h2>
                <p>
                  Have an opportunity, a good idea, or just want to say hello?
                  I&apos;d love to hear from you.
                </p>
                <a className="primary-button" href="mailto:tanyak.2610@gmail.com">
                  Drop me a line <Icon name="arrowRight" size={18} />
                </a>
                <span className="contact-email-hint">tanyak.2610@gmail.com</span>
              </div>
              <div className="contact-details">
                <a className="contact-link clay-card" href="mailto:tanyak.2610@gmail.com">
                  <ClayIcon name="email" tone="peach" />
                  <span><small>EMAIL ME</small><strong>tanyak.2610@gmail.com</strong></span>
                  <Icon className="contact-arrow" name="arrow" size={17} />
                </a>
                <a
                  className="contact-link clay-card"
                  href="https://www.linkedin.com/in/tanyakumari26/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ClayIcon name="linkedin" tone="blue" />
                  <span><small>CONNECT ON LINKEDIN</small><strong>tanyakumari26</strong></span>
                  <Icon className="contact-arrow" name="arrow" size={17} />
                </a>
                <a
                  className="contact-link clay-card"
                  href="https://github.com/Tanya5653"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ClayIcon name="code" tone="lilac" />
                  <span><small>FIND ME ON GITHUB</small><strong>Tanya5653</strong></span>
                  <Icon className="contact-arrow" name="arrow" size={17} />
                </a>
              </div>
              <span className="contact-decoration contact-decoration--one" aria-hidden="true">✳</span>
              <span className="contact-decoration contact-decoration--two" aria-hidden="true">✦</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="wordmark footer-wordmark" href="#home" aria-label="Back to top">tk<span>.</span></a>
          <p>Made with care, curiosity &amp; a little <Icon name="heart" size={14} />.</p>
          <span>© {new Date().getFullYear()} Tanya Kumari</span>
        </div>
      </footer>
    </>
  );
}

export default App;
