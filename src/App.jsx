import { portfolioData } from "../portfolio.js";

const avatarIllustration = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 360">
    <defs>
      <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#f7e7d8"/>
        <stop offset="100%" stop-color="#efd8c5"/>
      </linearGradient>
      <linearGradient id="hair" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#6b3926"/>
        <stop offset="100%" stop-color="#3e2116"/>
      </linearGradient>
      <linearGradient id="blazer" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#2e2d31"/>
        <stop offset="100%" stop-color="#18181b"/>
      </linearGradient>
      <linearGradient id="shirt" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#e8ecf1"/>
      </linearGradient>
    </defs>
    <rect width="320" height="360" fill="url(#bg)"/>
    <ellipse cx="160" cy="348" rx="96" ry="18" fill="#d9bfa9" opacity="0.35"/>
    <path d="M108 90c6-34 32-58 54-58 33 0 66 29 69 72 2 28-8 45-8 45l-19-10-69 2-25-11s-8-17-2-40Z" fill="url(#hair)"/>
    <path d="M102 106c-22 18-30 37-31 69 10-11 22-19 34-22l-3-47Z" fill="url(#hair)"/>
    <path d="M218 110c19 16 31 37 31 71-10-14-22-22-34-25l3-46Z" fill="url(#hair)"/>
    <path d="M133 145c0-29 12-48 28-48s28 19 28 48v39c0 26-13 43-28 43s-28-17-28-43v-39Z" fill="#dcb49a"/>
    <path d="M119 260c10-15 30-23 42-23s31 8 42 23v39H119v-39Z" fill="#d9b39a"/>
    <path d="M80 340c2-52 27-92 80-92 52 0 78 40 80 92H80Z" fill="url(#blazer)"/>
    <path d="M122 248h76l-25 42h-27l-24-42Z" fill="url(#shirt)"/>
    <path d="M141 249h38l-19 26-19-26Z" fill="#d7dee6"/>
    <path d="M132 110c11-17 31-29 48-29 16 0 34 12 45 30-11-8-27-13-45-13-18 0-35 5-48 12Z" fill="url(#hair)"/>
    <path d="M112 142c4-25 19-47 48-54-13 14-18 31-18 52l-30 2Z" fill="url(#hair)"/>
    <path d="M210 141c-4-26-17-45-45-53 11 14 16 30 16 51l29 2Z" fill="url(#hair)"/>
    <path d="M206 163c13 1 22 5 29 15-6-30-13-51-28-68l-1 53Z" fill="url(#hair)"/>
    <path d="M113 163c-13 1-22 5-29 15 6-30 14-51 29-68v53Z" fill="url(#hair)"/>
  </svg>
`)}`;

function App() {
  const { profile, spotlight, projects, skills, research, contact } = portfolioData;
  const year = new Date().getFullYear();
  const avatarSrc = `${import.meta.env.BASE_URL}avatar.jpg`;
  const aboutParagraphs = [profile.description, spotlight.copy, contact.intro];
  const extras = [
    {
      title: "Favorite stack",
      text: "React, Node.js, PostgreSQL, Power BI, and product-focused data workflows.",
      eyebrow: "Build",
    },
    {
      title: "How I work",
      text: "I enjoy turning complex systems into clean interfaces, useful dashboards, and clear decisions.",
      eyebrow: "Approach",
    },
    {
      title: "Currently open to",
      text: contact.availability,
      eyebrow: "Next move",
    },
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      window.alert("Please fill in all fields before sending your message.");
      return;
    }

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\nFrom: ${name} (${email})`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="page-shell">
      <div className="background-motion" aria-hidden="true">
        <span className="motion-blob motion-blob-one" />
        <span className="motion-blob motion-blob-two" />
        <span className="motion-blob motion-blob-three" />
        <span className="motion-line motion-line-one" />
        <span className="motion-line motion-line-two" />
      </div>
      <div className="portfolio-frame">
        <header className="topbar">
          <div className="topbar-inner">
            <a href="#top" className="nav-logo">
              {profile.firstName} {profile.lastName}
            </a>
            <ul className="nav-links">
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>

        <main className="portfolio-content">
          <section className="intro-section" id="top">
            <div className="intro-avatar-wrap">
              <div className="avatar-circle">
                <img
                  src={avatarSrc}
                  alt={`${profile.firstName} profile avatar`}
                  className="avatar-image"
                  onError={(e) => {
                    e.currentTarget.src = avatarIllustration;
                  }}
                />
              </div>
              <p className="avatar-caption">{profile.role}</p>
              <div className="meta-stack">
                {profile.meta.map((item) => (
                  <span key={item} className="meta-pill subtle">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="intro-copy" id="about">
              <p className="section-label">About me</p>
              <h1 className="intro-title">
                Hi there, I&apos;m <span>{profile.firstName}</span>.
              </h1>
              <div className="intro-text">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">
                  Get in touch
                </a>
                <a href="#work" className="btn btn-outline">
                  View work
                </a>
              </div>
            </div>
          </section>

          <section className="extras-section">
            <div className="compact-header">
              <h2>Extras about me</h2>
              <p>{spotlight.title}</p>
            </div>
            <div className="extras-grid">
              {extras.map((item) => (
                <article key={item.title} className="extra-card">
                  <p className="extra-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-grid" id="work">
            <div className="content-main">
              <section className="section-block">
                <div className="section-header">
                  <div>
                    <p className="section-label">Selected work</p>
                    <h2 className="section-title">Projects</h2>
                  </div>
                  <p className="section-copy">
                    A curated set of product, analytics, and backend work with practical outcomes.
                  </p>
                </div>
                <div className="projects-grid">
                  {projects.map((project) => (
                    <article key={project.name} className="project-card">
                      <div className="project-header">
                        <h3 className="project-name">{project.name}</h3>
                        <span className="meta-pill subtle">Project</span>
                      </div>
                      <p className="project-summary">{project.summary}</p>
                      <p className="project-outcome">{project.outcome}</p>
                      {project.href ? (
                        <a
                          className="contact-link"
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.linkLabel || "View project"}
                        </a>
                      ) : null}
                      <div className="project-tools">
                        {project.tools.map((tool) => (
                          <span key={tool} className="tool-tag">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="section-block">
                <div className="section-header">
                  <div>
                    <p className="section-label">Academic</p>
                    <h2 className="section-title">Research</h2>
                  </div>
                  <p className="section-copy">
                    Research and technical writing focused on intelligent systems and applied AI.
                  </p>
                </div>
                <div className="research-list">
                  {research.map((item) => (
                    <article key={item.title} className="research-item">
                      <div className="research-icon">R</div>
                      <div>
                        <h3 className="research-title">{item.title}</h3>
                        <p className="research-meta">{item.meta}</p>
                        <p className="research-meta">{item.summary}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="content-side">
              <section className="side-card">
                <p className="section-label">Capabilities</p>
                <h2 className="side-title">Skills</h2>
                <div className="skills-stack">
                  {skills.map((group) => (
                    <article key={group.title} className="skill-group">
                      <h3 className="skill-group-title">{group.title}</h3>
                      <div className="skill-list">
                        {group.items.map((item) => (
                          <span key={item} className="skill-pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="side-card" id="contact">
                <p className="section-label">Say hello</p>
                <h2 className="side-title">Contact</h2>
                <p className="contact-intro">{contact.intro}</p>
                <div className="contact-links">
                  {contact.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <a
                        key={link.label}
                        className="contact-link"
                        href={link.href}
                        target={external ? "_blank" : "_self"}
                        rel={external ? "noreferrer" : undefined}
                      >
                        <strong>{link.label}:</strong> {link.value}
                      </a>
                    );
                  })}
                </div>
                <div className="availability">{contact.availability}</div>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <label htmlFor="cf-name">Name</label>
                    <input type="text" id="cf-name" name="name" placeholder="Your name" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      type="email"
                      id="cf-email"
                      name="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="cf-msg">Message</label>
                    <textarea
                      id="cf-msg"
                      name="message"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit">
                    Send message
                  </button>
                </form>
              </section>
            </aside>
          </section>
        </main>

        <footer>
          <div className="footer-inner">
            {year} Yashika Hudda | {contact.footer}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
