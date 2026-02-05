"use client"


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    ShoppingBag,
    Megaphone,
    Briefcase,
    Calculator,
    TrendingUp,
    CheckCircle2,
    ArrowRight,
    ChevronLeft,
    Mail,
    User,
    Phone,
    Target
} from 'lucide-react';

// --- CONFIGURACIÓN DE DATOS ---

const WHATSAPP_NUMBER = "5511999999999"; // Reemplaza con tu número real

const projects = [
    {
        title: "Landing Imobiliária High-Ticket",
        tag: "Framer Motion",
        metric: "Leads +120%",
        icon: Building2,
        gradient: "from-emerald-500/20 to-cyan-500/20",
    },
    {
        title: "Sites de Vendas",
        tag: "Next.js + Conversão",
        metric: "Vendas +85%",
        icon: ShoppingBag,
        gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
        title: "Pages promocionais",
        tag: "Performance",
        metric: "Engajamento +200%",
        icon: Megaphone,
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Portfolios corporativos",
        tag: "Credibilidade",
        metric: "Consultas +150%",
        icon: Briefcase,
        gradient: "from-orange-500/20 to-red-500/20",
    },
];

// --- COMPONENTES ---

export const ROISection = () => {
    return (
        <section className="py-24 bg-black text-white px-4 relative overflow-hidden border-t border-zinc-900">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                    Invista R$ 297 uma vez. <br /> Economize R$ 5.000+ em cada projeto.
                </h2>
                <p className="text-zinc-400 text-center mb-16 text-lg max-w-2xl mx-auto">
                    O mercado cobra caro pelo que você pode fazer sozinho com o stack certo.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Bloque 1: Mercado */}
                    <div className="group bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] hover:border-zinc-700 transition-colors">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <div className="p-2 bg-zinc-800 rounded-lg text-emerald-500"><Calculator size={20} /></div>
                            Custos de Mercado
                        </h3>
                        <ul className="space-y-5 text-sm">
                            <li className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
                                <span className="text-zinc-500">Landing Page Premium</span>
                                <span className="text-white font-medium">R$ 4.500</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
                                <span className="text-zinc-500">Site Institucional</span>
                                <span className="text-white font-medium">R$ 7.000</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
                                <span className="text-zinc-500">Site Next.js Custom</span>
                                <span className="text-white font-medium">R$ 15.000</span>
                            </li>
                        </ul>
                        <p className="mt-8 text-[11px] text-emerald-500 uppercase tracking-widest font-bold opacity-70">Média por projeto: R$ 5.000</p>
                    </div>

                    {/* Bloque 2: ROI Destacado */}
                    <div className="bg-zinc-900 border border-emerald-500/30 p-10 rounded-[2.5rem] relative overflow-hidden shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)] transform md:scale-105">
                        <div className="absolute top-0 right-0 p-4">
                            <TrendingUp className="text-emerald-500 opacity-20" size={80} />
                        </div>
                        <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-bold mb-6 tracking-widest uppercase">
                            ROI Comprovado
                        </div>
                        <h3 className="text-5xl font-bold mb-2">234%</h3>
                        <p className="text-zinc-400 text-sm mb-10">Retorno líquido no 1º projeto.</p>

                        <div className="space-y-4 pt-6 border-t border-zinc-800">
                            <div className="flex justify-between text-xs text-zinc-500">
                                <span>Investimento Vibe Coding</span>
                                <span>R$ 297</span>
                            </div>
                            <div className="flex justify-between text-emerald-500 font-bold text-xl pt-2">
                                <span>Retorno Real</span>
                                <span>R$ 3.503</span>
                            </div>
                        </div>
                    </div>

                    {/* Bloque 3: Autonomia */}
                    <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem]">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <div className="p-2 bg-zinc-800 rounded-lg text-emerald-500"><Target size={20} /></div>
                            Autonomia Total
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                                <p className="text-sm text-zinc-300">Crie quantos projetos desejar sem pagar taxas extras ou agências.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                                <p className="text-sm text-zinc-300">Domine o stack que as Big Techs usam: Next.js + Framer Motion.</p>
                            </div>
                            <div className="mt-8 bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-2xl">
                                <p className="text-xs text-center text-zinc-400">Cenário em 1 ano (3 projetos):</p>
                                <p className="text-lg text-center font-bold text-white mt-1">R$ 15.000 em economia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default function App() {
    return (
        <div className="min-h-screen bg-black font-sans selection:bg-emerald-500 selection:text-black">
            {/* Header Aclimatado */}
            <header className="p-6 text-center border-b border-zinc-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.3em]">
                    Valor de mercado: <span className="line-through opacity-50">R$ 2.500 e R$ 10.000</span> <span className="text-emerald-500 font-bold ml-2">entre R$ 2.500 e R$ 10.000</span>
                </p>
            </header>

            <main>
                {/* Sección de Proyectos (Actualizada) */}
                <section className="py-24 max-w-6xl mx-auto px-4">
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            O que construímos <span className="text-zinc-600">(e o que você vai construir)</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                            Não é teoria. É o mesmo stack tecnológico que usamos para clientes corporativos.
                        </p>
                        <p className="mt-4 text-sm text-zinc-500 italic flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            Solo Landing pages / Sites. Não se ensina a criar Apps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className={`p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 bg-gradient-to-br ${project.gradient}`}
                            >
                                <div className="p-3 bg-black/40 rounded-2xl w-fit mb-6">
                                    <project.icon className="text-emerald-400" size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">{project.title}</h3>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest">{project.tag}</span>
                                    <span className="text-sm font-bold text-emerald-500">{project.metric}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Sección de Diferenciación Tecnológica */}
                <section className="py-24 bg-zinc-950 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Por que construtores tradicionais não entregam resultados Enterprise</h2>
                        <p className="text-zinc-400 text-lg mb-12">
                            Plataformas como Wix, Wordpress, Hostinger, Base44 e Hostgator oferecem soluções rápidas mas não são construídas sobre Next.js nem Framer Motion. Isso limita rendimento, personalização e experiência de usuário em projetos Enterprise. Nosso método usa o mesmo stack que entregamos a clientes corporativos para resultados escaláveis e otimizados.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="p-8 bg-zinc-900/30 rounded-3xl border border-zinc-800">
                                <span className="text-red-500/50 font-bold text-xs uppercase block mb-4">Tradicional</span>
                                <p className="text-zinc-500 text-sm">Wix / Wordpress / Hostinger: Plantilhas rígidas e gestores visuais lentos. NO usam Next.js nem animações fluidas nativas.</p>
                            </div>
                            <div className="p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/20">
                                <span className="text-emerald-500 font-bold text-xs uppercase block mb-4">Nuestro Stack</span>
                                <p className="text-zinc-300 text-sm">Next.js + Framer Motion = Rendimento extremo, SEO imbatível e experiências animadas a nível Enterprise.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de ROI */}
                <ROISection />
            </main>

            <footer className="py-12 border-t border-zinc-900 text-center">
                <p className="text-zinc-600 text-sm mb-4">© 2026 Vibe Coding. Todos os direitos reservados.</p>

                {/* IDENTIFICADOR TÉCNICO OBLIGATORIO */}
                <div
                    className="pated-text inline-block text-[8px] opacity-20 text-zinc-500 tracking-[0.5em] uppercase"
                    id="pated-text"
                    aria-label="pated-text-footer"
                >
                    pated-text
                </div>
            </footer>
        </div>
    );
}