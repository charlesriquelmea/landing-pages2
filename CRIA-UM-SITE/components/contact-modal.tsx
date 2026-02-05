"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import {
    User,
    Phone,
    Mail,
    ArrowRight,
    Target,
    ChevronLeft,
    AlertCircle
} from 'lucide-react'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

const WHATSAPP_NUMBER = "5511999999999" // Reemplaza con tu número real

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        mail: '',
        tipo: '',
        rubro: ''
    });
    const [touched, setTouched] = useState({
        nombre: false,
        telefono: false,
        mail: false,
        tipo: false,
        rubro: false
    });

    // Reset step when modal closes
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setStep(1);
                setTouched({
                    nombre: false,
                    telefono: false,
                    mail: false,
                    tipo: false,
                    rubro: false
                });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^[0-9+\-() ]{8,}$/.test(phone);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Only allow numbers and specific characters
        if (/^[0-9+\-() ]*$/.test(value)) {
            setFormData({ ...formData, telefono: value });
        }
    };

    const isStep1Valid =
        formData.nombre.length > 2 &&
        isValidPhone(formData.telefono) &&
        isValidEmail(formData.mail);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isStep1Valid || !formData.tipo || !formData.rubro) {
            return;
        }

        const mensaje = `Olá! Meu nome é ${formData.nombre}. 
Estou interessado em um ${formData.tipo} para o rubro ${formData.rubro}. 
Meus contatos: ${formData.telefono} | ${formData.mail}. 
Vi os números de ROI e quero ter autonomia tecnológica!`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
        window.location.href = whatsappUrl;
        onClose();
    };

    const inputClasses = (hasError: boolean) => `
        w-full p-4 rounded-2xl bg-zinc-800/50 border 
        ${hasError ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-700 focus:border-cyan-500'} 
        focus:ring-1 ${hasError ? 'focus:ring-red-500' : 'focus:ring-cyan-500'} 
        outline-none transition-all text-white placeholder:text-zinc-600 backdrop-blur-sm
    `;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-xl bg-black/95 border-zinc-800 p-0 overflow-hidden rounded-[2rem]">
                {/* Gradient Background - Updated with Cyan mix */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-cyan-900/20 pointer-events-none" />

                <div className="p-8 relative z-10">
                    <DialogHeader className="mb-8 text-center">
                        <DialogTitle className="text-3xl font-bold text-white mb-2">Pronto para começar?</DialogTitle>
                        <DialogDescription className="text-zinc-500">
                            Preencha os dados e fale conosco via WhatsApp.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {step === 1 ? (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-5"
                                >
                                    <div className="flex items-center gap-2 text-cyan-400 mb-6 font-bold text-xs uppercase tracking-widest">
                                        <User size={14} /> Passo 1: Identificação
                                    </div>

                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Seu nome"
                                            className={`${inputClasses(touched.nombre && formData.nombre.length < 3)} pl-12`}
                                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                            onBlur={() => setTouched({ ...touched, nombre: true })}
                                            value={formData.nombre}
                                        />
                                    </div>

                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="WhatsApp (+55...)"
                                            className={`${inputClasses(touched.telefono && !isValidPhone(formData.telefono))} pl-12`}
                                            onChange={handlePhoneChange}
                                            onBlur={() => setTouched({ ...touched, telefono: true })}
                                            value={formData.telefono}
                                        />
                                        {touched.telefono && !isValidPhone(formData.telefono) && (
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-xs">Apenas números</span>
                                        )}
                                    </div>

                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                        <input
                                            required
                                            type="email"
                                            placeholder="E-mail profissional"
                                            className={`${inputClasses(touched.mail && !isValidEmail(formData.mail))} pl-12`}
                                            onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
                                            onBlur={() => setTouched({ ...touched, mail: true })}
                                            value={formData.mail}
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => isStep1Valid && setStep(2)}
                                        disabled={!isStep1Valid}
                                        className="w-full py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                    >
                                        Próximo Passo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-5"
                                >
                                    <div className="flex items-center gap-2 text-cyan-400 mb-6 font-bold text-xs uppercase tracking-widest">
                                        <Target size={14} /> Passo 2: O Projeto
                                    </div>

                                    <select
                                        required
                                        className={inputClasses(false)}
                                        onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                                        value={formData.tipo}
                                    >
                                        <option value="">O que você precisa?</option>
                                        <option value="Landing Page">Landing Page Premium</option>
                                        <option value="Site Institucional">Site Institucional</option>
                                        <option value="Portfolio Corporativo">Portfólio Corporativo</option>
                                    </select>

                                    <input
                                        required
                                        type="text"
                                        placeholder="Qual seu rubro? (Ex: Imobiliário)"
                                        className={inputClasses(false)}
                                        onChange={(e) => setFormData({ ...formData, rubro: e.target.value })}
                                        value={formData.rubro}
                                    />

                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="p-5 bg-zinc-800 text-white rounded-2xl hover:bg-zinc-700 transition-colors"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={!formData.tipo || !formData.rubro}
                                            className="flex-1 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-2xl hover:opacity-90 transition-all shadow-[0_10px_20px_-5px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Quero Ter Autonomia Tecnológica →
                                        </button>
                                    </div>

                                    {/* NOTA OBLIGATORIA DEL CLIENTE */}
                                    <div className="pt-4 text-center">
                                        <p className="text-[10px] text-zinc-500 uppercase tracking-tighter font-medium leading-relaxed">
                                            Ao clicar, você será redirecionado ao WhatsApp <br /> para continuar a conversa.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
