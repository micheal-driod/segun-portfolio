'use client';

import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: '01', title: 'Serenity Touch NYC', kicker: 'BUSINESS WEBSITE / CONVERSION',
    description: 'A polished digital presence for a New York wellness business, designed around trust, visual credibility and turning social-media visitors into enquiries.',
    image: '/images/banner.png', tags: ['Next.js', 'Responsive UX', 'Conversion'], size: 'wide',
  },
  {
    id: '02', title: 'IBARFFS COOPs', kicker: 'FINANCIAL OPERATIONS / FULL-STACK',
    description: 'A banking-style cooperative platform for FAAN workers, bringing member accounts, savings, shares, loans, repayments, ledgers and administration into one connected system.',
    image: '/images/dashboard.jpg', tags: ['Node.js', 'Prisma', 'PostgreSQL'], size: 'tall',
  },
  {
    id: '03', title: 'IBARFFS Admin Platform', kicker: 'ADMIN / WORKFLOW SYSTEM',
    description: 'The operational side of the cooperative ecosystem: approvals, member management, financial records and controlled administrative workflows.',
    image: '/images/admin.png', tags: ['React', 'APIs', 'Role-based access'], size: 'normal',
  },
  {
    id: '04', title: 'LinkQio / Student Products', kicker: 'MOBILE PRODUCT / COMMUNITY',
    description: 'Student-focused digital experiences connecting campus communities, discovery, commerce and everyday tools through thoughtful mobile-first interfaces.',
    image: '/images/banner.png', tags: ['Product UI', 'Flutter', 'Mobile UX'], size: 'normal',
  },
];

const services = [
  { no: '01', title: 'Web products', text: 'Responsive websites, landing pages and product interfaces that make businesses credible, memorable and easy to use.' },
  { no: '02', title: 'Business systems', text: 'Authentication, dashboards, APIs, databases, approvals and workflows that replace scattered manual processes with software.' },
  { no: '03', title: 'Mobile applications', text: 'Flutter applications with clean UX, connected APIs and architecture designed for real users rather than demos.' },
  { no: '04', title: 'Technical problem-solving', text: 'I can take over an existing codebase, diagnose deployment issues, repair broken integrations and push a product toward production.' },
];

const stack = ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'PHP', 'Flutter', 'Prisma', 'PostgreSQL', 'Supabase', 'Git', 'Vercel'];

export default function PortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site">
      <div className="noise" aria-hidden="true" />
      <header className="header">
        <a className="logo" href="#top" onClick={closeMenu}><span className="logo-dot" /><span>SEGUN / ADEGBITE</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'CLOSE' : 'MENU'}</button>
        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About <span>01</span></a>
          <a href="#work" onClick={closeMenu}>Work <span>02</span></a>
          <a href="#services" onClick={closeMenu}>Capabilities <span>03</span></a>
          <a className="header-contact" href="mailto:adegbitesegunmic02@gmail.com" onClick={closeMenu}>Let&apos;s talk ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid-mark" aria-hidden="true" />
        <div className="hero-left">
          <div className="status"><span className="pulse" /> OPEN TO REMOTE / INTERNATIONAL WORK <b>2026</b></div>
          <p className="hero-index">01 / SEGUN MICHAEL ADEGBITE</p>
          <h1>I build digital products with <span>purpose.</span></h1>
          <p className="hero-lede">I&apos;m a Nigerian frontend developer and full-stack engineer who turns business ideas, operational problems and rough concepts into polished software that people can actually use.</p>
          <div className="hero-actions"><a className="primary-btn" href="#work">Explore my work <span>↘</span></a><a className="quiet-link" href="mailto:adegbitesegunmic02@gmail.com">Work with me <span>↗</span></a></div>
          <div className="hero-proof"><div><strong>2023+</strong><span>PROFESSIONAL BUILDING</span></div><div><strong>FULL</strong><span>STACK DELIVERY</span></div><div><strong>WW</strong><span>REMOTE COLLABORATION</span></div></div>
        </div>
        <div className="hero-right">
          <div className="portrait-frame">
            <div className="portrait-top"><span>IDENTITY / 2026</span><span>IBADAN → WORLD</span></div>
            <Image src="/images/profile.jpg" alt="Segun Michael Adegbite — Frontend Developer and Full-Stack Engineer" width={1086} height={1448} priority className="portrait" />
            <div className="portrait-overlay" /><div className="portrait-name">SEGUN<br /><em>ADEGBITE</em></div><div className="portrait-role">FRONTEND +<br />FULL-STACK</div>
          </div>
          <div className="orbit orbit-a" aria-hidden="true" /><div className="orbit orbit-b" aria-hidden="true" />
          <div className="location-card"><span>BASED IN</span><strong>IBADAN, NIGERIA</strong><small>AVAILABLE WORLDWIDE</small></div><div className="year-card">26<span>º</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Technology stack"><div className="marquee-track">{[...stack, ...stack].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✳</b></span>)}</div></section>

      <section className="manifesto about section" id="about">
        <div className="manifesto-top"><span className="label">02 / ABOUT SEGUN</span><span>ENGINEERING / DESIGN / DELIVERY</span></div>
        <div className="manifesto-main">
          <h2>More than a<br /><em>code writer.</em></h2>
          <div className="manifesto-copy">
            <p>I enjoy sitting between the business problem and the finished product. I think through the user, the workflow, the data and the engineering — then I build the pieces that make them work together.</p>
            <p>Since 2023, I&apos;ve worked on responsive web applications, mobile products, backend APIs, authentication, databases, admin platforms and production deployments.</p>
            <strong>My goal: useful software, clear interfaces and dependable delivery.</strong>
          </div>
        </div>
        <div className="manifesto-foot"><span>FRONTEND / 01</span><span>BACKEND / 02</span><span>MOBILE / 03</span><span>PRODUCT THINKING / 04</span></div>
      </section>

      <section className="story section">
        <div className="section-intro"><div><span className="label">03 / HOW I GOT HERE</span><h2>Built through<br /><i>real problems.</i></h2></div><p>My strongest work has come from building things that have to solve an actual problem — not just look impressive in a screenshot.</p></div>
        <div className="story-grid">
          <article><span>01 / START</span><h3>Frontend first.</h3><p>I learned to care about the experience a person sees and touches: responsive layouts, clear navigation, accessible interfaces and details that make a product feel finished.</p></article>
          <article><span>02 / EXPAND</span><h3>Then the whole system.</h3><p>Real projects pushed me deeper into APIs, authentication, databases, business rules, dashboards and the backend decisions required to make interfaces actually work.</p></article>
          <article><span>03 / DELIVER</span><h3>From local idea to live product.</h3><p>I&apos;ve learned the less glamorous but critical parts too: debugging, environment variables, deployment, database migrations, CI/CD and getting a build over the finish line.</p></article>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-intro"><div><span className="label">04 / SELECTED WORK</span><h2>Real builds.<br /><i>Real stories.</i></h2></div><p>Different clients and industries have taught me to adapt the technology to the problem instead of forcing every project into the same template.</p></div>
        <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.size}`} key={project.id}><div className="project-visual"><Image src={project.image} alt={`${project.title} project preview`} width={1920} height={1080} /><div className="project-number">{project.id}</div><div className="project-corner">CASE STUDY ↗</div></div><div className="project-details"><div><span className="project-kicker">{project.kicker}</span><h3>{project.title}</h3></div><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="services section" id="services"><div className="section-intro services-intro"><div><span className="label">05 / CAPABILITIES</span><h2>What I can<br /><i>bring to you.</i></h2></div><p>Whether you are hiring a developer, validating an idea or rescuing an existing project, I bring both interface craft and engineering depth.</p></div><div className="service-list">{services.map(service => <article className="service-row" key={service.no}><span className="service-no">{service.no}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow">↗</span></article>)}</div><div className="stack-panel"><span className="label">THE TOOLKIT</span><div>{stack.map(item => <span key={item}>{item}</span>)}</div></div></section>

      <section className="final-cta"><div className="cta-ring" aria-hidden="true">BUILD · SHIP · IMPROVE · BUILD · SHIP · IMPROVE · </div><span className="label">06 / LET&apos;S WORK</span><h2>Have a problem<br />worth <em>building?</em></h2><p>Tell me what you&apos;re trying to build, improve or fix. I&apos;ll bring a practical engineering mindset, clean product thinking and a willingness to get the work over the line.</p><div className="cta-actions"><a className="cta-main" href="mailto:adegbitesegunmic02@gmail.com">Start a conversation <span>↗</span></a><a className="cta-social" href="mailto:adegbitesegunmic02@gmail.com">Email ↗</a><a className="cta-social" href="https://github.com/micheal-driod" target="_blank" rel="noreferrer">GitHub ↗</a><a className="cta-social" href="https://www.linkedin.com/in/adegbite-segun-59517416a/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><footer><span>SEGUN MICHAEL ADEGBITE © 2026</span><span>IBADAN, NIGERIA / WORKING WORLDWIDE</span><span>WEB · MOBILE · SYSTEMS</span></footer></section>
    </main>
  );
}
