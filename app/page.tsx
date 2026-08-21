'use client';

import Image from 'next/image';
import { useState } from 'react';

const stack = ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'PHP', 'Flutter', 'PostgreSQL', 'Prisma', 'Supabase', 'Vercel'];

const projects = [
  { id: '01', title: 'Serenity Touch NYC', type: 'WEB EXPERIENCE', image: '/images/banner.png', accent: 'gold', description: 'A conversion-focused website for a New York in-home massage business. I shaped the experience around trust, premium presentation, clear services and a direct path to booking.', tags: ['Next.js', 'Responsive design', 'Conversion UX'], link: 'https://serenity-touch-nyc.vercel.app/' },
  { id: '02', title: 'IBARFFS COOPs', type: 'FULL-STACK PLATFORM', image: '/images/dashboard.jpg', accent: 'blue', description: 'A connected cooperative management platform covering member onboarding, authentication, savings, shares, loans, repayments, ledgers and administration.', tags: ['Node.js', 'Prisma', 'PostgreSQL'], link: 'https://github.com/micheal-driod' },
  { id: '03', title: 'IBARFFS Admin', type: 'OPERATIONS SYSTEM', image: '/images/admin.png', accent: 'dark', description: 'The administrative control layer for the cooperative platform, with member operations, approvals, loan review, monthly posting and protected workflows.', tags: ['React', 'REST APIs', 'Role-based access'], link: 'https://github.com/micheal-driod' },
  { id: '04', title: 'Developer / Product Work', type: 'ENGINEERING PRACTICE', image: '/images/banner.png', accent: 'green', description: 'From debugging and API integration to deployment and performance work, I enjoy taking software from an idea or broken state to something dependable.', tags: ['Debugging', 'API integration', 'Deployment'], link: 'mailto:adegbitesegunmic02@gmail.com' },
];

const services = [
  ['01', 'Web & frontend', 'Responsive websites, product interfaces and landing pages with strong visual hierarchy and thoughtful UX.'],
  ['02', 'Full-stack systems', 'APIs, authentication, databases, dashboards and business workflows built as one coherent system.'],
  ['03', 'Mobile products', 'Flutter applications with practical mobile UX and connected backend services.'],
  ['04', 'Rescue & delivery', 'Debugging existing code, fixing integrations, resolving deployment issues and getting products production-ready.'],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="portfolio" id="top">
      <header className="nav">
        <a className="brand" href="#top"><span>SM</span><strong>Segun Michael<br />Adegbite</strong></a>
        <button className="nav-toggle" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        <nav className={open ? 'open' : ''}>
          <a href="#about">About</a><a href="#work">Selected work</a><a href="#capabilities">Capabilities</a><a className="nav-cta" href="mailto:adegbitesegunmic02@gmail.com">Hire me ↗</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">FRONTEND DEVELOPER · FULL-STACK ENGINEER · NIGERIA</p>
          <h1>Software should feel <i>simple.</i></h1>
          <p className="hero-text">I&apos;m Segun — I design and build digital products that turn complicated business needs into clear, useful experiences. I work across interfaces, APIs, databases, mobile apps and deployment.</p>
          <div className="hero-buttons"><a className="button dark" href="#work">See what I build <span>↓</span></a><a className="text-link" href="mailto:adegbitesegunmic02@gmail.com">Start a project ↗</a></div>
          <div className="hero-meta"><span><b>2023—NOW</b><small>BUILDING PROFESSIONALLY</small></span><span><b>WEB + MOBILE</b><small>END-TO-END DELIVERY</small></span><span><b>WORLDWIDE</b><small>REMOTE COLLABORATION</small></span></div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-note">01 / THE PERSON<br /><span>BEHIND THE CODE</span></div>
          <div className="portrait-wrap"><Image src="/images/profile.jpg" alt="Segun Michael Adegbite" width={1086} height={1448} priority /></div>
          <div className="portrait-caption"><strong>SEGUN<br /><em>ADEGBITE</em></strong><span>IBADAN, NIGERIA<br />AVAILABLE WORLDWIDE</span></div>
          <div className="portrait-line" />
        </div>
      </section>

      <section className="intro-strip"><span>WHAT I DO</span><p>Build the interface. Connect the system. Solve the problem. Ship the product.</p><div className="strip-mark">↘</div></section>

      <section className="about" id="about">
        <div className="section-label">02 / ABOUT ME</div>
        <div className="about-grid">
          <h2>I&apos;m interested in the space between <i>people, business and technology.</i></h2>
          <div className="about-copy"><p>My background is in building practical software for real organizations and users. Since 2023, I&apos;ve worked as a freelance full-stack developer, moving from frontend interfaces into backend systems, mobile applications, databases and deployment.</p><p>That means I don&apos;t only think about how a screen looks. I think about what happens after the button is pressed: who is allowed to do it, where the data goes, what the business rule is, how the system behaves on mobile and how the finished product reaches production.</p><p className="signature">Good software is clear on the surface and solid underneath.</p></div>
        </div>
        <div className="about-facts"><div><strong>Frontend</strong><span>React · Next.js · TypeScript · UI/UX</span></div><div><strong>Backend</strong><span>Node · Express · PHP · REST APIs</span></div><div><strong>Data</strong><span>PostgreSQL · MySQL · Supabase</span></div><div><strong>Delivery</strong><span>GitHub · Vercel · Railway · Debugging</span></div></div>
      </section>

      <section className="work" id="work">
        <div className="work-heading"><div><span className="section-label">03 / SELECTED WORK</span><h2>Projects with a <i>reason.</i></h2></div><p>These aren&apos;t concept screens. They represent the kind of work I want to keep doing: products with a user, a business problem and a real outcome.</p></div>
        <div className="project-list">{projects.map((p, i) => <article className={`project ${i % 2 ? 'reverse' : ''}`} key={p.id}><div className={`project-image ${p.accent}`}><Image src={p.image} alt={`${p.title} project screenshot`} width={1920} height={1080} /><span className="project-index">{p.id}</span><span className="project-view">VIEW PROJECT ↗</span></div><div className="project-copy"><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><a href={p.link} target={p.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Explore project <b>↗</b></a></div></article>)}</div>
      </section>

      <section className="story">
        <div className="section-label">04 / HOW I WORK</div>
        <div className="story-head"><h2>From <i>problem</i><br />to product.</h2><p>I like clarity. Before I write a lot of code, I want to understand the person using it, the business rule behind it and what success looks like.</p></div>
        <div className="process"><div><span>01</span><h3>Understand</h3><p>Requirements, users, constraints and the real problem.</p></div><div><span>02</span><h3>Shape</h3><p>Structure the experience, data and technical approach.</p></div><div><span>03</span><h3>Build</h3><p>Interface, APIs, authentication, database and integrations.</p></div><div><span>04</span><h3>Deliver</h3><p>Test, debug, deploy, refine and keep improving.</p></div></div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="section-label">05 / CAPABILITIES</div><div className="cap-head"><h2>Useful across<br /><i>the stack.</i></h2><p>Hiring me means you can hand me a feature, a product, an existing codebase or a messy technical problem and we can work toward a finished result.</p></div>
        <div className="service-list">{services.map(([n,t,d]) => <div className="service" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></div>)}</div>
        <div className="toolkit"><span>TOOLKIT</span><div>{stack.map(s => <b key={s}>{s}</b>)}</div></div>
      </section>

      <section className="contact">
        <div className="contact-orbit" aria-hidden="true" /><span className="section-label">06 / CONTACT</span><h2>Let&apos;s make<br /><i>something useful.</i></h2><p>If you&apos;re hiring remotely, launching a product, improving an existing system or simply have an idea that needs a developer, I&apos;d like to hear about it.</p><div className="contact-actions"><a className="button dark" href="mailto:adegbitesegunmic02@gmail.com">Email Segun ↗</a><a href="https://github.com/micheal-driod" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/adegbite-segun-59517416a/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><footer><span>SEGUN MICHAEL ADEGBITE</span><span>IBADAN, NIGERIA · WORKING WORLDWIDE</span><span>© 2026</span></footer>
      </section>
    </main>
  );
}
