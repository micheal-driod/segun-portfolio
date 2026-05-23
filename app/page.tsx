export default function PortfolioWebsite() {
  const services = [
    {
      title: 'Flutter App Development',
      desc: 'Responsive mobile applications with authentication, dashboards, and backend integration.',
    },
    {
      title: 'PHP Backend Systems',
      desc: 'Scalable backend systems with APIs, databases, and secure architecture.',
    },
    {
      title: 'Admin Dashboards',
      desc: 'Modern admin panels for organizations, cooperatives, schools, and businesses.',
    },
    {
      title: 'Bug Fixing & Deployment',
      desc: 'Fix Flutter, backend, hosting, and deployment issues quickly and professionally.',
    },
  ];

  const projects = [
    {
      title: 'IBARFFS Cooperative Management System',
      desc: 'A complete cooperative management platform with savings, shares, loan management, ledger tracking, mobile app integration, and admin dashboard.',
      features: [
        'Member onboarding',
        'Savings & shares tracking',
        'Loan application & approval',
        'Ledger & transaction history',
        'Flutter mobile app',
        'Admin dashboard',
      ],
      tech: 'Flutter • PHP • MySQL • REST API • Supabase',
    },
  ];

  const testimonials = [
    {
      name: 'Cooperative Executive',
      text: 'Professional and responsive developer with strong technical understanding.',
    },
    {
      name: 'Business Client',
      text: 'Delivered our dashboard system successfully with clean design and reliable backend.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm mb-6 border border-green-500/20">
              Available for Freelance & Remote Work
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Segun <span className="text-green-400">Adegbite</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-white/80 mb-6">
              Flutter & PHP Developer
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
              I build management systems, admin dashboards, mobile applications, and backend solutions for organizations, businesses, and startups.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2348134607134"
                className="px-8 py-4 bg-green-500 hover:bg-green-400 transition rounded-2xl font-bold text-black"
              >
                Hire Me
              </a>

              <a
                href="mailto:adegbitesegunmic02@gmail.com"
                className="px-8 py-4 border border-white/20 hover:border-green-400 transition rounded-2xl font-bold"
              >
                Email Me
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <img
                src="\images\banner.png"
                alt="Developer Workspace"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-20 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-green-400 font-semibold mb-4">SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-black">
              What I Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-400/40 transition"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-20 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-green-400 font-semibold mb-4">FEATURED PROJECT</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Real Systems. Real Experience.
            </h2>
          </div>

          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div>
                <img
                  src="/images/dashboard.jpg"
                  alt="Project"
                  className="rounded-2xl h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-black mb-6 text-green-400">
                  {project.title}
                </h3>

                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                  <p className="text-sm text-white/50 mb-2">Tech Stack</p>
                  <p className="font-semibold text-lg">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-20 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-green-400 font-semibold mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-black">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <p className="text-xl leading-relaxed text-white/80 mb-6">
                  “{testimonial.text}”
                </p>

                <h4 className="text-green-400 font-bold text-lg">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-20 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-400 font-semibold mb-4">CONTACT</p>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Let’s Build Something Great Together
          </h2>

          <p className="text-xl text-white/70 leading-relaxed mb-12">
            Available for freelance projects, remote work, system development, bug fixing, and long-term collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/2348134607134"
              className="px-8 py-4 bg-green-500 hover:bg-green-400 transition rounded-2xl font-bold text-black"
            >
              WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/adegbite-segun-59517416a/"
              className="px-8 py-4 border border-white/20 hover:border-green-400 transition rounded-2xl font-bold"
            >
              LinkedIn
            </a>

            <a
              href="https://www.fiverr.com/sellers/liteerupt/"
              className="px-8 py-4 border border-white/20 hover:border-green-400 transition rounded-2xl font-bold"
            >
              Fiverr
            </a>

            <a
              href="https://github.com/micheal-driod/micheal-driod"
              className="px-8 py-4 border border-white/20 hover:border-green-400 transition rounded-2xl font-bold"
            >
              Github
            </a>
          </div>

          <div className="mt-16 text-white/40 text-sm">
            © 2026 Segun Adegbite. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

/*
====================================================
FULL DEPLOYMENT GUIDE
====================================================

STEP 1 — CREATE NEXT.JS PROJECT

Open terminal and run:

npx create-next-app@latest segun-portfolio

Choose:
✔ Yes for Tailwind
✔ Yes for App Router
✔ Yes for TypeScript

====================================================

STEP 2 — OPEN PROJECT

cd segun-portfolio

====================================================

STEP 3 — REPLACE DEFAULT CODE

Open:
app/page.tsx

Delete everything inside.

Paste this entire code.

====================================================

STEP 4 — RUN PROJECT

npm run dev

Open:
http://localhost:3000

====================================================

STEP 5 — CUSTOMIZE

Replace:
- WhatsApp number
- Email
- LinkedIn
- Fiverr
- Upwork

Replace image URLs with:
- your screenshots
- app images
- dashboard screenshots

====================================================

STEP 6 — BUILD FOR PRODUCTION

npm run build

====================================================

STEP 7 — DEPLOY TO VERCEL

1. Push project to GitHub
2. Go to https://vercel.com
3. Login with GitHub
4. Import repository
5. Click Deploy

DONE.

====================================================

FREE DOMAIN OPTIONS
====================================================

You can use:
- yourname.vercel.app
- custom domain later

====================================================

BEST CUSTOM DOMAIN IDEAS
====================================================

- segunadegbite.dev
- segunbuilds.dev
- areagig.tech
- segunmichael.dev

====================================================

IMPORTANT
====================================================

Use REAL screenshots from:
- admin dashboard
- loan page
- ledger page
- mobile app
- login page

That is your biggest selling point.

====================================================
*/
