import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sathwik Ram — Senior Software Engineer",
};

const skills = {
  "Frontend": ["TypeScript", "React", "Next.js", "Tailwind CSS", "Module Federation", "Radix UI", "TanStack Query", "Framer Motion", "React Native"],
  "Backend": ["Node.js", "Express.js", "ElysiaJS (Bun)", "FastAPI (Python)", "REST APIs", "GraphQL"],
  "AI / LLM": ["Anthropic Claude", "OpenAI", "Google Gemini", "LangChain", "AI SDK", "MCP Server", "Azure Form Recognizer"],
  "Databases": ["PostgreSQL", "MySQL", "Supabase", "Redis", "Drizzle ORM", "Sequelize", "Typesense"],
  "Cloud & Infra": ["Azure VMs", "Azure Service Bus", "Azure Functions", "Azure Blob Storage", "Logic Apps", "Supabase Edge Functions", "Docker", "Nginx", "PM2"],
  "Observability": ["Grafana", "Prometheus", "Loki", "OpenTelemetry", "NewRelic", "OpenReplay", "k6", "Artillery"],
  "Queues & Async": ["BullMQ", "Azure Service Bus", "Apache Airflow"],
};

const projects = [
  {
    name: "PillPlus — Medicine Delivery",
    description: "B2C medicine delivery app with real-time order tracking, AI-powered product search, payment processing, and async order management via queue workers.",
    stack: ["Next.js", "ElysiaJS", "Bun", "Drizzle ORM", "Supabase", "BullMQ", "AI SDK", "PayU", "Google Maps"],
    type: "Production",
    highlight: true,
  },
  {
    name: "SmartPharma360 — Pharma SaaS",
    description: "Multi-tenant B2B pharmacy management platform (RMS + DMS) serving retail chains and distributors. 3000+ commits, 8+ Azure VMs, full lifecycle ownership.",
    stack: ["Node.js", "React", "TypeScript", "PostgreSQL", "Azure", "Redis", "BullMQ"],
    type: "Production",
    highlight: true,
  },
  {
    name: "Failproof Order Queue System",
    description: "Azure Service Bus + Edge Functions pipeline for inward order processing with guaranteed delivery, dead-letter handling, and retry logic.",
    stack: ["Azure Service Bus", "Azure Functions", "Node.js", "TypeScript", "PostgreSQL"],
    type: "Infrastructure",
    highlight: false,
  },
  {
    name: "Micro Frontend Migration",
    description: "Architected and led migration of a large React monolith to a Module Federation-based micro frontend system using Turborepo, significantly reducing build times.",
    stack: ["Module Federation", "Turborepo", "React", "TypeScript", "Webpack"],
    type: "Architecture",
    highlight: false,
  },
  {
    name: "Observability Platform",
    description: "Set up full Grafana + Prometheus + Loki observability stack from scratch across 8+ Azure VMs — dashboards, alerting, log aggregation, incident response.",
    stack: ["Grafana", "Prometheus", "Loki", "Azure", "Docker"],
    type: "Infrastructure",
    highlight: false,
  },
  {
    name: "Orderplus — Order Management",
    description: "B2B order management platform with AI-assisted features, Swagger API documentation, session replay integration, and full auth system.",
    stack: ["Node.js", "React", "Anthropic SDK", "OpenReplay", "MUI DataGrid", "JWT"],
    type: "Production",
    highlight: false,
  },
];

const experience = [
  {
    company: "Risurge Technologies",
    role: "Senior Software Engineer",
    period: "2019 – Present",
    location: "Hyderabad, India (Remote-ready)",
    points: [
      "Architected and built SmartPharma360 — a multi-tenant pharma SaaS platform (B2B) spanning RMS, DMS, billing, inventory, and financial compliance modules",
      "Built PillPlus — B2C medicine delivery app with Next.js, ElysiaJS/Bun, Drizzle ORM, Supabase, AI-powered product search, and real payment processing",
      "Designed failproof Azure Service Bus + Edge Functions pipeline for order processing with guaranteed delivery and automatic retry",
      "Led micro frontend migration: decomposed a large React monolith into Module Federation-based MFE system on Turborepo, cutting build times by 60%+",
      "Set up full observability stack (Grafana + Prometheus + Loki) across 8+ Azure VMs from scratch — dashboards, alerting, log aggregation",
      "Integrated multiple LLM providers (Anthropic Claude, OpenAI, Google Gemini, Fireworks AI) into production features across products",
      "Built and published open-source Typesense MCP Server on Smithery",
      "Managed Azure infrastructure: VMs, Blob Storage, Service Bus, Functions, Logic Apps, Form Recognizer",
    ],
  },
  {
    company: "Previous Roles",
    role: "Full Stack Developer",
    period: "2015 – 2019",
    location: "India",
    points: [
      "Built Pi Datacenters pricing portal and knowledge management platform (PI KMP) with OnlyOffice integration",
      "Developed enterprise project management tools, freelance portals, and booking systems",
      "Gained full-stack experience across Angular, Laravel, PHP, and Node.js",
    ],
  },
];

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-indigo-500 hover:text-indigo-300 transition-colors duration-200">
      {skill}
    </span>
  );
}

const typeColors: Record<string, string> = {
  Production: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Infrastructure: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Architecture: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-400">
            <span className="text-indigo-400">~/</span>sathwikram
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm text-zinc-400">
            {["about", "skills", "projects", "experience", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-zinc-100 transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:sathwikram@gmail.com"
            className="text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors font-medium"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center dot-grid pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 py-32">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to remote opportunities
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Sathwik Ram</span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-400 font-light mb-4 max-w-2xl">
            Senior Software Engineer
          </p>

          <p className="text-base sm:text-lg text-zinc-500 mb-10 max-w-xl leading-relaxed">
            10+ years building and operating production SaaS platforms end-to-end.{" "}
            <span className="text-zinc-300">Distributed systems · Platform engineering · AI integration.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sathwikram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sathwikram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              { value: "10+", label: "Years experience" },
              { value: "8+", label: "Azure VMs managed" },
              { value: "3000+", label: "Commits on SP360" },
              { value: "4", label: "LLM providers integrated" },
            ].map(({ value, label }) => (
              <div key={label} className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/50">
                <div className="text-2xl font-bold text-indigo-400">{value}</div>
                <div className="text-xs text-zinc-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-mono text-indigo-400 mb-3">01. ABOUT</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-10">Who I am</h3>
          <div className="grid sm:grid-cols-2 gap-10 text-zinc-400 leading-relaxed">
            <div className="space-y-4">
              <p>
                I&apos;m a Senior Software Engineer based in Hyderabad, India with over{" "}
                <span className="text-zinc-200">10 years of experience</span> building production
                SaaS systems end-to-end — from writing the first line of code to managing the
                infrastructure it runs on.
              </p>
              <p>
                At Risurge Technologies, I own the full engineering stack for a pharma-tech
                ecosystem serving B2B pharmacy chains and B2C consumers. That means writing
                features, designing systems, managing cloud infrastructure, setting up observability,
                and integrating AI — all of it.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                I specialize in{" "}
                <span className="text-zinc-200">distributed systems reliability</span> (Service Bus
                pipelines, queue processors, edge functions),{" "}
                <span className="text-zinc-200">platform engineering</span> (Grafana/Prometheus/Loki,
                Azure infra management), and{" "}
                <span className="text-zinc-200">AI/LLM integration</span> (Anthropic, OpenAI,
                Gemini, LangChain).
              </p>
              <p>
                I&apos;m actively looking for{" "}
                <span className="text-indigo-400 font-medium">senior remote opportunities</span> with
                teams in the US, EU, AU, or CA who are building ambitious products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-mono text-indigo-400 mb-3">02. SKILLS</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-10">Tech Stack</h3>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-mono text-indigo-400 mb-3">03. PROJECTS</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-10">What I&apos;ve Built</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`rounded-xl border p-6 bg-zinc-900/50 hover:bg-zinc-900 transition-colors ${
                  project.highlight
                    ? "border-indigo-500/30 hover:border-indigo-500/60"
                    : "border-zinc-800 hover:border-zinc-600"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-zinc-100 text-base leading-snug pr-4">
                    {project.name}
                  </h4>
                  <span
                    className={`shrink-0 text-xs px-2 py-1 rounded-full border font-medium ${typeColors[project.type]}`}
                  >
                    {project.type}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-mono text-indigo-400 mb-3">04. OPEN SOURCE</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-10">Public Work</h3>
          <a
            href="https://github.com/sathwikram/typesense-mcp-server"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-orange-500/30 bg-zinc-900/50 p-8 hover:bg-zinc-900 hover:border-orange-500/60 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest">
                    Open Source
                  </span>
                </div>
                <h4 className="text-xl font-bold text-zinc-100 group-hover:text-orange-300 transition-colors">
                  typesense-mcp-server
                </h4>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-medium">
                Published on Smithery
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              A Model Context Protocol (MCP) server for Typesense — lets AI assistants like Claude
              directly interact with Typesense search indexes. One of the few published MCP servers
              for search infrastructure. Built in Python with Docker support.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "MCP Protocol", "Typesense", "Docker", "Smithery"].map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
                  {t}
                </span>
              ))}
            </div>
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-mono text-indigo-400 mb-3">05. EXPERIENCE</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-10">Career Timeline</h3>
          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-6 border-l border-zinc-800">
                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-zinc-950" />
                <div className="mb-2">
                  <h4 className="text-xl font-bold text-zinc-100">{job.role}</h4>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className="text-indigo-400 font-medium">{job.company}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-500 text-sm font-mono">{job.period}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-500 text-sm">{job.location}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                      <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-mono text-indigo-400 mb-3">06. CONTACT</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s work together</h3>
          <p className="text-zinc-400 max-w-lg mb-10 leading-relaxed">
            I&apos;m actively looking for senior remote opportunities. If you&apos;re building
            something ambitious and need an engineer who can own the full stack — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sathwikram@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email me
            </a>
            <a
              href="https://linkedin.com/in/sathwikram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sathwikram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <span className="font-mono">sathwikram.com</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </div>
  );
}
