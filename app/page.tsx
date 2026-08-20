'use client';

import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: '01', title: 'Serenity Touch NYC', kicker: 'SERVICE BUSINESS / CONVERSION',
    description: 'A premium web experience for a New York wellness brand — built to turn social traffic into confident enquiries and bookings.',
    image: '/images/admin.png', tags: ['Next.js', 'UX', 'Responsive'], size: 'wide',
  },
  {
    id: '02', title: 'IBARFFS Cooperative', kicker: 'FINTECH / OPERATIONS PLATFORM',
    description: 'A banking-style cooperative ecosystem for savings, shares, loans, repayments, ledgers and approvals.',
    image: '/Screenshot (104).png', tags: ['Node.js', 'Prisma', 'PostgreSQL'], size: 'tall',
  },
  {
    id: '03', title: "Africa's Student Super App", kicker: 'MOBILE PRODUCT / CAMPUS',
    description: 'A student-first product concept connecting community, discovery, campus commerce and useful everyday tools.',
    image: '/images/admin.png', tags: ['Product UI', 'Mobile UX', 'Flutter'], size: 'normal',
  },
  {
    id: '04', title: 'Trading & Affiliate Interfaces', kicker: 'DASHBOARD / FINANCIAL UI',
    description: 'High-clarity interfaces designed around dense information, quick decisions and a trustworthy product feel.',
    image: '/Screenshot (5).png', tags: ['Dashboard', 'UX', 'Web'], size: 'normal',
  },
];

const services = [
  { no: '01', title: 'Web experiences', text: 'Marketing sites, landing pages and product interfaces that make a business look credible before the first conversation.' },
  { no: '02', title: 'Business systems', text: 'Dashboards, APIs, authentication, workflows and databases that turn manual operations into software.' },
  { no: '03', title: 'Mobile products', text: 'Flutter applications with thoughtful UX, connected backends and a structure that can grow with the product.' },
  { no: '04', title: 'Build & rescue', text: 'Existing project fixes, deployment, database and integration work when a promising build needs a reliable technical hand.' },
];

const stack = ['Next.js', 'React', 'Node.js', 'TypeScript', 'PHP', 'Prisma', 'PostgreSQL', 'Flutter', 'Supabase', 'Git'];

export default function PortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site">
      <div className="noise" aria-hidden="true" />
      <header className="header">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="Segun Adegbite home"><span className="logo-dot" /><span>SEGUN / ADEGBITE</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? 'CLOSE' : 'MENU'}</button>
        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a><a href="#services" onClick={closeMenu}>Capabilities <span>02</span></a><a href="#about" onClick={closeMenu}>Approach <span>03</span></a><a className="header-contact" href="mailto:adegbitesegunmic02@gmail.com" onClick={closeMenu}>Let&apos;s talk ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid-mark" aria-hidden="true" />
        <div className="hero-left">
          <div className="status"><span className="pulse" /> AVAILABLE FOR SELECT PROJECTS <b>2026</b></div>
          <p className="hero-index">01 / INDEPENDENT DEVELOPER</p>
          <h1>Software with a <span>human</span> edge.</h1>
          <p className="hero-lede">I design and build websites, mobile products and business systems for people who need their ideas to work in the real world.</p>
          <div className="hero-actions"><a className="primary-btn" href="#work">See the work <span>↘</span></a><a className="quiet-link" href="mailto:adegbitesegunmic02@gmail.com">Start a conversation <span>↗</span></a></div>
          <div className="hero-proof"><div><strong>04+</strong><span>YEARS BUILDING</span></div><div><strong>10+</strong><span>PRODUCTS / SYSTEMS</span></div><div><strong>WW</strong><span>REMOTE COLLABORATION</span></div></div>
        </div>
        <div className="hero-right">
          <div className="portrait-frame">
            <div className="portrait-top"><span>PROFILE / 2026</span><span>IBADAN → WORLD</span></div>
            <Image src="/images/profile.jpg" alt="Segun Adegbite, full-stack developer" width={1086} height={1448} priority className="portrait" />
            <div className="portrait-overlay" /><div className="portrait-name">SEGUN<br /><em>ADEGBITE</em></div><div className="portrait-role">FULL-STACK<br />DEVELOPER</div>
          </div>
          <div className="orbit orbit-a" aria-hidden="true" /><div className="orbit orbit-b" aria-hidden="true" />
          <div className="location-card"><span>BASED IN</span><strong>IBADAN, NG</strong><small>WORKING WORLDWIDE</small></div><div className="year-card">26<span>º</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Skills"><div className="marquee-track">{[...stack, ...stack].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✳</b></span>)}</div></section>

      <section className="work section" id="work">
        <div className="section-intro"><div><span className="label">02 / SELECTED WORK</span><h2>Proof over<br /><i>promises.</i></h2></div><p>Recent work across service businesses, fintech, student products and operational software. Different industries. Same obsession with clarity.</p></div>
        <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.size}`} key={project.id}><div className="project-visual"><Image src={project.image} alt={`${project.title} project preview`} width={1920} height={1080} /><div className="project-number">{project.id}</div><div className="project-corner">VIEW ↗</div></div><div className="project-details"><div><span className="project-kicker">{project.kicker}</span><h3>{project.title}</h3></div><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="manifesto" id="about"><div className="manifesto-top"><span className="label">03 / THE DIFFERENCE</span><span>DESIGN + CODE + DELIVERY</span></div><div className="manifesto-main"><h2>I don&apos;t just make<br /><em>things look good.</em></h2><div className="manifesto-copy"><p>The best software feels obvious. A customer knows where to go. A team knows what to do next. A business owner can finally see what is happening.</p><p>That is the standard I bring to a project — thoughtful interface, dependable engineering and a finish that feels intentional.</p><strong>One developer. Fewer handoffs. Better momentum.</strong></div></div><div className="manifesto-foot"><span>CRAFT / 01</span><span>CLARITY / 02</span><span>RELIABILITY / 03</span><span>OUTCOME / 04</span></div></section>

      <section className="services section" id="services"><div className="section-intro services-intro"><div><span className="label">04 / CAPABILITIES</span><h2>From first<br /><i>idea to live.</i></h2></div><p>I can join at the beginning, take over a half-built project or help get something already working to a more professional level.</p></div><div className="service-list">{services.map(service => <article className="service-row" key={service.no}><span className="service-no">{service.no}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow">↗</span></article>)}</div><div className="stack-panel"><span className="label">THE TOOLKIT</span><div>{stack.map(item => <span key={item}>{item}</span>)}</div></div></section>

      <section className="final-cta"><div className="cta-ring" aria-hidden="true">LET&apos;S BUILD · LET&apos;S BUILD · LET&apos;S BUILD · </div><span className="label">05 / YOUR NEXT PROJECT</span><h2>Have a problem<br />worth <em>building.</em></h2><p>Whether you need a website that converts, a system that saves your team hours, or a developer to finish what you started — let&apos;s talk.</p><div className="cta-actions"><a className="cta-main" href="mailto:adegbitesegunmic02@gmail.com">adegbitesegunmic02@gmail.com <span>↗</span></a><a className="cta-social" href="https://www.linkedin.com/in/adegbite-segun-59517416a/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="cta-social" href="https://github.com/micheal-driod" target="_blank" rel="noreferrer">GitHub ↗</a></div><footer><span>SEGUN ADEGBITE © 2026</span><span>IBADAN, NIGERIA / AVAILABLE WORLDWIDE</span><span>NEXT.JS · NODE · FLUTTER · PHP</span></footer></section>
    </main>
  );
}
