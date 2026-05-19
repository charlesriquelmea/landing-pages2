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
import { Button } from "@/components/ui/button";
import OrderForm from "@/components/order-form";
import { useLanguage } from "@/lib/i18n";
import LanguageSwitch from "@/components/language-switch";

/* ─────────────────────────────── ANIMATION VARIANTS ─────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
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
  href,
}: {
  name: string;
  year: string;
  status: string;
  description: string;
  tech: string[];
  index: number;
  executionStatus?: string;
  href?: string;
}) {
  const { t } = useLanguage();
  return (
    <motion.div variants={fadeUp} custom={index} className="group h-full">
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
        <div className="flex items-center justify-between">
          <h4 className="mt-3 text-base font-semibold tracking-tight text-foreground">
            {name}
          </h4>
        </div>
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

        {href && (
          <div className="mt-6 pt-4 border-t border-foreground/10">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                className="w-full bg-cyan/10 text-cyan hover:bg-cyan hover:text-background border border-cyan/20 group-hover:border-cyan/50 transition-all font-medium"
                size="sm"
                variant="outline"
              >
                {t('projects.verProyecto')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        )}
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
        transition={{ duration: 0.4, ease: "easeOut" as const }}
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
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  index: number;
  href?: string;
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
        {href ? (
          <a
            href={href}
            className="mt-5 flex items-center gap-1 text-sm font-medium text-cyan transition-colors hover:text-cyan/80"
          >
            {cta} <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <button
            type="button"
            className="mt-5 flex items-center gap-1 text-sm font-medium text-cyan transition-colors hover:text-cyan/80"
          >
            {cta} <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </GlassCard>
    </motion.div>
  );
}

/* ─────────────────────────────── DATA ─────────────────────────────── */

function getNavLinks(t: (k: string) => any) {
  return [
    { label: t('nav.recorrido'), href: "#recorrido" },
    { label: t('nav.laCancha'), href: "#la-cancha" },
    { label: t('nav.stackTech'), href: "#stack" },
    { label: t('nav.shipFast'), href: "#ship-fast" },
    { label: t('nav.contacto'), href: "#contacto" },
  ];
}

function getTimeline(t: (k: string) => any) {
  const items = t('timeline.items') as any[]
  return items.map((item: any, i: number) => ({
    year: item.year,
    title: item.title,
    description: item.description,
    chip: item.chip,
  }))
}

const PROJECT_BASE = [
  { name: "Pixelbile", year: "2014", status: "Design", tech: ["HTML5", "CSS3", "Responsive Design"] },
  { name: "Developbile", year: "2015", status: "Dev", tech: ["Node.js", "Cloud Infrastructure"] },
  { name: "OnePageCard", year: "2014", status: "Bootstrapped", tech: ["HTML5", "Django by Python"] },
  { name: "Tus Fondas App", year: "2015", status: "Live", tech: ["Ionic Framework", "Google Maps API"] },
  { name: "Kulko App", year: "2020", status: "Live", tech: ["Next.js", "WhatsApp Business API", "Symphony PHP"] },
  { name: "Perceivo AI Agency", year: "2024", status: "AI-Powered", tech: ["LangChain", "n8n", "OpenAI SDK", "Vercel AI SDK"] },
  { name: "Autonoma AI", year: "2025", status: "AI-Powered", tech: ["Python", "LangChain", "Claude API", "ChatKit"], executionStatus: "en ejecución", href: "https://autonoma.ai.protolylat.com/" },
  { name: "eCommy AI", year: "2025", status: "AI-Powered", tech: ["OpenAI GPT-4", "Gemini", "RAG", "Vercel AI SDK"], executionStatus: "en ejecución", href: "https://ecommy.ai.protolylat.com/pt" },
  { name: "Protolylat", year: "2017-2026", status: "Live", tech: ["Next.js", "shadcn/ui"], executionStatus: "en ejecución", href: "https://www.protolylat.com/en" },
  { name: "Empowered Night", year: "2015", status: "Community", tech: ["Community building", "IRL events"] },
]

function getProjects(t: (k: string) => any) {
  const items = t('projects.items') as any[]
  return PROJECT_BASE.map((base, i) => ({
    ...base,
    description: items[i]?.description ?? base.name,
    executionStatus: base.executionStatus ? t('projects.enEjecucion') : undefined,
  }))
}

function getTechStack(t: (k: string) => any) {
  return t('stack.categories') as any[]
}

/* ─────────────────────────────── NAVBAR ─────────────────────────────── */

function Navbar() {
  const { t, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = getNavLinks(t);

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
      aria-label={t('nav.navegacion')}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-foreground md:text-base"
        >
          {t('nav.builderLatino')}<span className="text-cyan">{t('nav.builderSuffix')}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l: any) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitch />
          <a
            href="#contact-form"
            className="rounded-lg bg-cyan px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t('nav.aplicarShipFast')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t('nav.cerrarMenu') : t('nav.abrirMenu')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-foreground/10 bg-background/95 px-5 pb-6 pt-2 backdrop-blur-lg md:hidden"
        >
          {navLinks.map((l: any) => (
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
            href="#contact-form"
            className="mt-3 block rounded-lg bg-cyan py-3 text-center text-sm font-medium text-background"
            onClick={() => setMobileOpen(false)}
          >
            {t('nav.aplicarShipFast')}
          </a>
        </motion.div>
      )}
    </nav>
  );
}

/* ─────────────────────────────── HERO ─────────────────────────────── */

function Hero() {
  const { t } = useLanguage();
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
                src="/profilePicture.png"
                alt={t('hero.fotoPerfil')}
                className="relative h-20 w-20 rounded-full border-2 border-cyan/30 object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/90">{t('hero.builderLatino')}</p>
              <p className="text-xs text-foreground/50">{t('hero.santiago')}</p>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t('hero.title1')}{" "}
            <span className="text-cyan">{t('hero.title2')}</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg"
          >
            {t('hero.description')}
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
              {t('hero.verRecorrido')}
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex h-12 items-center rounded-lg border border-foreground/20 bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              {t('hero.trabajarConmigo')}
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
                src="/profilePicture.png"
                alt={t('hero.fotoPerfil')}
                className="relative h-36 w-36 rounded-full border-2 border-cyan/30 object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-foreground/90">{t('hero.builderLatino')}</p>
            <p className="text-xs text-foreground/50">{t('hero.santiago')}</p>
          </motion.div>

          {[
            { label: t('hero.stat1'), icon: "amber" as const },
            { label: t('hero.stat2'), icon: "cyan" as const },
            { label: t('hero.stat3'), icon: "amber" as const },
            { label: t('hero.stat4'), icon: "cyan" as const },
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
  const { t } = useLanguage();
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
          {t('dna.p1')}
        </motion.p>

        <motion.p
          variants={fadeIn}
          className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg"
        >
          {t('dna.p2')}
        </motion.p>

        <motion.blockquote
          variants={fadeUp}
          custom={0}
          className="mt-12 border-l-2 border-cyan py-2 pl-6 text-left"
        >
          <p className="text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl lg:text-3xl">
            {t('dna.quote')}
          </p>
        </motion.blockquote>
      </motion.div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── RECORRIDO (TIMELINE) ─────────────────────────── */

function RecorridoSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const timeline = getTimeline(t);

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
        <Chip variant="cyan">{t('timeline.chip')}</Chip>
        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          {t('timeline.title')}
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

        {timeline.map((item: any, i: number) => (
          <TimelineItem key={item.title} {...item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── LA CANCHA (ROTATE 1) ─────────────────────────── */

function LaCanchaSection() {
  const { t } = useLanguage();
  const projects = getProjects(t);
  return (
    <SectionWrapper id="la-cancha">
      <motion.div
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        className="hidden md:block"
      >
        <SectionHeader
          chip={t('projects.chip')}
          title={t('projects.title')} subtitle={""}
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
          chip={t('projects.chip')}
          title={t('projects.title')} subtitle={""}
        />
      </motion.div>

      <motion.div
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((p: any, i: number) => (
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
  const { t } = useLanguage();
  const techStack = getTechStack(t);
  return (
    <SectionWrapper id="stack">
      <motion.div
        initial={{ rotateY: 15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        className="hidden md:block"
      >
        <SectionHeader
          chip={t('stack.chip')}
          title={t('stack.title')}
          subtitle={t('stack.subtitle')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="md:hidden"
      >
        <SectionHeader
          chip={t('stack.chip')}
          title={t('stack.title')}
          subtitle={t('stack.subtitle')}
        />
      </motion.div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((cat: any, catIdx: number) => (
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
                {cat.items.map((item: any) => (
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
  const { t } = useLanguage();
  const shipItems = t('shipFast.items') as string[]
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
            <Chip variant="amber">{t('shipFast.chip')}</Chip>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            {t('shipFast.title')}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-3 text-base text-foreground/70 md:text-lg"
          >
            {t('shipFast.description')}
          </motion.p>

          <motion.ul
            className="mt-8 flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {shipItems.map((item: string, i: number) => (
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
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <GlassCard className="p-6 md:p-8">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {t('shipFast.formTitle')}
            </h3>
            <p className="mt-1 text-sm text-foreground/60">
              {t('shipFast.formDescription')}
            </p>
            {/* Formulario Inline Reemplazado por CTA al Formulario Principal */}
            <div className="mt-6 flex flex-col gap-4">
              <p className="text-base text-foreground/80 leading-relaxed">
                {t('shipFast.formText')}
              </p>
              <a
                href="#contact-form"
                className="flex h-12 w-full items-center justify-center rounded-lg bg-cyan text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {t('shipFast.formButton')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── FOOTER CTA (ROTATE 3) ─────────────────────────── */

function FooterCTASection() {
  const { t } = useLanguage();
  const cards = t('footerCta.cards') as any[]
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
        <Chip variant="amber">{t('footerCta.chip')}</Chip>
        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          {t('footerCta.title')}
        </h2>
      </motion.div>

      {/* Mobile: simple fade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="text-center md:hidden"
      >
        <Chip variant="amber">{t('footerCta.chip')}</Chip>
        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground">
          {t('footerCta.title')}
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <CTACard
          icon={<span aria-hidden="true" className="text-amber">{"*"}</span>}
          title={cards[0]?.title ?? "Para Emprendedores"}
          description={cards[0]?.description ?? ""}
          cta={cards[0]?.cta ?? ""}
          href="#contact-form"
          index={0}
        />
        <CTACard
          icon={<span aria-hidden="true" className="text-cyan">{"&"}</span>}
          title={cards[1]?.title ?? "Para Equipos/Empresas"}
          description={cards[1]?.description ?? ""}
          cta={cards[1]?.cta ?? ""}
          index={1}
        />
        <CTACard
          icon={<span aria-hidden="true" className="text-amber">{">"}</span>}
          title={cards[2]?.title ?? "Para Builders"}
          description={cards[2]?.description ?? ""}
          cta={cards[2]?.cta ?? ""}
          index={2}
        />
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────── FOOTER ─────────────────────────────── */

function Footer() {
  const { t } = useLanguage();
  const socials = [
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/carlos-riquelme-acosta-30654870" },
    { label: "YouTube", icon: Youtube, href: "#" },
    { label: "Newsletter", icon: Newspaper, href: "#" },
    { label: "GitHub", icon: Github, href: "#" },
    { label: "Contacto", icon: Mail, href: "#" },
  ];

  return (
    <footer className="border-t border-foreground/10 px-5 py-12">
      <div className="mx-auto max-w-container text-center">
        <p className="text-sm leading-relaxed text-foreground/60">
          {t('footer.text')}
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
          {t('footer.credit')}
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
      <OrderForm />
      <Footer />
    </main>
  );
}
