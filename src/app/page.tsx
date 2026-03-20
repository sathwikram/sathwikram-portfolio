"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { HyperText } from "@/components/ui/hyper-text";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

/* ─── DATA ───────────────────────────────────────────────── */

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "ElysiaJS", "Bun",
  "FastAPI", "PostgreSQL", "Drizzle ORM", "Supabase", "Redis",
  "Azure Service Bus", "BullMQ", "Grafana", "Prometheus", "Loki",
  "LangChain", "Anthropic Claude", "OpenAI", "Module Federation",
  "Turborepo", "Docker", "Nginx", "OpenTelemetry",
];

const stats = [
  { value: 10, suffix: "+", label: "Years" },
  { value: 10, suffix: "M+", label: "Invoices processed" },
  { value: 4, suffix: "", label: "Products shipped" },
  { value: 30, suffix: "+", label: "Infrastructure nodes" },
];

const caseStudies = [
  {
    index: "01",
    name: "SmartPharma360",
    tagline: "Full pharma supply chain SaaS — Manufacturing · C&F Distribution · Retail",
    type: "Platform Engineering",
    typeColor: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    problem:
      "The pharma supply chain ran on disconnected legacy systems. Distributors, C&F agents, and retail pharmacies couldn't share inventory data, reconcile billing in real time, or meet GST compliance requirements without manual intervention.",
    solution:
      "Sole engineer who designed and built the entire platform — multi-tenant data architecture with strict tenant isolation, a financial-grade billing engine, Azure Service Bus for POS payment processing and async jobs, and 30+ infrastructure nodes managed across production, staging, and UAT.",
    outcome:
      "10M+ invoices processed across 200+ businesses and 80+ locations. GST-compliant billing with zero compliance failures. Platform became the operational backbone for multiple pharmacy chains.",
    metrics: ["10M+ invoices", "200+ businesses", "80+ locations", "0 billing failures"],
    stack: ["Node.js", "React", "TypeScript", "PostgreSQL", "Azure Service Bus", "Redis", "Azure Blob", "Grafana"],
    featured: true,
  },
  {
    index: "02",
    name: "Azure Service Bus Pipeline",
    tagline: "Financial-grade message bus — POS payments · Inward orders · Internal jobs",
    type: "Distributed Systems",
    typeColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    problem:
      "Live POS terminals processing payments needed guaranteed delivery. A dropped message meant a lost transaction, inventory mismatch, or billing error. REST calls were brittle under burst load and couldn't survive partial failures.",
    solution:
      "Designed a dedicated pipeline on Azure Service Bus with separate namespaces per concern — POS payments, inward orders, and internal background jobs. Dead-letter queues, automatic retry with exponential backoff, and idempotent consumers ensuring exactly-once processing regardless of delivery count.",
    outcome:
      "Zero transaction loss across all live POS terminals. System handles payment bursts during peak hours without manual intervention or data reconciliation after incidents.",
    metrics: ["Zero transaction loss", "3 dedicated namespaces", "Exactly-once processing", "Self-healing on failure"],
    stack: ["Azure Service Bus", "Azure Functions", "TypeScript", "PostgreSQL", "Dead-letter queues", "Idempotency"],
    featured: true,
  },
  {
    index: "03",
    name: "PillPlus",
    tagline: "B2C medicine delivery — AI search · Real-time tracking · Payments",
    type: "Full-Stack Product",
    typeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    problem:
      "Medicine delivery in India lacked a reliable consumer experience. Customers couldn't search meaningfully across brands and generics, track orders in real time, or trust the payment flow.",
    solution:
      "Built the entire platform end-to-end — Next.js storefront, ElysiaJS/Bun API, AI-powered Typesense search across a large medicine catalog, PayU payment gateway, and BullMQ workers for reliable async order processing with retry and dead-letter handling.",
    outcome:
      "Live B2C platform with sub-200ms medicine search, real-time GPS order tracking, and reliable PayU payment processing — all built and shipped solo.",
    metrics: ["Sub-200ms search", "Real-time GPS tracking", "Reliable payment flow", "Solo end-to-end"],
    stack: ["Next.js", "ElysiaJS", "Bun", "Drizzle ORM", "Supabase", "Typesense", "BullMQ", "PayU"],
    featured: false,
  },
];

const expPoints = [
  {
    bold: "Sole engineer owning the full stack for SmartPharma360",
    rest: " — multi-tenant pharma supply chain SaaS covering manufacturing, distribution, and retail. 4 modules, 10+ apps, 10M+ invoices processed, 200+ businesses in production.",
  },
  {
    bold: "Designed financial-grade Azure Service Bus pipeline",
    rest: " handling POS payment processing, inward order management, and internal background jobs — dead-letter queues, automatic retry, idempotent consumers, zero transaction loss.",
  },
  {
    bold: "Built and shipped PillPlus end-to-end",
    rest: " — B2C medicine delivery with AI-powered Typesense search, PayU payment gateway, and async order processing via BullMQ.",
  },
  {
    bold: "Led micro frontend migration",
    rest: ": React monolith → Module Federation on Turborepo with feature-flag rollout, 60%+ build time reduction, zero-downtime cutover.",
  },
  {
    bold: "Designed end-to-end observability from scratch",
    rest: " across 30+ Azure infrastructure nodes (4 products, 3 environments) — Grafana dashboards, Prometheus alerting, Loki structured logging.",
  },
  {
    bold: "Integrated Anthropic Claude, OpenAI, Google Gemini, and Fireworks AI",
    rest: " across multiple production products — order intelligence, AI-powered search, document processing.",
  },
  {
    bold: "Built and published open-source Typesense MCP Server",
    rest: " — listed on Smithery, enabling AI assistants to directly interact with Typesense search indexes.",
  },
  {
    bold: "Managed complete Azure cloud infrastructure",
    rest: ": 30+ VMs, Blob Storage, Service Bus (multiple namespaces), Functions, Logic Apps, Form Recognizer, Application Insights — across prod, staging, and UAT.",
  },
];

/* ─── PAGE ───────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden font-sans">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-500">
            <span className="text-indigo-400">~/</span>sathwikram
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm text-zinc-400">
            {["work","about","experience","contact"].map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-zinc-100 transition-colors capitalize tracking-wide">{s}</a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available · Remote
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-5%,rgba(99,102,241,0.12),transparent)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <BlurFade delay={0.08} inView>
            <p className="font-mono text-xs text-zinc-600 tracking-[0.2em] uppercase mb-8">
              Hyderabad, India &nbsp;·&nbsp; Open to remote
            </p>
          </BlurFade>

          {/* Massive name — editorial style */}
          <div className="mb-6 overflow-hidden">
            <BlurFade delay={0.15} inView>
              <HyperText
                className="text-[clamp(3rem,9vw,7.5rem)] font-bold tracking-tight leading-none text-zinc-100 block"
                duration={900}
                delay={300}
                startOnView={false}
                animateOnHover
              >
                Sathwik Ram
              </HyperText>
            </BlurFade>
          </div>

          <BlurFade delay={0.25} inView>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <p className="text-xl sm:text-2xl font-light">
                <AnimatedGradientText colorFrom="#6366f1" colorTo="#06b6d4" speed={0.7} className="font-semibold">
                  Senior Software Engineer
                </AnimatedGradientText>
              </p>
              <span className="hidden sm:block h-px flex-1 max-w-xs bg-zinc-800" />
              <span className="text-zinc-500 text-sm font-mono">10+ years</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.35} inView>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-14">
              I build systems that handle millions of transactions and stay up.
              Distributed systems · platform engineering · AI integration —{" "}
              <span className="text-zinc-200">owned end-to-end, without a separate DevOps or QA team.</span>
            </p>
          </BlurFade>

          {/* Stats — animated numbers */}
          <BlurFade delay={0.45} inView>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800/50 rounded-2xl overflow-hidden mb-14 max-w-2xl">
              {stats.map(({ value, suffix, label }, i) => (
                <div key={label} className="bg-zinc-900/80 px-5 py-5 backdrop-blur">
                  <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums leading-none mb-1">
                    <NumberTicker value={value} delay={0.6 + i * 0.1} />{suffix}
                  </div>
                  <div className="text-xs text-zinc-500 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.52} inView>
            <div className="flex flex-wrap gap-3">
              <a href="#work">
                <ShimmerButton className="font-medium text-sm px-6 py-3" background="rgba(79,70,229,1)" shimmerDuration="2.5s">
                  View Selected Work ↓
                </ShimmerButton>
              </a>
              <a href="https://linkedin.com/in/sathwikram" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200">
                LinkedIn ↗
              </a>
              <a href="https://github.com/sathwikram" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200">
                GitHub ↗
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── SELECTED WORK — Case Studies ── */}
      <section id="work" className="py-28 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <div className="flex items-baseline gap-6 mb-16">
              <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase">Selected Work</p>
              <span className="h-px flex-1 bg-zinc-800/80" />
              <span className="text-xs text-zinc-600 font-mono">03 projects</span>
            </div>
          </BlurFade>

          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <BlurFade key={cs.name} inView delay={0.15 + i * 0.12}>
                <MagicCard
                  className="p-0 overflow-hidden"
                  gradientColor={cs.featured ? "rgba(99,102,241,0.07)" : "rgba(99,102,241,0.04)"}
                >
                  {cs.featured && <BorderBeam colorFrom="#6366f1" colorTo="#8b5cf6" duration={5 + i} size={80} />}

                  <div className="p-8 sm:p-10">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                      <div className="flex items-start gap-5">
                        <span className="text-zinc-700 font-mono text-sm mt-1 shrink-0">{cs.index}</span>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-1">{cs.name}</h3>
                          <p className="text-sm text-zinc-500">{cs.tagline}</p>
                        </div>
                      </div>
                      <span className={cn("shrink-0 self-start text-xs px-3 py-1 rounded-full font-medium", cs.typeColor)}>
                        {cs.type}
                      </span>
                    </div>

                    {/* Case study grid: Problem / Solution / Outcome */}
                    <div className="grid sm:grid-cols-3 gap-6 mb-8">
                      <div className="space-y-2">
                        <p className="text-xs font-mono text-zinc-600 tracking-[0.15em] uppercase">The Problem</p>
                        <p className="text-sm text-zinc-400 leading-relaxed">{cs.problem}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-mono text-zinc-600 tracking-[0.15em] uppercase">The Solution</p>
                        <p className="text-sm text-zinc-400 leading-relaxed">{cs.solution}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-mono text-zinc-600 tracking-[0.15em] uppercase">The Outcome</p>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-3">{cs.outcome}</p>
                        {/* Outcome metrics as chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {cs.metrics.map((m) => (
                            <span key={m} className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-6 border-t border-zinc-800/60">
                      {cs.stack.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-400 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN SOURCE ── */}
      <section className="py-24 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <div className="flex items-baseline gap-6 mb-10">
              <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase">Open Source</p>
              <span className="h-px flex-1 bg-zinc-800/80" />
            </div>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <a href="https://github.com/sathwikram/typesense-mcp-server" target="_blank" rel="noopener noreferrer" className="block group">
              <MagicCard className="p-8 sm:p-10" gradientColor="rgba(249,115,22,0.07)">
                <BorderBeam colorFrom="#f97316" colorTo="#6366f1" duration={5} size={80} />
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-orange-300 transition-colors">
                      typesense-mcp-server
                    </h3>
                  </div>
                  <span className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-medium">
                    Published on Smithery ✦
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-5 max-w-2xl">
                  A Model Context Protocol (MCP) server that lets AI assistants directly interact with Typesense search indexes — query, update, and inspect collections through natural language. One of the few published MCP servers for search infrastructure.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "MCP Protocol", "Typesense", "Docker", "Smithery"].map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">{t}</span>
                  ))}
                </div>
              </MagicCard>
            </a>
          </BlurFade>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <div className="flex items-baseline gap-6 mb-12">
              <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase">About</p>
              <span className="h-px flex-1 bg-zinc-800/80" />
            </div>
          </BlurFade>
          <div className="grid sm:grid-cols-2 gap-12 text-zinc-400 leading-relaxed max-w-4xl">
            <BlurFade inView delay={0.2}>
              <div className="space-y-4">
                <p>
                  I&apos;m a Senior Software Engineer based in{" "}
                  <span className="text-zinc-200">Hyderabad, India</span> — 10+ years building production
                  SaaS from the first commit through to infrastructure management. No handoffs, no silos.
                </p>
                <p>
                  At Risurge Technologies, I own the complete engineering stack for a multi-product pharma-tech
                  ecosystem: backend systems, frontend applications, cloud infrastructure, observability, and
                  AI integration — with no separate DevOps, QA, or data team.
                </p>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <div className="space-y-4">
                <p>
                  I specialize in{" "}
                  <span className="text-zinc-200">distributed systems reliability</span>,{" "}
                  <span className="text-zinc-200">platform engineering at scale</span>, and{" "}
                  <span className="text-zinc-200">integrating LLMs into real production workflows</span> —
                  the work that keeps systems up and makes them smarter.
                </p>
                <p>
                  I&apos;m most effective in environments where engineers are trusted to own things end-to-end
                  and technical decisions are made by people who have to live with them.
                </p>
              </div>
            </BlurFade>
          </div>

          {/* Tech strip — single quiet row */}
          <BlurFade inView delay={0.4}>
            <div className="mt-16 overflow-hidden">
              <p className="text-xs font-mono text-zinc-600 tracking-[0.15em] uppercase mb-4">
                Technologies
              </p>
              <Marquee pauseOnHover repeat={3} className="[--duration:50s]">
                {skills.map((tech) => (
                  <span key={tech} className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors cursor-default mx-1.5">
                    {tech}
                  </span>
                ))}
              </Marquee>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <div className="flex items-baseline gap-6 mb-14">
              <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase">Experience</p>
              <span className="h-px flex-1 bg-zinc-800/80" />
            </div>
          </BlurFade>

          {/* Current role */}
          <BlurFade inView delay={0.15}>
            <div className="mb-14">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <h3 className="text-xl font-bold text-zinc-100">Senior Software Engineer</h3>
                <span className="text-indigo-400 font-medium">Risurge Technologies</span>
              </div>
              <div className="flex items-center gap-3 mb-8 text-sm text-zinc-500 font-mono">
                <span>2019 – Present</span>
                <span className="text-zinc-700">·</span>
                <span>Hyderabad, India</span>
                <span className="text-zinc-700">·</span>
                <span className="text-emerald-400">Full-time</span>
              </div>

              <ul className="space-y-3 max-w-3xl">
                {expPoints.map(({ bold, rest }, i) => (
                  <BlurFade key={bold} inView delay={0.2 + i * 0.05}>
                    <li className="flex gap-4 text-sm leading-relaxed text-zinc-400">
                      <span className="text-indigo-500 mt-0.5 shrink-0 text-base">▸</span>
                      <span>
                        <span className="text-zinc-200 font-medium">{bold}</span>
                        {rest}
                      </span>
                    </li>
                  </BlurFade>
                ))}
              </ul>
            </div>
          </BlurFade>

          {/* Earlier roles — condensed */}
          <BlurFade inView delay={0.35}>
            <div className="border-t border-zinc-800/60 pt-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="font-bold text-zinc-300">Full Stack Developer</h3>
                    <span className="text-zinc-500 text-sm font-mono">2015 – 2019</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Pi Datacenters pricing portal, PI KMP knowledge management platform with OnlyOffice,
                    enterprise PM tools, booking systems. Angular, Laravel, PHP, early Node.js.
                  </p>
                </div>
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="font-bold text-zinc-300">B.Tech — Lovely Professional University</h3>
                    <span className="text-zinc-500 text-sm font-mono">2011 – 2015</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Computer Science. Started building web apps and APIs in second year — never really stopped.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <BlurFade inView delay={0.1}>
            <div className="flex items-baseline gap-6 mb-12">
              <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase">Contact</p>
              <span className="h-px flex-1 bg-zinc-800/80" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Building something ambitious?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-2">
              I&apos;m looking for senior remote opportunities with teams in the{" "}
              <span className="text-zinc-200">US, EU, AU, or CA</span> building ambitious products.
            </p>
            <p className="text-zinc-600 text-sm max-w-xl mb-12">
              I&apos;m selective. If there&apos;s a fit, you&apos;ll know quickly.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <div className="flex flex-col gap-5">
              <a href="mailto:sathwikram@outlook.com"
                className="group inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors w-fit">
                <span className="w-8 h-8 rounded-full border border-zinc-700 group-hover:border-zinc-400 flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-mono text-sm tracking-wide">sathwikram@outlook.com</span>
              </a>
              <div className="flex flex-wrap gap-3 mt-1">
                <a href="https://linkedin.com/in/sathwikram" target="_blank" rel="noopener noreferrer">
                  <ShimmerButton className="font-medium text-sm px-6 py-3" background="rgba(79,70,229,1)" shimmerDuration="2.5s">
                    Connect on LinkedIn ↗
                  </ShimmerButton>
                </a>
                <a href="https://github.com/sathwikram" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200">
                  GitHub ↗
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-800/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-700 text-xs font-mono">
          <span>sathwikram.com</span>
          <span>Next.js · MagicUI · Motion · Vercel</span>
        </div>
      </footer>
    </div>
  );
}
