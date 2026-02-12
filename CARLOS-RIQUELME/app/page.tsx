"use client";

import React from "react"

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Newspaper,
  X,
  Youtube,
} from "lucide-react";

/* ─────────────────────────────── ANIMATION VARIANTS ─────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────── REUSABLE COMPONENTS ─────────────────────────── */

function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-container">{children}</div>
    </section>
  );
}

function Chip({
  children,
  variant = "cyan",
}: {
  children: React.ReactNode;
  variant?: "cyan" | "amber" | "neutral";
}) {
  const colors = {
    cyan: "border-cyan/30 text-cyan bg-cyan/10",
    amber: "border-amber/30 text-amber bg-amber/10",
    neutral:
      "border-foreground/10 text-foreground/70 bg-foreground/5",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${colors[variant]}`}
    >
      {children}
    </span>
  );
}

function GlassCard({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-lg border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────── TIMELINE ITEM ─────────────────────────────── */

function TimelineItem({
  year,
  title,
  description,
  chip,
  index,
}: {
  year: string;
  title: string;
  description: string;
  chip: string;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex flex-col gap-4 pb-12 pl-10 md:flex-row md:gap-8 md:pl-0"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      {/* Mobile line dot */}
      <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan bg-background md:hidden">
        <div className="h-2 w-2 rounded-full bg-cyan" />
      </div>
      {/* Mobile line */}
      <div className="absolute bottom-0 left-[11px] top-7 w-px bg-foreground/10 md:hidden" />

      {/* Desktop layout */}
      <div
        className={`hidden md:flex md:w-1/2 ${isEven ? "md:justify-end md:pr-12" : "md:order-2 md:pl-12"}`}
      >
        <GlassCard className="max-w-md p-6">
          <Chip variant="amber">{chip}</Chip>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            {description}
          </p>
        </GlassCard>
      </div>

      {/* Desktop center dot */}
      <div
        className={`hidden md:flex md:absolute md:left-1/2 md:top-6 md:-translate-x-1/2 items-center justify-center`}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan bg-background">
          <div className="h-3 w-3 rounded-full bg-cyan" />
        </div>
      </div>

      <div
        className={`hidden md:flex md:w-1/2 md:items-center ${isEven ? "md:order-2 md:pl-12" : "md:justify-end md:pr-12"}`}
      >
        <span className="text-sm font-medium tracking-widest text-cyan uppercase">
          {year}
        </span>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <span className="text-xs font-medium tracking-widest text-cyan uppercase">
          {year}
        </span>
        <Chip variant="amber">{chip}</Chip>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────── PROJECT CARD ─────────────────────────────── */

const chipVariantMap: Record<string, "cyan" | "amber" | "neutral"> = {
  Design: "neutral",
  Dev: "neutral",
  "AI-Powered": "cyan",
  Live: "amber",
  Community: "amber",
  Bootstrapped: "cyan",
};

function ProjectCard({
  name,
  year,
  status,
  description,
  tech,
  index,
  executionStatus,
}: {
  name: string;
  year: string;
  status: string;
  description: string;
  tech: string[];
  index: number;
  executionStatus?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group"
    >
      <GlassCard className="flex h-full flex-col p-5 transition-colors hover:border-cyan/30">
        <div className="flex flex-wrap items-center gap-2">
          <Chip variant={chipVariantMap[status] ?? "neutral"}>{status}</Chip>
          <span className="text-xs text-foreground/50">{year}</span>
          {executionStatus && (
            <span className="text-xs font-medium text-cyan animate-pulse">
              • {executionStatus}
            </span>
          )}
        </div>
        <h4 className="mt-3 text-base font-semibold tracking-tight text-foreground">
          {name}
        </h4>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-foreground/70">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded bg-foreground/5 px-2 py-0.5 text-[11px] text-foreground/50"
            >
              {t}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ─────────────────────────────── TECH STACK CARD ─────────────────────────────── */

function TechStackCard({
  name,
  useCase,
}: {
  name: string;
  useCase: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-16 cursor-pointer [perspective:600px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      aria-label={`${name}: ${useCase}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped(!flipped);
      }}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex items-center rounded-lg border border-foreground/10 bg-foreground/[0.03] px-4 [backface-visibility:hidden]">
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 flex items-center rounded-lg border border-cyan/20 bg-cyan/5 px-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-xs text-cyan">{useCase}</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────── CTA CARD ─────────────────────────────── */

function CTACard({
  icon,
  title,
  description,
  cta,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ rotateY: -10, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
      whileHover={{
        translateZ: 20,
        transition: { duration: 0.3 },
      }}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
    >
      <GlassCard className="flex h-full flex-col p-6 transition-colors hover:border-cyan/30">
        <span className="text-3xl" role="img" aria-hidden="true">
          {icon}
        </span>
        <h4 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
          {description}
        </p>
        <button
          type="button"
          className="mt-5 flex items-center gap-1 text-sm font-medium text-cyan transition-colors hover:text-cyan/80"
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </button>
      </GlassCard>
    </motion.div>
  );
}

/* ─────────────────────────────── DATA ─────────────────────────────── */

const NAV_LINKS = [
  { label: "Recorrido", href: "#recorrido" },
  { label: "La Cancha", href: "#la-cancha" },
  { label: "Stack Tech", href: "#stack" },
  { label: "Ship Fast", href: "#ship-fast" },
  { label: "Contacto", href: "#contacto" },
];

const TIMELINE = [
  {
    year: "Inicio",
    title: "El MBA de la calle",
    description:
      "A los 3 años vendía con mi padre en Santiago. Aprendí trabajo duro, resiliencia y el arte de vender para sobrevivir.",
    chip: "Santiago, Chile",
  },
  {
    year: "Revelación",
    title: "El sistema y la libertad",
    description:
      'Entendí temprano que jugar "correcto" no siempre significa ganar. Empecé a buscar modelos mentales, finanzas, y construcción de valor desde cero. Chile, uno de los países más desiguales del mundo, me enseñó que las reglas del juego están escritas por otros.',
    chip: "Filosofía Kiyosaki y Tim Ferris",
  },
  {
    year: "La cancha",
    title: "Construir > opinar",
    description:
      "Sin títulos rimbombantes, pero con entregables: nodos de valor, productos vivos, y comunidades activas. La obsesión no fue obtener validación académica, sino validación de mercado.",
    chip: "Bootstrapping",
  },
  {
    year: "Hoy",
    title: "Arquitectura de ecosistemas",
    description:
      "Pienso en sistemas completos: producto, distribución, automatización, comunidad y narrativa. Internet + IA como motor para multiplicar capacidad, no para reemplazar humanidad.",
    chip: "IA + Internet",
  },
];

const PROJECTS = [
  {
    name: "Pixelbile",
    year: "2014",
    status: "Design",
    description: "Diseño responsive en HTML5 desde cero, pensado dispositivo por dispositivo.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    name: "Developbile",
    year: "2015",
    status: "Dev",
    description:
      "Infraestructura y desarrollo de alto nivel para productos reales.",
    tech: ["Node.js", "Cloud Infrastructure"],
  },
  {
    name: "OnePageCard",
    year: "2014",
    status: "Bootstrapped",
    description: "Presencia digital en una sola página, sin humo.",
    tech: ["HTML5", "Django by Python"],
  },
  {
    name: "Tus Fondas App",
    year: "2015",
    status: "Live",
    description: "El primer directorio de Fondas en Chile.",
    tech: ["Ionic Framework", "Google Maps API"],
  },
  {
    name: "Kulko App",
    year: "2020",
    status: "Live",
    description:
      "Micro e-commerce que redirecciona ventas por WhatsApp.",
    tech: ["Next.js", "WhatsApp Business API", "Symphony PHP"],
  },
  {
    name: "Perceivo AI Agency",
    year: "2024",
    status: "AI-Powered",
    description:
      "Orquestación de agentes y automatización inteligente.",
    tech: ["LangChain", "n8n", "OpenAI SDK", "Vercel AI SDK"],
  },
  {
    name: "Autonoma AI",
    year: "2025",
    status: "AI-Powered",
    description:
      "Automatización inteligente de procesos empresariales.",
    tech: ["Python", "LangChain", "Claude API", "ChatKit"],
    executionStatus: "en ejecución",
  },
  {
    name: "eCommy AI",
    year: "2025",
    status: "AI-Powered",
    description: "El futuro del personal shopper con IA.",
    tech: ["OpenAI GPT-4", "Gemini", "RAG", "Vercel AI SDK"],
    executionStatus: "en ejecución",
  },
  {
    name: "Protolylab",
    year: "2017\u20132026",
    status: "Live",
    description:
      "La evolución de Pixelbile con Developbile: laboratorio de productos.",
    tech: ["Next.js", "shadcn/ui"],
    executionStatus: "en ejecución",
  },
  {
    name: "Empowered Night",
    year: "2015",
    status: "Community",
    description:
      "El punto de encuentro de la resistencia creativa y makers.",
    tech: ["Community building", "IRL events"],
  },
];

const TECH_STACK: { category: string; items: { name: string; useCase: string }[] }[] = [
  {
    category: "Frontend & Design",
    items: [
      { name: "Next.js 16", useCase: "Protolylab, OnePageCard, todas las apps" },
      { name: "React 19", useCase: "UI reactiva en cada producto" },
      { name: "Tailwind CSS", useCase: "Estilos rápidos y consistentes" },
      { name: "shadcn/ui", useCase: "Componentes accesibles y elegantes" },
      { name: "Framer Motion", useCase: "Animaciones de esta página" },
      { name: "v0 by Vercel", useCase: "Prototipado ultra rápido" },
    ],
  },
  {
    category: "Backend & Infrastructure",
    items: [
      { name: "Node.js", useCase: "APIs, microservicios, tooling" },
      { name: "Python", useCase: "Agentes IA, scraping, data" },
      { name: "Vercel SDK", useCase: "Deploy instantáneo" },
      { name: "Vercel / Netlify / DO", useCase: "Hosting multi-cloud" },
      { name: "Supabase", useCase: "Auth + DB en tiempo real" },
      { name: "Typescript", useCase: "Tipado estricto en todo el stack" },

    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "LangChain", useCase: "Orquestación de agentes" },
      { name: "n8n", useCase: "Workflows de automatización" },
      { name: "OpenAI SDK", useCase: "GPT en producción" },
      { name: "ChatKit by OpenAI", useCase: "Interfaces conversacionales" },
      { name: "Vercel AI SDK", useCase: "Streaming y tool calling" },
      { name: "Embeddings", useCase: "Incrustación de datos" },
      { name: "RAG", useCase: "Recuperación aumentada contextual" },
    ],
  },
  {
    category: "LLMs de Frontera",
    items: [
      { name: "Claude 4.6 Sonnet", useCase: "Código, análisis profundo" },
      { name: "Gemini 3.0 Pro", useCase: "Multimodal, contexto largo" },
      { name: "GPT-5.2", useCase: "Razonamiento avanzado" },
    ],
  },
  {
    category: "E-commerce & Tools",
    items: [
      { name: "Medusa JS", useCase: "eCommy, headless commerce" },
      { name: "WhatsApp Business API", useCase: "Kulko App, ventas directas" },
      { name: "Stripe", useCase: "Pagos sin fricción" },
      { name: "Meta Ads API", useCase: "Crecimiento orgánico + paid" },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "GitHub", useCase: "Versionamiento de todo" },
      { name: "Notion", useCase: "Documentación y ops" },
      { name: "Perplexity AI", useCase: "Research acelerado" },
      { name: "Antigravity", useCase: "Herramientas internas" },
      { name: "Windsurf", useCase: "Desarrollo AI-first" },
      { name: "Replit", useCase: "Prototipos rápidos" },
      { name: "Claude Code", useCase: "Experto en grandes bases de código" },
      { name: "GPT 5.3 Codex", useCase: "Instrucciones a código limpio y sin errores" },
    ],
  },
];

/* ─────────────────────────────── NAVBAR ─────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b border-foreground/10 bg-background/80 backdrop-blur-lg"
        : "bg-transparent"
        }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-foreground md:text-base"
        >
          Builder<span className="text-cyan">Latino</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#ship-fast"
            className="rounded-lg bg-cyan px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Aplicar a Ship Fast
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-foreground/10 bg-background/95 px-5 pb-6 pt-2 backdrop-blur-lg md:hidden"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-base text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#ship-fast"
            className="mt-3 block rounded-lg bg-cyan py-3 text-center text-sm font-medium text-background"
            onClick={() => setMobileOpen(false)}
          >
            Aplicar a Ship Fast
          </a>
        </motion.div>
      )}
    </nav>
  );
}

/* ─────────────────────────────── HERO ─────────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center px-5 pt-20">
      <div className="mx-auto flex max-w-container flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Mobile profile photo - appears after title area on small screens */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-6 flex items-center gap-5 lg:hidden"
          >
            <div className="relative h-20 w-20 shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan/40 to-amber/30 blur-sm" />
              <img
                src="/profile.jpg"
                alt="Foto de perfil"
                className="relative h-20 w-20 rounded-full border-2 border-cyan/30 object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/90">Builder Latino</p>
              <p className="text-xs text-foreground/50">Santiago, Chile</p>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            De vendedor ambulante a arquitecto de{" "}
            <span className="text-cyan">ecosistemas</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg"
          >
            {
              'Nac\u00ed en Santiago de Chile, lejos de Silicon Valley, en un pa\u00eds donde la cancha suele venir inclinada. Mi primer "MBA" no fue un diploma: fue la calle, a los 3 a\u00f1os, vendiendo junto a mi padre y aprendiendo a sostener la mirada, a insistir, y a convertir "no" en supervivencia. Hoy construyo productos y sistemas de innovaci\u00f3n con bootstrapping real: sin capital externo, con recursividad, colaboraci\u00f3n y c\u00f3digo con mis amigos los Devs.'
            }
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#recorrido"
              className="inline-flex h-12 items-center rounded-lg bg-cyan px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Ver el recorrido
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex h-12 items-center rounded-lg border border-foreground/20 bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              Trabajar conmigo
            </a>
          </motion.div>
        </motion.div>

        {/* Right column: Profile photo (desktop) + Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-row flex-wrap items-center gap-3 lg:flex-col lg:items-center"
        >
          {/* Desktop profile photo */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="hidden lg:flex lg:flex-col lg:items-center lg:mb-6"
          >
            <div className="relative h-36 w-36">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-cyan/40 to-amber/30 blur-md" />
              <img
                src="/profile.jpg"
                alt="Foto de perfil"
                className="relative h-36 w-36 rounded-full border-2 border-cyan/30 object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-foreground/90">Builder Latino</p>
            <p className="text-xs text-foreground/50">Santiago, Chile</p>
          </motion.div>

          {[
            { label: "+12 a\u00f1os en tech e innovaci\u00f3n", icon: "amber" as const },
            { label: "+9 incubaciones", icon: "cyan" as const },
            { label: "Bootstrapping puro", icon: "amber" as const },
            { label: "IA + Internet como igualador", icon: "cyan" as const },
          ].map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} custom={i + 4}>
              <Chip variant={stat.icon}>{stat.label}</Chip>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── DNA SECTION ─────────────────────────────── */

function DNASection() {
  return (
    <SectionWrapper>
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeIn}
          className="text-base leading-relaxed text-foreground/70 md:text-lg"
        >
          {
            "No ense\u00f1o desde un aula. Construyo desde la experiencia empírica. Crec\u00ed entendiendo algo inc\u00f3modo: el sistema rara vez est\u00e1 dise\u00f1ado para hacerte libre; est\u00e1 dise\u00f1ado para hacerte funcional. Esa revelaci\u00f3n no me volvi\u00f3 c\u00ednico, me volvi\u00f3 intencional: si la estructura no ayuda, entonces se dise\u00f1a una nueva."
          }
        </motion.p>

        <motion.p
          variants={fadeIn}
          className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg"
        >
          {
            'Creo en una mentalidad autodidacta, aprender por \u00d3smosis y en la tecnolog\u00eda como palanca de movilidad. La innovaci\u00f3n no es "ideas lindas", es ejecuci\u00f3n bajo restricciones.'
          }
        </motion.p>

        <motion.blockquote
          variants={fadeUp}
          custom={0}
          className="mt-12 border-l-2 border-cyan py-2 pl-6 text-left"
        >
          <p className="text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl lg:text-3xl">
            {'"Internet es el Motor de generaci\u00f3n de Riqueza m\u00e1s grande que jam\u00e1s haya existido."'}
          </p>
        </motion.blockquote>
      </motion.div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── RECORRIDO (TIMELINE) ─────────────────────────── */

function RecorridoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <SectionWrapper id="recorrido">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <Chip variant="cyan">Recorrido</Chip>
        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          El camino de un builder
        </h2>
      </motion.div>

      <div ref={containerRef} className="relative mt-16">
        {/* Desktop center line */}
        <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
          <motion.div
            className="h-full w-px bg-foreground/10 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {TIMELINE.map((item, i) => (
          <TimelineItem key={item.title} {...item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── LA CANCHA (ROTATE 1) ─────────────────────────── */

function LaCanchaSection() {
  return (
    <SectionWrapper id="la-cancha">
      <motion.div
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        className="hidden md:block"
      >
        <SectionHeader
          chip="La Cancha"
          title="Lo construido" subtitle={""}        // subtitle="Esto no es un curso. Es el blueprint de un constructor que ya lo hizo."
        />
      </motion.div>

      {/* Mobile: no 3D rotation, just fade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:hidden"
      >
        <SectionHeader
          chip="La Cancha"
          title="Lo construido" subtitle={""}        // subtitle="Esto no es un curso. Es el blueprint de un constructor que ya lo hizo."
        />
      </motion.div>

      <motion.div
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} {...p} index={i} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function SectionHeader({
  chip,
  title,
  subtitle,
}: {
  chip: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <Chip variant="cyan">{chip}</Chip>
      <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base text-foreground/70 md:text-lg">{subtitle}</p>
    </div>
  );
}

/* ─────────────────────────────── STACK TECH (ROTATE 2) ─────────────────────────── */

function StackSection() {
  return (
    <SectionWrapper id="stack">
      <motion.div
        initial={{ rotateY: 15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        className="hidden md:block"
      >
        <SectionHeader
          chip="Stack Tech"
          title="Construyendo con las herramientas de frontera"
          subtitle="Cada herramienta elegida por su capacidad de ejecución, no por hype."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:hidden"
      >
        <SectionHeader
          chip="Stack Tech"
          title="Construyendo con herramientas de frontera"
          subtitle="Cada herramienta elegida por su capacidad de ejecución, no por hype."
        />
      </motion.div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TECH_STACK.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            variants={fadeUp}
            custom={catIdx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <GlassCard className="p-5">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber">
                {cat.category}
              </h3>
              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <TechStackCard
                    key={item.name}
                    name={item.name}
                    useCase={item.useCase}
                  />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── SHIP FAST ─────────────────────────────── */

function ShipFastSection() {
  return (
    <SectionWrapper id="ship-fast">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Left */}
        <motion.div
          className="flex-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <Chip variant="amber">Ship Fast</Chip>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Ship Fast: Edición Latina (Orlando)
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-3 text-base text-foreground/70 md:text-lg"
          >
            Importamos el mindset de innovación de Silicon Valley y lo adaptamos a la realidad Latina
          </motion.p>

          <motion.ul
            className="mt-8 flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Sprint intensivo de 54 horas",
              "Problema claro, cliente real",
              "Prototipo rápido con Vibe Coding",
              "Demo final con feedback",
              "Metodología Silicon Valley adaptada a Latam",
            ].map((item, i) => (
              <motion.li
                key={item}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/20">
                  <Check className="h-3 w-3 text-cyan" />
                </span>
                <span className="text-sm text-foreground/80 md:text-base">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          className="w-full lg:max-w-md"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <GlassCard className="p-6 md:p-8">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Aplica a Ship Fast
            </h3>
            <p className="mt-1 text-sm text-foreground/60">
              Cuéntanos qué estás construyendo.
            </p>
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label
                  htmlFor="sf-name"
                  className="mb-1.5 block text-sm font-medium text-foreground/80"
                >
                  Nombre
                </label>
                <input
                  id="sf-name"
                  type="text"
                  placeholder="Tu nombre"
                  className="h-12 w-full rounded-lg border border-foreground/10 bg-foreground/[0.03] px-4 text-base text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label
                  htmlFor="sf-email"
                  className="mb-1.5 block text-sm font-medium text-foreground/80"
                >
                  Email
                </label>
                <input
                  id="sf-email"
                  type="email"
                  placeholder="tu@email.com"
                  className="h-12 w-full rounded-lg border border-foreground/10 bg-foreground/[0.03] px-4 text-base text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label
                  htmlFor="sf-building"
                  className="mb-1.5 block text-sm font-medium text-foreground/80"
                >
                  {"¿Qué estás construyendo?"}
                </label>
                <textarea
                  id="sf-building"
                  rows={4}
                  placeholder="Describe tu proyecto o idea..."
                  className="w-full rounded-lg border border-foreground/10 bg-foreground/[0.03] p-4 text-base text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 resize-none"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-lg bg-cyan text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Aplicar a Ship Fast
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── FOOTER CTA (ROTATE 3) ─────────────────────────── */

function FooterCTASection() {
  return (
    <SectionWrapper id="contacto">
      {/* Desktop: 3D rotate header */}
      <motion.div
        initial={{ rotateX: -10, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ perspective: 800, transformStyle: "preserve-3d" }}
        className="hidden text-center md:block"
      >
        <Chip variant="amber">Trabajemos</Chip>
        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          Si quieres construir algo real, empieza por aquí
        </h2>
      </motion.div>

      {/* Mobile: simple fade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center md:hidden"
      >
        <Chip variant="amber">Trabajemos</Chip>
        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground">
          Si quieres construir algo real, empieza por aquí
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <CTACard
          icon={<span aria-hidden="true" className="text-amber">{"*"}</span>}
          title="Para Emprendedores"
          description="Validación, producto, y go-to-market sin fantasías."
          cta="Agendar consultoría"
          index={0}
        />
        <CTACard
          icon={<span aria-hidden="true" className="text-cyan">{"&"}</span>}
          title="Para Equipos/Empresas"
          description="Sistemas de automatización e IA aplicados a operación real."
          cta="Ver casos de éxito"
          index={1}
        />
        <CTACard
          icon={<span aria-hidden="true" className="text-amber">{">"}</span>}
          title="Para Builders"
          description="Ejecución, diseño de producto, y disciplina de shipping."
          cta="Unirme a la comunidad"
          index={2}
        />
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── FOOTER ─────────────────────────────── */

function Footer() {
  const socials = [
    { label: "LinkedIn", icon: Linkedin, href: "#" },
    { label: "YouTube", icon: Youtube, href: "#" },
    { label: "Newsletter", icon: Newspaper, href: "#" },
    { label: "GitHub", icon: Github, href: "#" },
    { label: "Contacto", icon: Mail, href: "#" },
  ];

  return (
    <footer className="border-t border-foreground/10 px-5 py-12">
      <div className="mx-auto max-w-container text-center">
        <p className="text-sm leading-relaxed text-foreground/60">
          {"Santiago \u2194 internet. Construyendo con código, comunidad y obsesión por aprender."}
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground/50 transition-colors hover:bg-foreground/5 hover:text-foreground"
              aria-label={s.label}
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-foreground/40">
          {"© 2026 · Hecho con Next.js, café y obsesión"}
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────── PAGE ─────────────────────────────── */

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DNASection />
      <RecorridoSection />
      <LaCanchaSection />
      <StackSection />
      <ShipFastSection />
      <FooterCTASection />
      <Footer />
    </main>
  );
}
