const projects = [
  {
    number: '01',
    kind: 'PRODUCT SYSTEM / FINTECH',
    title: 'IBARFFS Cooperative',
    statement: 'A banking-style cooperative platform built around members, savings, shares, loans and a transparent transaction ledger.',
    image: '/images/admin.png',
    tags: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React', 'Flutter'],
    result: 'Admin operations + member experience unified in one system.',
  },
  {
    number: '02',
    kind: 'SERVICE BUSINESS / CONVERSION',
    title: 'Serenity Touch NYC',
    statement: 'A polished service website designed to turn social traffic into confident booking enquiries for a New York massage business.',
    image: '/Screenshot (104).png',
    tags: ['Next.js', 'Responsive UI', 'Conversion UX', 'Vercel'],
    result: 'Clear offer → trust → booking path, with a premium visual direction.',
  },
  {
    number: '03',
    kind: 'EDTECH / COMMUNITY PRODUCT',
    title: 'African Student Super App',
    statement: 'A student-focused digital experience exploring campus discovery, peer services, communication and everyday student utility.',
    image: '/Screenshot (102).png',
    tags: ['Product UI', 'Web App', 'Mobile UX', 'Responsive Design'],
    result: 'A visual system shaped around young users and fast interactions.',
  },
  {
    number: '04',
    kind: 'WEB INTERFACE / DASHBOARD',
    title: 'Trading & Finance UI',
    statement: 'Clean dashboard and marketing-interface work for finance-oriented digital products, focused on hierarchy, clarity and action.',
    image: '/Screenshot (5).png',
    tags: ['Frontend', 'Dashboard UI', 'UX', 'Responsive Web'],
    result: 'Information-heavy screens made easier to scan and understand.',
  },
];

const capabilities = [
  ['01', 'Web Applications', 'Next.js, React, PHP and Node.js systems that feel fast, intentional and production-ready.'],
  ['02', 'Mobile Products', 'Flutter applications with authentication, dashboards, APIs and practical user flows.'],
  ['03', 'Business Systems', 'Admin panels, member portals, ledgers, workflows, approvals and data-driven operations.'],
  ['04', 'Rescue & Deploy', 'Debugging, database integration, hosting, production builds and deployment troubleshooting.'],
];

const stack = ['NEXT.JS', 'REACT', 'NODE.JS', 'PHP', 'FLUTTER', 'PRISMA', 'POSTGRESQL', 'MYSQL', 'SUPABASE', 'VERCEL'];

export default function PortfolioWebsite() {
  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <aside className="side-rail">
        <a className="rail-mark" href="#top" aria-label="Back to top">SM<span>•</span></a>
        <span className="rail-line" />
        <span className="rail-copy">DIGITAL BUILDER / 2026</span>
      </aside>

      <div className="site-shell" id="top">
        <nav className="nav">
          <a className="wordmark" href="#top">SEGUN<span>_</span>ADEGBITE</a>
          <div className="nav-links"><a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#about">About</a></div>
          <a className="nav-cta" href="mailto:adegbitesegunmic02@gmail.com">Start a project <span>↗</span></a>
        </nav>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-index">/ 001 — AVAILABLE WORLDWIDE</div>
          <div className="hero-copy">
            <p className="eyebrow">FULL-STACK DEVELOPER <span>×</span> PRODUCT BUILDER</p>
            <h1 id="hero-title">I build digital<br /><em>systems</em> that<br />mean business.</h1>
            <p className="hero-intro">From a cooperative banking platform to a New York service brand, I turn rough ideas into usable, credible products — websites, dashboards, mobile apps and the backend underneath them.</p>
            <div className="hero-actions">
              <a className="button button-solid" href="#work">Explore selected work <span>↓</span></a>
              <a className="button button-ghost" href="mailto:adegbitesegunmic02@gmail.com">adegbitesegunmic02@gmail.com</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src="/ChatGPT Image Jul 24, 2026, 06_23_43 PM.png" alt="Segun Adegbite" />
              <div className="portrait-label"><span>SEGUN ADEGBITE</span><span>DEV / DESIGN / SYSTEMS</span></div>
            </div>
            <div className="orbit-card orbit-one"><span>◎</span> SHIPS<br />REAL PRODUCTS</div>
            <div className="orbit-card orbit-two">LAGOS → WORLD<br /><strong>REMOTE READY</strong></div>
          </div>
        </section>

        <div className="ticker" aria-label="Technology stack"><div className="ticker-track">{[...stack, ...stack].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✳</b></span>)}</div></div>

        <section className="proof-strip">
          <div><small>01</small><strong>END-TO-END</strong><span>UI → API → DATABASE → DEPLOY</span></div>
          <div><small>02</small><strong>REAL-WORLD</strong><span>BUILT FOR OPERATIONS, NOT JUST MOCKUPS</span></div>
          <div><small>03</small><strong>REMOTE-FIRST</strong><span>CLEAR COMMUNICATION / GLOBAL CLIENTS</span></div>
        </section>

        <section className="work-section" id="work">
          <div className="section-head">
            <div><span className="section-kicker">/ SELECTED WORK</span><h2>Things I&apos;ve<br /><em>actually built.</em></h2></div>
            <p>Not a gallery of pretty screens. These are examples of how I approach products: understand the job, shape the experience, connect the data, then make the whole thing feel finished.</p>
          </div>
          <div className="project-stack">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-meta"><span>{project.number}</span><span>{project.kind}</span></div>
                <div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span className="image-corner">VIEW / {project.number}</span></div>
                <div className="project-info">
                  <h3>{project.title}</h3><p>{project.statement}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-result"><small>BUILD NOTE</small><span>{project.result}</span></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities" id="capabilities">
          <div className="section-head compact"><div><span className="section-kicker">/ CAPABILITIES</span><h2>More than<br /><em>just code.</em></h2></div><p>I sit comfortably between product thinking and implementation. That means fewer hand-offs, faster decisions and systems that make sense beyond the homepage.</p></div>
          <div className="cap-grid">{capabilities.map(([num, title, desc]) => <div className="cap" key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p><i>↗</i></div>)}</div>
        </section>

        <section className="about" id="about">
          <div className="about-stamp">BUILT<br />TO BE<br /><span>USEFUL.</span></div>
          <div className="about-copy"><span className="section-kicker">/ A LITTLE CONTEXT</span><h2>Technical enough<br />to build it. <em>Curious<br />enough to build it right.</em></h2><p>I&apos;m Segun Adegbite, a developer focused on practical digital products. My work spans business management systems, mobile applications, responsive websites, dashboards and the infrastructure that connects them.</p><p>I care about the details clients notice and the ones they don&apos;t: responsive layouts, clean data flows, useful admin tools, maintainable code and a deployment that actually works.</p><div className="about-signature">SEGUN / FULL-STACK DEVELOPER</div></div>
          <div className="about-photo"><img src="/images/profile.jpg" alt="Segun Adegbite profile" /><span>BASED IN NIGERIA<br />WORKING WORLDWIDE</span></div>
        </section>

        <section className="process">
          <div className="section-head compact"><div><span className="section-kicker">/ HOW I WORK</span><h2>A calm process<br /><em>for serious work.</em></h2></div></div>
          <div className="process-line"><div><b>01</b><strong>UNDERSTAND</strong><p>Goals, users, constraints and what success actually means.</p></div><div><b>02</b><strong>SHAPE</strong><p>Structure the experience before adding unnecessary complexity.</p></div><div><b>03</b><strong>BUILD</strong><p>Connect polished interfaces to real data, APIs and workflows.</p></div><div><b>04</b><strong>SHIP</strong><p>Test, fix, deploy and leave you with something usable.</p></div></div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-top"><span>/ 004 — LET&apos;S TALK</span><span>OPEN TO REMOTE / CONTRACT / FREELANCE</span></div>
          <h2>Have a product<br /><em>worth building?</em></h2>
          <p>Tell me what you&apos;re trying to build, fix or improve. I&apos;ll tell you what I think the smartest next move is.</p>
          <a className="contact-email" href="mailto:adegbitesegunmic02@gmail.com">adegbitesegunmic02@gmail.com <span>↗</span></a>
          <div className="contact-links"><a href="https://github.com/micheal-driod/micheal-driod" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/adegbite-segun-59517416a/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.fiverr.com/sellers/liteerupt/" target="_blank" rel="noreferrer">Fiverr ↗</a><a href="https://wa.me/2348134607134" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
        </section>

        <footer><span>SEGUN_ADEGBITE / DIGITAL BUILDER</span><span>© 2026 ALL RIGHTS RESERVED</span><a href="#top">BACK TO TOP ↑</a></footer>
      </div>
    </main>
  );
}
