"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { HyperText } from "@/components/ui/hyper-text";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

const techRow1 = ["TypeScript","React","Next.js","Node.js","ElysiaJS","FastAPI","Tailwind CSS","PostgreSQL","Bun"];
const techRow2 = ["Supabase","Drizzle ORM","BullMQ","Azure Service Bus","Grafana","Prometheus","Loki","LangChain","Anthropic Claude","OpenTelemetry"];

const projects = [
  {
    name: "SmartPharma360",
    tagline: "Full pharma supply chain SaaS — Manufacturing · Distribution · Retail",
    description: "Sole engineer owning the full stack for a multi-tenant pharma SaaS that covers the entire supply chain: manufacturing, C&F distribution, and retail pharmacy. 4 major modules (PMS, DMS, RMS, Sales Force Automation), 10+ web and mobile apps, 10M+ invoices processed, 200+ businesses across 80+ locations. Built the billing engine, multi-tenant data isolation, GST-compliant financial reporting, real-time inventory management, and managed 30+ Azure infrastructure nodes across production, staging, and UAT environments.",
    stack: ["Node.js","React","TypeScript","PostgreSQL","Azure","Redis","Azure Service Bus","Azure Blob"],
    type: "Production",
    featured: true,
  },
  {
    name: "PillPlus",
    tagline: "B2C Medicine Delivery Platform",
    description: "Consumer-facing medicine delivery built from zero — real-time order tracking, AI-powered product search via Typesense, PayU payment gateway, and reliable async order processing via BullMQ workers with retry and dead-letter handling.",
    stack: ["Next.js","ElysiaJS","Bun","Drizzle ORM","Supabase","AI SDK","Typesense","PayU"],
    type: "Production",
    featured: true,
  },
  {
    name: "Azure Service Bus Pipeline",
    tagline: "Financial-grade message bus for POS, orders & internal jobs",
    description: "Designed a guaranteed-delivery async pipeline handling POS payment processing, inward order management, and internal background jobs — all on Azure Service Bus with dead-letter queues, automatic retry, exponential backoff, and idempotent consumers. Zero transaction loss across all live POS terminals.",
    stack: ["Azure Service Bus","Azure Functions","TypeScript","PostgreSQL","Dead-letter queues"],
    type: "Infrastructure",
    featured: false,
  },
  {
    name: "Micro Frontend Migration",
    tagline: "Monolith → Module Federation at scale",
    description: "Led the decomposition of a large React monolith into a Module Federation architecture on Turborepo — independent team deployments, 60%+ reduction in build times, and zero-downtime migration with feature-flag rollout.",
    stack: ["Module Federation","Turborepo","React","TypeScript","Webpack"],
    type: "Architecture",
    featured: false,
  },
  {
    name: "Observability Platform",
    tagline: "30+ node infrastructure visibility from scratch",
    description: "Built end-to-end observability across 30+ Azure VMs spanning 4 products and 3 environments — custom Grafana dashboards per product team, multi-service Prometheus alerting, and structured Loki log aggregation. Reduced mean time to detect (MTTD) from hours to minutes.",
    stack: ["Grafana","Prometheus","Loki","Azure","Docker","AlertManager"],
    type: "Infrastructure",
    featured: false,
  },
  {
    name: "Orderplus",
    tagline: "B2B Order Management — Distributor to Pharmacy",
    description: "Distributor-facing order management connecting the DMS supply chain to downstream pharmacies — Anthropic AI for order intelligence, OpenReplay session replay for support, Swagger-documented APIs, and JWT auth with silent refresh.",
    stack: ["Node.js","React","Anthropic SDK","OpenReplay","Swagger","JWT"],
    type: "Production",
    featured: false,
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Years building production SaaS" },
  { value: 10, suffix: "M+", label: "Invoices processed" },
  { value: 4, suffix: "", label: "Products shipped end-to-end" },
  { value: 30, suffix: "+", label: "Infrastructure nodes managed" },
];

const typeColors: Record<string, string> = {
  Production:     "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  Infrastructure: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  Architecture:   "bg-purple-500/10 text-purple-400 border border-purple-500/20",
};

const expPoints = [
  "Sole engineer owning the full stack for SmartPharma360 — a multi-tenant pharma supply chain SaaS covering manufacturing, distribution, and retail. 4 modules, 10+ apps, 10M+ invoices processed, 200+ businesses in production.",
  "Designed a financial-grade Azure Service Bus pipeline handling POS payment processing, inward order management, and async internal jobs — dead-letter queues, automatic retry, idempotent consumers, zero transaction loss.",
  "Built and shipped PillPlus end-to-end — B2C medicine delivery with AI-powered Typesense search, PayU payment gateway, and reliable async order processing via BullMQ.",
  "Planned and executed micro frontend migration: React monolith → Module Federation on Turborepo with feature-flag rollout and 60%+ build time reduction.",
  "Designed end-to-end observability from scratch across 30+ Azure infrastructure nodes (4 products, 3 environments) — Grafana dashboards, Prometheus alerting, Loki structured logging.",
  "Integrated Anthropic Claude, OpenAI, Google Gemini, and Fireworks AI across multiple production products including order intelligence and search.",
  "Built and published open-source Typesense MCP Server — listed on Smithery, enabling AI assistants to interact with Typesense search indexes directly.",
  "Managed complete Azure cloud infrastructure: VMs, Blob Storage, Service Bus, Functions, Logic Apps, Form Recognizer, Application Insights — across prod, staging, and UAT.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-500">
            <span className="text-indigo-400">~/</span>sathwikram
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm text-zinc-400">
            {["about","skills","projects","experience","contact"].map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-zinc-100 transition-colors capitalize">{s}</a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for remote
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">
        <AnimatedGridPattern numSquares={40} maxOpacity={0.05} duration={3} className="text-indigo-400" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 sm:py-44">
          <BlurFade delay={0.1} inView>
            <p className="font-mono text-sm text-zinc-500 tracking-widest uppercase mb-6">
              Hyderabad, India &nbsp;·&nbsp; Remote
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <HyperText
              className="text-6xl sm:text-8xl font-bold tracking-tight text-zinc-100 mb-5 leading-none"
              duration={1000}
              delay={400}
              startOnView={false}
              animateOnHover
            >
              Sathwik Ram
            </HyperText>
          </BlurFade>

          <BlurFade delay={0.32} inView>
            <p className="text-2xl sm:text-3xl font-light mb-4">
              <AnimatedGradientText colorFrom="#6366f1" colorTo="#06b6d4" speed={0.8} className="font-semibold">
                Senior Software Engineer
              </AnimatedGradientText>
            </p>
          </BlurFade>

          <BlurFade delay={0.42} inView>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
              10+ years building production SaaS end-to-end.{" "}
              <span className="text-zinc-200">Distributed systems · platform engineering · AI integration.</span>
              {" "}I&apos;ve shipped 4 products, processed 10M+ invoices, and managed 30+ infrastructure nodes —
              as the sole engineer owning architecture, cloud, payments, and observability.
            </p>
          </BlurFade>

          <BlurFade delay={0.52} inView>
            <div className="flex flex-wrap gap-4 mb-20">
              <a href="#projects">
                <ShimmerButton className="font-medium text-sm px-6 py-3" background="rgba(79,70,229,1)" shimmerDuration="2.5s">
                  View My Work ↓
                </ShimmerButton>
              </a>
              <a
                href="https://linkedin.com/in/sathwikram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/sathwikram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200"
              >
                GitHub ↗
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.62} inView>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {stats.map(({ value, suffix, label }, i) => (
                <div key={label} className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-400 tabular-nums">
                    <NumberTicker value={value} delay={0.8 + i * 0.1} />{suffix}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-t border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <p className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">01 — About</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Who I am</h2>
          </BlurFade>
          <div className="grid sm:grid-cols-2 gap-10 text-zinc-400 leading-relaxed">
            <BlurFade inView delay={0.2}>
              <div className="space-y-4">
                <p>
                  I&apos;m a Senior Software Engineer based in{" "}
                  <span className="text-zinc-200">Hyderabad, India</span> with 10+ years of experience
                  building production SaaS from the first commit to infrastructure management.
                </p>
                <p>
                  At Risurge Technologies, I own the full engineering stack for a pharma-tech ecosystem —
                  writing features, designing systems, managing cloud infrastructure, setting up observability,
                  and integrating AI across multiple production products.
                </p>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <div className="space-y-4">
                <p>
                  I specialize in{" "}
                  <span className="text-zinc-200">distributed systems reliability</span>,{" "}
                  <span className="text-zinc-200">platform engineering</span>, and{" "}
                  <span className="text-zinc-200">LLM integration</span> — the kind of work that ships
                  features fast and keeps them running when it matters most.
                </p>
                <p>
                  I&apos;ve owned the full engineering stack of a pharma supply chain SaaS from day one —
                  architecture decisions, cloud infrastructure, payment systems, observability, and AI — without
                  a separate DevOps, QA, or data team.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <section id="skills" className="py-24 border-t border-zinc-800/60 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 mb-10">
          <BlurFade inView delay={0.1}>
            <p className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">02 — Skills</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
          </BlurFade>
        </div>
        <div className="space-y-4">
          <Marquee pauseOnHover repeat={4} className="[--duration:38s]">
            {techRow1.map((tech) => (
              <span key={tech} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default mx-2">
                {tech}
              </span>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse repeat={4} className="[--duration:32s]">
            {techRow2.map((tech) => (
              <span key={tech} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-purple-500/50 hover:text-purple-300 transition-colors cursor-default mx-2">
                {tech}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 border-t border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <p className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">03 — Projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">What I&apos;ve Built</h2>
          </BlurFade>

          {/* Featured — full width */}
          <div className="space-y-5 mb-5">
            {projects.filter(p => p.featured).map((project, i) => (
              <BlurFade key={project.name} inView delay={0.15 + i * 0.1}>
                <MagicCard className="p-7" gradientColor="rgba(99,102,241,0.07)">
                  <BorderBeam colorFrom="#6366f1" colorTo="#8b5cf6" duration={4 + i} size={80} />
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-zinc-100 text-lg">{project.name}</h3>
                        <span className={cn("text-xs px-2.5 py-1 rounded-full font-medium", typeColors[project.type])}>{project.type}</span>
                      </div>
                      <p className="text-sm text-zinc-500">{project.tagline}</p>
                    </div>
                    <span className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium">Featured ✦</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5 max-w-3xl">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 font-mono">{tech}</span>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>

          {/* Rest — 2-col grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.filter(p => !p.featured).map((project, i) => (
              <BlurFade key={project.name} inView delay={0.3 + i * 0.08}>
                <MagicCard className="h-full p-6" gradientColor="rgba(99,102,241,0.05)">
                  <div className="flex items-start justify-between mb-3">
                    <div className="pr-4">
                      <h3 className="font-bold text-zinc-100 text-base">{project.name}</h3>
                      <p className="text-xs text-zinc-500 mt-0.5">{project.tagline}</p>
                    </div>
                    <span className={cn("shrink-0 text-xs px-2.5 py-1 rounded-full font-medium", typeColors[project.type])}>{project.type}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 font-mono">{tech}</span>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section className="py-24 border-t border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <p className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">04 — Open Source</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Public Work</h2>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <a href="https://github.com/sathwikram/typesense-mcp-server" target="_blank" rel="noopener noreferrer" className="block group">
              <MagicCard className="p-8" gradientColor="rgba(249,115,22,0.07)">
                <BorderBeam colorFrom="#f97316" colorTo="#6366f1" duration={5} size={80} />
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span className="text-xs text-orange-400 font-mono font-semibold uppercase tracking-widest">Open Source</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-orange-300 transition-colors">
                      typesense-mcp-server
                    </h3>
                  </div>
                  <span className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-medium">
                    Published on Smithery ✦
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-5 max-w-2xl">
                  A Model Context Protocol (MCP) server for Typesense — lets AI assistants directly interact
                  with Typesense search indexes. One of the few published MCP servers for search infrastructure.
                  Built in Python with Docker support.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python","MCP Protocol","Typesense","Docker","Smithery"].map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">{t}</span>
                  ))}
                </div>
              </MagicCard>
            </a>
          </BlurFade>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 border-t border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <p className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">05 — Experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Career</h2>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <div className="relative pl-8 border-l border-zinc-800">
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-zinc-950 ring-2 ring-indigo-500/30" />
              <h3 className="text-xl font-bold text-zinc-100 mb-1">Senior Software Engineer</h3>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="text-indigo-400 font-medium">Risurge Technologies</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-500 text-sm font-mono">2019 – Present</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-500 text-sm">Hyderabad, India</span>
              </div>
              <ul className="space-y-2.5">
                {expPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                    <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>{point}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
          <BlurFade inView delay={0.35}>
            <div className="relative pl-8 border-l border-zinc-800 mt-12">
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-950" />
              <h3 className="text-xl font-bold text-zinc-100 mb-1">Full Stack Developer</h3>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="text-zinc-400 font-medium">Various Roles</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-500 text-sm font-mono">2015 – 2019</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Built Pi Datacenters pricing portal and PI KMP knowledge management platform with OnlyOffice integration",
                  "Developed enterprise PM tools, freelance portals, and real-time booking systems",
                  "Full-stack experience across Angular, Laravel, PHP, and early Node.js",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                    <span className="text-zinc-600 mt-0.5 shrink-0">▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
          <BlurFade inView delay={0.45}>
            <div className="relative pl-8 border-l border-zinc-800 mt-12">
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950" />
              <h3 className="text-lg font-bold text-zinc-300">B.Tech — Lovely Professional University</h3>
              <span className="text-zinc-500 text-sm font-mono">2011 – 2015</span>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 border-t border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <p className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-4">06 — Contact</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Building something ambitious?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-3">
              I&apos;m actively looking for senior remote opportunities with teams in the{" "}
              <span className="text-zinc-200">US, EU, AU, or CA</span> who are building ambitious products.
            </p>
            <p className="text-zinc-500 max-w-xl leading-relaxed mb-10">
              If that&apos;s you — reach out. I&apos;m selective, and if there&apos;s a fit, you&apos;ll know quickly.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <div className="flex flex-col gap-5">
              {/* Email as a quiet, confident text link — not a button */}
              <a
                href="mailto:sathwikram@outlook.com"
                className="group inline-flex items-center gap-3 text-zinc-300 hover:text-white transition-colors w-fit"
              >
                <span className="w-8 h-8 rounded-full border border-zinc-700 group-hover:border-zinc-500 flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-mono text-sm tracking-wide">sathwikram@outlook.com</span>
              </a>

              {/* Social links */}
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="https://linkedin.com/in/sathwikram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShimmerButton className="font-medium text-sm px-6 py-3" background="rgba(79,70,229,1)" shimmerDuration="2.5s">
                    Connect on LinkedIn ↗
                  </ShimmerButton>
                </a>
                <a
                  href="https://github.com/sathwikram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/60 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <span className="font-mono">sathwikram.com</span>
          <span>Built with Next.js · MagicUI · Motion · Vercel</span>
        </div>
      </footer>
    </div>
  );
}
