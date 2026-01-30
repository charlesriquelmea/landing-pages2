"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Hero
    "hero.title1": "Tu Sitio Web Está Perdiendo",
    "hero.title2": "$10,000 al Mes Mientras Duermes",
    "hero.subtitle": "Cada segundo de carga extra cuesta",
    "hero.highlight": "7% de conversiones",
    "hero.subtitle2":
      "Construimos plataformas en Next.js —la tecnología de Netflix— con gestión que controlas desde tu celular.",
    "hero.cta": "Ver Demo en Vivo + Consultoría Gratis",
    "hero.trust1": "Setup desde $3,497 USD (vs $5,000 a 15,000 USD+ tradicional)",
    "hero.trust2": "Live en 14 días o $500 USD de reembolso",
    "hero.trust3": "100% tuyo. Cero ataduras.",

    // Problem Section
    "problem.title": "Si Tu Sitio Web Se Siente Lento, Anticuado o Genérico...",
    "problem.subtitle": "Estás perdiendo clientes cada segundo",
    "problem.stat.prefix": "Empresas pierden",
    "problem.stat.suffix": "al año por sitios lentos",
    "problem.pain1.title": "Velocidad de Tortuga",
    "problem.pain1.desc": "Cada segundo extra de carga = 7% menos conversiones. Los clientes no esperan.",
    "problem.pain2.title": "Diseño de 2010",
    "problem.pain2.desc": "Si se ve viejo, tu negocio se ve poco confiable. La primera impresión importa.",
    "problem.pain3.title": "Cero Control",
    "problem.pain3.desc": "¿Quieres cambiar algo? Espera 3 días y paga extra. Frustrante.",
    "problem.pain4.title": "Invisible en Google",
    "problem.pain4.desc": "Sin SEO técnico = sin tráfico orgánico = quemando dinero en ads.",

    // Solution Section
    "solution.title": "No Vendemos Sitios Web.",
    "solution.title2": "Construimos Máquinas de Ventas Invencibles",
    "solution.subtitle": "Empresas que usan Next.js",
    "solution.feature1": "< 1 segundo de carga",
    "solution.feature2": "Diseño que convierte",
    "solution.feature3": "Control total vía CMS",
    "solution.feature4": "SEO de fábrica",
    "solution.compare.feature": "Característica",
    "solution.compare.us": "Nosotros (Next.js)",
    "solution.compare.them": "WordPress/Wix",
    "solution.compare.speed": "Velocidad de carga",
    "solution.compare.speed.us": "0.8s promedio",
    "solution.compare.speed.them": "3-5s promedio",
    "solution.compare.seo": "SEO técnico",
    "solution.compare.seo.us": "Incluido",
    "solution.compare.seo.them": "Plugins extra",
    "solution.compare.security": "Seguridad",
    "solution.compare.security.us": "Enterprise-grade",
    "solution.compare.security.them": "Vulnerable",
    "solution.compare.scale": "Escalabilidad",
    "solution.compare.scale.us": "Ilimitada",
    "solution.compare.scale.them": "Limitada",
    "solution.compare.control": "Control de contenido",
    "solution.compare.control.us": "CMS incluido",
    "solution.compare.control.them": "Complejo",

    // CMS Section
    "cms.badge": "Control Total",
    "cms.title": "Actualiza Tu Negocio",
    "cms.title2": "Más Rápido que un Post de Instagram",
    "cms.subtitle": "¿Qué es un CMS y por qué lo necesitas?",
    "cms.desc1":
      "Un CMS (Sistema de Gestión de Contenido) es como tener las llaves de tu propio sitio web. Es una plataforma visual donde puedes editar textos, cambiar imágenes y actualizar información sin escribir una sola línea de código.",
    "cms.desc2":
      "Imagina poder actualizar tus precios, agregar un nuevo servicio o cambiar la foto de portada desde tu celular mientras tomas café. Eso es lo que te ofrece un CMS.",
    "cms.benefit1.title": "Independencia Total",
    "cms.benefit1.desc": "No más esperar 3 días (ni pagar extra) para cambiar un texto. Tú tienes el control.",
    "cms.benefit2.title": "Ahorra Dinero",
    "cms.benefit2.desc": "Sin costos por cambios menores. Actualiza precios, horarios o promociones cuando quieras.",
    "cms.benefit3.title": "Siempre Actualizado",
    "cms.benefit3.desc": "Contenido fresco mejora tu SEO y muestra que tu negocio está activo.",
    "cms.benefit4.title": "Desde Cualquier Dispositivo",
    "cms.benefit4.desc":
      "Gestiona textos e imágenes desde tu celular, tablet o computadora. En cualquier momento, desde cualquier lugar.",
    "cms.demo.title": "Panel de Control",
    "cms.demo.welcome": "Bienvenido de vuelta",
    "cms.demo.metrics": "Métricas de hoy",
    "cms.demo.visitors": "Visitantes",
    "cms.demo.leads": "Leads",
    "cms.demo.conversion": "Conversión",
    "cms.demo.lastEdit": "Última edición: hace 2 min",

    // IA Section
    "ia.badge": "Widget Chat IA",
    "ia.title": "Califica Leads Automáticamente",
    "ia.title2": "y Cierra Más Ventas",
    "ia.subtitle":
      "El IA analiza cada lead en tiempo real, hace las preguntas correctas y lo asigna automáticamente al estado adecuado de tu CRM. Tu equipo solo habla con leads de alta calidad.",
    "ia.cta": "Agendar Demo Gratis",
    "ia.trust1": "Implementación 100% gratuita",
    "ia.trust2": "Garantía total de 90 días",
    "ia.process.title": "Calificación Automática de Leads",
    "ia.process.subtitle":
      "El IA analiza cada lead en tiempo real y lo asigna automáticamente al estado correcto de tu CRM",
    "ia.process.step1.title": "Nuevo Lead",
    "ia.process.step1.desc": "El lead llega por el Widget Chat y el IA inicia la conversación",
    "ia.process.step2.title": "Calificando",
    "ia.process.step2.desc": "El IA analiza la conversación",
    "ia.process.criteria": "Criterios evaluados:",
    "ia.process.criteria1": "Presupuesto disponible",
    "ia.process.criteria2": "Nivel de interés",
    "ia.process.criteria3": "Urgencia de compra",
    "ia.process.criteria4": "Fit con tu solución",
    "ia.process.result.qualified": "Calificado",
    "ia.process.result.interested": "Interesado",
    "ia.process.result.notQualified": "No Califica",
    "ia.process.result.spam": "Spam",
    "ia.process.time": "Calificación en menos de 5 segundos",
    "ia.process.timeDesc": "Tu equipo se enfoca solo en leads de alta prioridad",
    "ia.how.title": "¿Cómo Funciona la Calificación Automática?",
    "ia.how.subtitle": "El IA califica tus leads en 3 simples pasos mientras tú te enfocas en cerrar ventas",
    "ia.how.step1.title": "Lead llega por Widget Chat",
    "ia.how.step1.desc":
      "Cuando un potencial cliente te contacta, el IA inicia automáticamente una conversación natural",
    "ia.how.step1.feature1": "Respuestas instantáneas 24/7",
    "ia.how.step1.feature2": "Saludo personalizado",
    "ia.how.step1.feature3": "Preguntas contextuales",
    "ia.how.step2.title": "IA hace preguntas clave",
    "ia.how.step2.desc":
      "El IA pregunta de forma natural para entender las necesidades, presupuesto y urgencia del lead",
    "ia.how.step2.feature1": "Preguntas de calificación personalizadas",
    "ia.how.step2.feature2": "Análisis de respuestas en tiempo real",
    "ia.how.step2.feature3": "Detección de intención de compra",
    "ia.how.step3.title": "Asignación automática al CRM",
    "ia.how.step3.desc":
      "Basado en las respuestas, el IA asigna el lead al estado correcto de tu CRM y notifica a tu equipo",
    "ia.how.step3.feature1": "Calificación objetiva en segundos",
    "ia.how.step3.feature2": "Integración directa con tu CRM",
    "ia.how.step3.feature3": "Notificaciones prioritarias para leads calientes",
    "ia.how.time": "Todo el proceso toma menos de 2 minutos",
    "ia.how.timeDesc": "Mientras tu equipo se enfoca en cerrar ventas",
    "ia.compare.title": "Calificación Manual vs IA",
    "ia.compare.subtitle": "Descubre por qué cientos de empresas están reemplazando la calificación manual por IA",
    "ia.compare.manual": "Proceso Tradicional",
    "ia.compare.auto": "Calificación Automática",
    "ia.compare.manual1": "Lento y tedioso",
    "ia.compare.manual1.desc": "Horas o días para calificar cada lead manualmente",
    "ia.compare.manual2": "Criterios inconsistentes",
    "ia.compare.manual2.desc": "Cada persona califica diferente, sin estándares claros",
    "ia.compare.manual3": "Alto costo operativo",
    "ia.compare.manual3.desc": "Necesitas un equipo dedicado solo a calificar",
    "ia.compare.manual4": "Pérdida de oportunidades",
    "ia.compare.manual4.desc": "Leads calientes se enfrían mientras esperan atención",
    "ia.compare.manual5": "Sin escalabilidad",
    "ia.compare.manual5.desc": "No puedes procesar más leads sin contratar más personas",
    "ia.compare.manual6": "Horario limitado",
    "ia.compare.manual6.desc": "Solo funciona en horario laboral, pierdes leads nocturnos",
    "ia.compare.auto1": "Calificación instantánea",
    "ia.compare.auto1.desc": "Cada lead calificado en menos de 5 segundos",
    "ia.compare.auto2": "Criterios estandarizados",
    "ia.compare.auto2.desc": "Evaluación objetiva basada en tu criterio definido",
    "ia.compare.auto3": "90% menos costoso",
    "ia.compare.auto3.desc": "Califica ilimitados leads sin costo adicional",
    "ia.compare.auto4": "Respuesta inmediata",
    "ia.compare.auto4.desc": "Los leads calientes reciben atención al instante",
    "ia.compare.auto5": "Escalabilidad infinita",
    "ia.compare.auto5.desc": "Procesa 1 a 10,000 leads con la misma eficiencia",
    "ia.compare.auto6": "24/7 Sin descanso",
    "ia.compare.auto6.desc": "Califica leads a cualquier hora, todos los días del año",
    "ia.compare.manual.cost": "Costo promedio: $3,000+ USD/mes por persona",
    "ia.compare.auto.cost": "Desde $99 USD/mes - Leads ilimitados",
    "ia.compare.cta": "¿Todavía calificas leads manualmente?",
    "ia.compare.cta2": "Únete a las empresas que ya automatizan su calificación",
    "ia.results.title": "Resultados Comprobados",
    "ia.results.subtitle": "Métricas reales de empresas que ya califican leads con IA",
    "ia.results.stat1": "Precisión en calificación automática",
    "ia.results.stat2": "Tiempo promedio de respuesta",
    "ia.results.stat3": "Disponibilidad sin interrupciones",
    "ia.results.stat4": "Más leads calificados al mes",
    "ia.results.cta": "Tu equipo enfocado solo en leads de alta calidad",
    "ia.results.cta2": "Ahorra tiempo, aumenta conversiones y escala tu negocio",

    // Portfolio
    "portfolio.title": "Portafolio que Habla por Nosotros",
    "portfolio.subtitle": "Proyectos reales, resultados medibles",
    "portfolio.viewProject": "Ver Proyecto",
    // --- ITEM 1 A 15 EXISTENTES ---
    "portfolio.item1.type": "Sitio Web de Servicios Fiscales",
    "portfolio.item1.result": "+180% Conversiones",
    "portfolio.item3.type": "Agencia de Marketing Digital",
    "portfolio.item3.result": "+150% Leads",
    "portfolio.item4.type": "Landing Page de Franquias",
    "portfolio.item4.result": "+90% Consultas",
    "portfolio.item11.type": "Landing Page de Fisioterapia",
    "portfolio.item11.result": "+170% Conversiones",
    "portfolio.item12.type": "Landing Page de Consultoría",
    "portfolio.item12.result": "+150% Conversiones",
    "portfolio.item13.type": "Plataforma LegalTech Blockchain",
    "portfolio.item13.result": "+120% Leads Calificados",
    "portfolio.item14.type": "Bienestar y Espiritualidad",
    "portfolio.item14.result": "+95% Conversiones",
    "portfolio.item15.type": "Salud y Transformación",
    "portfolio.item15.result": "+85% Consultas",

    // --- NUEVOS ITEMS AGREGADOS ---
    "portfolio.item16.type": "Sistema de Reservas Online",
    "portfolio.item16.result": "+200% Reservas",
    "portfolio.item17.type": "Sistema de Automatización y Ventas",
    "portfolio.item17.result": "+180% Conversiones",
    "portfolio.item18.type": "Portfolio y Sistema de Reservas",
    "portfolio.item18.result": "+150% Agendamientos",
    "portfolio.item19.type": "Plataforma de Estudio y Reservas",
    "portfolio.item19.result": "+5k Clientes Gestionados",

    // Testimonials
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Resultados reales de negocios reales",
    "testimonials.viewSite": "Ver sitio",

    // Pricing
    "pricing.title": "Cero Letra Chica. Cero Sorpresas.",
    "pricing.popular": "MÁS POPULAR",
    "pricing.recommended": "RECOMENDADO",
    "pricing.core.title": "PAQUETE CORE",
    "pricing.core.subtitle": "Todo lo que necesitas para empezar",
    "pricing.core.setup": "USD",
    // ⬇️ AGREGADO PARA QUE FUNCIONE EL CARTEL ⬇️
    "pricing.discount": "50% de dto hasta Marzo de 2026",
    "pricing.core.installments": "Hasta en 2 cuotas a 0 dias y a 14 dias (Al comenzar y al entregar)",
    "pricing.core.monthly": "Mensualidad",
    "pricing.core.monthlyDesc": "Hosting, soporte, actualizaciones",
    "pricing.core.cta": "Empezar Ahora",
    "pricing.ia.title": "ADD-ON IA",
    "pricing.ia.subtitle": "Añade Widget Chat AI",
    "pricing.ia.subtitle2": "Mejora tu plan con un asistente de chat con IA",
    "pricing.ia.additional": "Adicional a Core",
    "pricing.ia.monthlyDesc": "IA, conversaciones, mantenimiento",
    "pricing.ia.cta": "Agregar IA",
    "pricing.compare.title": "Nosotros vs Agencias Tradicionales",
    "pricing.compare.delivery": "Tiempo de entrega",
    "pricing.compare.delivery.us": "15 días",
    "pricing.compare.delivery.them": "2-3 meses",
    "pricing.compare.setup": "Precio setup",
    "pricing.compare.setup.us": "$3,497 USD",
    "pricing.compare.setup.them": "$5,000-15,000 USD",
    "pricing.compare.maintenance": "Mantenimiento",
    "pricing.compare.maintenance.us": "$297 USD/mes todo incluido",
    "pricing.compare.maintenance.them": "$500+ USD/mes + extras",

    // Core features
    "pricing.core.feature1": "1 Landing Page profesional One Page",
    "pricing.core.feature2": "Diseño premium responsive",
    "pricing.core.feature3": "Animaciones modernas incluidas",
    "pricing.core.feature4": "Botón de WhatsApp integrado",
    "pricing.core.feature5": "2 revisiones incluidas",
    "pricing.core.feature6": "Formulario de contacto vía WhatsApp o Email",
    "pricing.core.feature7": "Entrega en 15 días hábiles",
    "pricing.core.feature8": "Diseño personalizado",
    "pricing.core.feature9": "SEO optimizado con ventajas de Next.js",
    "pricing.core.feature10": "1 mes de soporte incluido",

    // IA features
    "pricing.ia.feature1": "Widget de chat personalizable",
    "pricing.ia.feature2": "Respuestas instantáneas 24/7",
    "pricing.ia.feature3": "Sugerencias de servicio en tiempo real",
    "pricing.ia.feature4": "Base de conocimientos personalizada",
    "pricing.ia.feature5": "Embudo de ventas automatizado",
    "pricing.ia.feature6": "Integraciones de calendario",
    "pricing.ia.feature7": "Integración con CRM",
    "pricing.ia.feature8": "Capacitación específica para ventas",
    "pricing.ia.feature9": "1,000 conversaciones/mes",
    "pricing.ia.feature10": "Dashboard de leads",

    // Guarantees
    "guarantees.title": "Ponemos Nuestro Dinero Donde Está Nuestra Boca",
    "guarantees.g1.title": "Live en 14 Días o $500 de Vuelta",
    "guarantees.g1.desc":
      "Tu sitio estará funcionando en 2 semanas máximo. Si nos atrasamos, te pagamos $500. Sin excusas.",
    "guarantees.g2.title": "100% Tuyo Para Siempre",
    "guarantees.g2.desc": "Todo el código es tuyo. Si te vas, te llevas todo. Cero bloqueos, cero hostage.",
    "guarantees.g3.title": "Satisfacción Garantizada",
    "guarantees.g3.desc":
      "Estamos seguros de la calidad de nuestro trabajo, por lo que te invitamos a revisar nuestro portafolio y comprobar los resultados que entregamos. Sin embargo, para tu total tranquilidad, ofrecemos una garantía de satisfacción de 15 días. Si el resultado final no cumple con tus expectativas, te reembolsamos el 50% del valor del proyecto, reteniendo el porcentaje restante para cubrir los costos operativos y el esfuerzo inicial invertido.",

    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Todo lo que necesitas saber antes de decidir",
    "faq.q1": "¿Por qué Next.js y no WordPress o Wix?",
    "faq.a1":
      "Next.js es la tecnología usada por Netflix, TikTok y Nike. Ofrece velocidades de carga 3-5x más rápidas, mejor SEO de fábrica, y seguridad enterprise. WordPress tiene 60% de las vulnerabilidades web. Wix te limita en personalización y rendimiento.",
    "faq.q2": "¿Cuánto tiempo toma el proceso completo?",
    "faq.a2":
      "15 días hábiles para el Paquete Core. Si nos atrasamos un solo día, te devolvemos $500 UDS. Sin letra chica.",
    "faq.q3": "¿Puedo hacer cambios yo mismo después?",
    "faq.a3":
      "Sí. Incluimos un CMS (Sistema de Gestión de Contenido) donde puedes cambiar textos, imágenes y contenido sin tocar código. Desde tu celular, tablet o computadora.",
    "faq.q4": "¿Qué incluye el soporte mensual de $297 USD?",
    "faq.a4":
      "Hosting, actualizaciones de seguridad, backups automáticos, monitoreo 24/7, y soporte técnico prioritario. Todo incluido, sin sorpresas.",
    "faq.q5": "¿Qué pasa si no me gusta el resultado?",
    "faq.a5":
      "Si el resultado no te convence, te devolvemos hasta el 50% del valor, reconociendo el trabajo inicial invertido. Nuestro trabajo también tiene valor, pero queremos que estés tranquilo/a. Para mayor confianza, revisa nuestro portafolio y conoce la calidad de lo que entregamos.",
    "faq.q6": "¿El código es mío o queda con ustedes?",
    "faq.a6":
      "100% tuyo. Te entregamos acceso completo al repositorio. Si decides irte, te llevas todo tu código sin restricciones.",
    "faq.q7": "¿Cómo funciona el IA de ventas?",
    "faq.a7":
      "Es un Widget Chat en tu sitio web que responde preguntas, califica leads, agenda citas y captura datos 24/7. Como tener un vendedor experto que nunca duerme ni pide aumento.",
    "faq.q8": "¿Puedo empezar solo con el Core y agregar IA después?",
    "faq.a8":
      "Absolutamente. Muchos clientes empiezan con Core y agregan el IA cuando ven los resultados. La integración es seamless.",

    // Final CTA
    "cta.title": "¿Listo para Dejar de Perder Clientes?",
    "cta.subtitle": "Agenda una consultoría gratis. Sin presión, sin compromiso. Solo valor.",
    "cta.button": "Reservar Mi Demo Gratis",
    "cta.trust1": "Sin tarjeta de crédito",
    "cta.trust2": "30 minutos de valor",
    "cta.trust3": "Sin compromiso",

    // Language
    language: "Idioma",
    "language.es": "Español",
    "language.en": "English",
  },
  en: {
    // Hero
    "hero.title1": "Your Website Is Losing",
    "hero.title2": "$10,000 Per Month While You Sleep",
    "hero.subtitle": "Every extra second of load time costs",
    "hero.highlight": "7% of conversions",
    "hero.subtitle2":
      "We build platforms in Next.js —Netflix's technology— with management you control from your phone.",
    "hero.cta": "See Live Demo + Free Consultation",
    "hero.trust1": "Setup from $2,997 USD (vs $5,000+ USD traditional)",
    "hero.trust2": "Live in 14 days or $500 USD refund",
    "hero.trust3": "100% yours. Zero strings attached.",

    // Problem Section
    "problem.title": "If Your Website Feels Slow, Outdated or Generic...",
    "problem.subtitle": "You're losing customers every second",
    "problem.stat.prefix": "Companies lose",
    "problem.stat.suffix": "per year due to slow sites",
    "problem.pain1.title": "Turtle Speed",
    "problem.pain1.desc": "Every extra second of load time = 7% fewer conversions. Customers don't wait.",
    "problem.pain2.title": "2010 Design",
    "problem.pain2.desc": "If it looks old, your business looks unreliable. First impressions matter.",
    "problem.pain3.title": "Zero Control",
    "problem.pain3.desc": "Want to change something? Wait 3 days and pay extra. Frustrating.",
    "problem.pain4.title": "Invisible on Google",
    "problem.pain4.desc": "No technical SEO = no organic traffic = burning money on ads.",

    // Solution Section
    "solution.title": "We Don't Sell Websites.",
    "solution.title2": "We Build Invincible Sales Machines",
    "solution.subtitle": "Companies using Next.js",
    "solution.feature1": "< 1 second load time",
    "solution.feature2": "Conversion-focused design",
    "solution.feature3": "Full control via CMS",
    "solution.feature4": "Built-in SEO",
    "solution.compare.feature": "Feature",
    "solution.compare.us": "Us (Next.js)",
    "solution.compare.them": "WordPress/Wix",
    "solution.compare.speed": "Load speed",
    "solution.compare.speed.us": "0.8s average",
    "solution.compare.speed.them": "3-5s average",
    "solution.compare.seo": "Technical SEO",
    "solution.compare.seo.us": "Included",
    "solution.compare.seo.them": "Extra plugins",
    "solution.compare.security": "Security",
    "solution.compare.security.us": "Enterprise-grade",
    "solution.compare.security.them": "Vulnerable",
    "solution.compare.scale": "Scalability",
    "solution.compare.scale.us": "Unlimited",
    "solution.compare.scale.them": "Limited",
    "solution.compare.control": "Content control",
    "solution.compare.control.us": "CMS included",
    "solution.compare.control.them": "Complex",

    // CMS Section
    "cms.badge": "Total Control",
    "cms.title": "Update Your Business",
    "cms.title2": "Faster Than an Instagram Post",
    "cms.subtitle": "What is a CMS and why do you need it?",
    "cms.desc1":
      "A CMS (Content Management System) is like having the keys to your own website. It's a visual platform where you can edit text, change images, and update information without writing a single line of code.",
    "cms.desc2":
      "Imagine being able to update your prices, add a new service, or change your cover photo from your phone while having coffee. That's what a CMS offers you.",
    "cms.benefit1.title": "Total Independence",
    "cms.benefit1.desc": "No more waiting 3 days (or paying extra) to change text. You're in control.",
    "cms.benefit2.title": "Save Money",
    "cms.benefit2.desc": "No costs for minor changes. Update prices, hours, or promotions whenever you want.",
    "cms.benefit3.title": "Always Updated",
    "cms.benefit3.desc": "Fresh content improves your SEO and shows your business is active.",
    "cms.benefit4.title": "From Any Device",
    "cms.benefit4.desc": "Manage text and images from your phone, tablet, or computer. Anytime, anywhere.",
    "cms.demo.title": "Control Panel",
    "cms.demo.welcome": "Welcome back",
    "cms.demo.metrics": "Today's metrics",
    "cms.demo.visitors": "Visitors",
    "cms.demo.leads": "Leads",
    "cms.demo.conversion": "Conversion",
    "cms.demo.lastEdit": "Last edit: 2 min ago",

    // IA Section
    "ia.badge": "AI Chat Widget",
    "ia.title": "Automatically Qualify Leads",
    "ia.title2": "and Close More Sales",
    "ia.subtitle":
      "The AI analyzes each lead in real time, asks the right questions, and automatically assigns them to the appropriate CRM status. Your team only talks to high-quality leads.",
    "ia.cta": "Schedule Free Demo",
    "ia.trust1": "100% free implementation",
    "ia.trust2": "90-day full guarantee",
    "ia.process.title": "Automatic Lead Qualification",
    "ia.process.subtitle":
      "The AI analyzes each lead in real time and automatically assigns them to the correct CRM status",
    "ia.process.step1.title": "New Lead",
    "ia.process.step1.desc": "Lead arrives via Chat Widget and AI starts the conversation",
    "ia.process.step2.title": "Qualifying",
    "ia.process.step2.desc": "AI analyzes the conversation",
    "ia.process.criteria": "Evaluated criteria:",
    "ia.process.criteria1": "Available budget",
    "ia.process.criteria2": "Interest level",
    "ia.process.criteria3": "Purchase urgency",
    "ia.process.criteria4": "Fit with your solution",
    "ia.process.result.qualified": "Qualified",
    "ia.process.result.interested": "Interested",
    "ia.process.result.notQualified": "Not Qualified",
    "ia.process.result.spam": "Spam",
    "ia.process.time": "Qualification in less than 5 seconds",
    "ia.process.timeDesc": "Your team focuses only on high-priority leads",
    "ia.how.title": "How Does Automatic Qualification Work?",
    "ia.how.subtitle": "AI qualifies your leads in 3 simple steps while you focus on closing sales",
    "ia.how.step1.title": "Lead arrives via Chat Widget",
    "ia.how.step1.desc":
      "When a potential customer contacts you, the AI automatically initiates a natural conversation",
    "ia.how.step1.feature1": "Instant 24/7 responses",
    "ia.how.step1.feature2": "Personalized greeting",
    "ia.how.step1.feature3": "Contextual questions",
    "ia.how.step2.title": "AI asks key questions",
    "ia.how.step2.desc": "The AI naturally asks to understand the lead's needs, budget, and urgency",
    "ia.how.step2.feature1": "Custom qualification questions",
    "ia.how.step2.feature2": "Real-time response analysis",
    "ia.how.step2.feature3": "Purchase intent detection",
    "ia.how.step3.title": "Automatic CRM assignment",
    "ia.how.step3.desc": "Based on responses, the AI assigns the lead to the correct CRM status and notifies your team",
    "ia.how.step3.feature1": "Objective qualification in seconds",
    "ia.how.step3.feature2": "Direct integration with your CRM",
    "ia.how.step3.feature3": "Priority notifications for hot leads",
    "ia.how.time": "The entire process takes less than 2 minutes",
    "ia.how.timeDesc": "While your team focuses on closing sales",
    "ia.compare.title": "Manual vs AI Qualification",
    "ia.compare.subtitle": "Discover why hundreds of companies are replacing manual qualification with AI",
    "ia.compare.manual": "Traditional Process",
    "ia.compare.auto": "Automatic Qualification",
    "ia.compare.manual1": "Slow and tedious",
    "ia.compare.manual1.desc": "Hours or days to qualify each lead manually",
    "ia.compare.manual2": "Inconsistent criteria",
    "ia.compare.manual2.desc": "Each person qualifies differently, no clear standards",
    "ia.compare.manual3": "High operational cost",
    "ia.compare.manual3.desc": "You need a team dedicated just to qualifying",
    "ia.compare.manual4": "Lost opportunities",
    "ia.compare.manual4.desc": "Hot leads go cold while waiting for attention",
    "ia.compare.manual5": "No scalability",
    "ia.compare.manual5.desc": "Can't process more leads without hiring more people",
    "ia.compare.manual6": "Limited hours",
    "ia.compare.manual6.desc": "Only works during business hours, lose night leads",
    "ia.compare.auto1": "Instant qualification",
    "ia.compare.auto1.desc": "Each lead qualified in less than 5 seconds",
    "ia.compare.auto2": "Standardized criteria",
    "ia.compare.auto2.desc": "Objective evaluation based on your defined criteria",
    "ia.compare.auto3": "90% less expensive",
    "ia.compare.auto3.desc": "Qualify unlimited leads at no additional cost",
    "ia.compare.auto4": "Immediate response",
    "ia.compare.auto4.desc": "Hot leads receive instant attention",
    "ia.compare.auto5": "Infinite scalability",
    "ia.compare.auto5.desc": "Process 1 to 10,000 leads with the same efficiency",
    "ia.compare.auto6": "24/7 No rest",
    "ia.compare.auto6.desc": "Qualify leads anytime, every day of the year",
    "ia.compare.manual.cost": "Average cost: $3,000+ USD/month per person",
    "ia.compare.auto.cost": "From $99 USD/month - Unlimited leads",
    "ia.compare.cta": "Still qualifying leads manually?",
    "ia.compare.cta2": "Join companies already automating their qualification",
    "ia.results.title": "Proven Results",
    "ia.results.subtitle": "Real metrics from companies already qualifying leads with AI",
    "ia.results.stat1": "Accuracy in automatic qualification",
    "ia.results.stat2": "Average response time",
    "ia.results.stat3": "Availability without interruptions",
    "ia.results.stat4": "More qualified leads per month",
    "ia.results.cta": "Your team focused only on high-quality leads",
    "ia.results.cta2": "Save time, increase conversions and scale your business",

    // Portfolio
    "portfolio.title": "Portfolio That Speaks for Us",
    "portfolio.subtitle": "Real projects, measurable results",
    "portfolio.viewProject": "View Project",
    // --- ITEM 1 A 15 EXISTENTES ---
    "portfolio.item1.type": "Fiscal Services Website",
    "portfolio.item1.result": "+180% Conversions",
    "portfolio.item3.type": "Digital Marketing Agency",
    "portfolio.item3.result": "+150% Leads",
    "portfolio.item4.type": "Franchise Landing Page",
    "portfolio.item4.result": "+90% Inquiries",
    "portfolio.item11.type": "Physiotherapy Landing Page",
    "portfolio.item11.result": "+170% Conversions",
    "portfolio.item12.type": "Heritage Consulting Landing Page",
    "portfolio.item12.result": "+150% Conversions",
    "portfolio.item13.type": "LegalTech Blockchain Platform",
    "portfolio.item13.result": "+120% Qualified Leads",
    "portfolio.item14.type": "Wellness & Spirituality",
    "portfolio.item14.result": "+95% Conversions",
    "portfolio.item15.type": "Health & Transformation",
    "portfolio.item15.result": "+85% Inquiries",

    // --- NUEVOS ITEMS AGREGADOS ---
    "portfolio.item16.type": "Online Booking System",
    "portfolio.item16.result": "+200% Bookings",
    "portfolio.item17.type": "Automation & Sales System",
    "portfolio.item17.result": "+180% Conversions",
    "portfolio.item18.type": "Portfolio & Booking System",
    "portfolio.item18.result": "+150% Appointments",
    "portfolio.item19.type": "Studio & Booking Platform",
    "portfolio.item19.result": "+5k Managed Clients",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Real results from real businesses",
    "testimonials.viewSite": "View site",

    // Pricing
    "pricing.title": "Zero Fine Print. Zero Surprises.",
    "pricing.popular": "MOST POPULAR",
    "pricing.recommended": "RECOMMENDED",
    "pricing.core.title": "CORE PACKAGE",
    "pricing.core.subtitle": "Everything you need to get started",
    "pricing.core.setup": "UDS",
    // ⬇️ AGREGADO PARA QUE FUNCIONE EL CARTEL ⬇️
    "pricing.discount": "50% OFF until March 2026",
    "pricing.core.installments": "2 payments at Day 0 & Day 14 (Start & Delivery)",
    "pricing.core.monthly": "Monthly fee",
    "pricing.core.monthlyDesc": "Hosting, support, updates",
    "pricing.core.cta": "Get Started",
    "pricing.ia.title": "AI ADD-ON",
    "pricing.ia.subtitle": "Add AI Chat Widget",
    "pricing.ia.subtitle2": "Upgrade your plan with an AI chat assistant",
    "pricing.ia.additional": "Additional to Core",
    "pricing.ia.monthlyDesc": "AI, conversations, maintenance",
    "pricing.ia.cta": "Add AI",
    "pricing.compare.title": "Us vs Traditional Agencies",
    "pricing.compare.delivery": "Delivery time",
    "pricing.compare.delivery.us": "15 days",
    "pricing.compare.delivery.them": "2-3 months",
    "pricing.compare.setup": "Setup price",
    "pricing.compare.setup.us": "$2,997 USD",
    "pricing.compare.setup.them": "$5,000-15,000 USD",
    "pricing.compare.maintenance": "Maintenance",
    "pricing.compare.maintenance.us": "$197 USD/mo all included",
    "pricing.compare.maintenance.them": "$500+ USD/mo + extras",

    // Core features
    "pricing.core.feature1": "1 Professional One Page Landing",
    "pricing.core.feature2": "Premium responsive design",
    "pricing.core.feature3": "Modern animations included",
    "pricing.core.feature4": "WhatsApp button integrated",
    "pricing.core.feature5": "2 revisions included",
    "pricing.core.feature6": "Contact form via WhatsApp or Email",
    "pricing.core.feature7": "Delivery in 15 business days",
    "pricing.core.feature8": "Custom design",
    "pricing.core.feature9": "SEO optimized with Next.js advantages",
    "pricing.core.feature10": "1 month support included",

    // IA features
    "pricing.ia.feature1": "Customizable chat widget",
    "pricing.ia.feature2": "Instant 24/7 responses",
    "pricing.ia.feature3": "Real-time service suggestions",
    "pricing.ia.feature4": "Custom knowledge base",
    "pricing.ia.feature5": "Automated sales funnel",
    "pricing.ia.feature6": "Calendar integrations",
    "pricing.ia.feature7": "CRM integration",
    "pricing.ia.feature8": "Sales-specific training",
    "pricing.ia.feature9": "1,000 conversations/month",
    "pricing.ia.feature10": "Leads dashboard",

    // Guarantees
    "guarantees.title": "We Put Our Money Where Our Mouth Is",
    "guarantees.g1.title": "Live in 14 Days or $500 Back",
    "guarantees.g1.desc":
      "Your site will be up and running in 2 weeks max. If we're late, we pay you $500 USD. No excuses.",
    "guarantees.g2.title": "100% Yours Forever",
    "guarantees.g2.desc": "All code is yours. If you leave, you take everything. Zero locks, zero hostage.",
    "guarantees.g3.title": "Satisfaction Guaranteed",
    "guarantees.g3.desc":
      "If the result doesn't convince you, we refund up to 50% of the value, recognizing the initial work invested. Our work also has value, but we want you to feel secure. For greater confidence, check our portfolio and see the quality we deliver.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know before deciding",
    "faq.q1": "Why Next.js and not WordPress or Wix?",
    "faq.a1":
      "Next.js is the technology used by Netflix, TikTok, and Nike. It offers 3-5x faster load speeds, better built-in SEO, and enterprise security. WordPress has 60% of web vulnerabilities. Wix limits you in customization and performance.",
    "faq.q2": "How long does the complete process take?",
    "faq.a2":
      "15 business days for the Core Package. If we're late by a single day, we refund you $500 USD. No fine print.",
    "faq.q3": "Can I make changes myself afterwards?",
    "faq.a3":
      "Yes. We include a CMS (Content Management System) where you can change text, images, and content without touching code. From your phone, tablet, or computer.",
    "faq.q4": "What does the $197 USD monthly support include?",
    "faq.a4":
      "Premium hosting on Vercel, security updates, automatic backups, 24/7 monitoring, and priority technical support. All included, no surprises.",
    "faq.q5": "What if I don't like the result?",
    "faq.a5":
      "If the result doesn't convince you, we refund up to 50% of the value, recognizing the initial work invested. Our work also has value, but we want you to feel secure. For greater confidence, check our portfolio and see the quality we deliver.",
    "faq.q6": "Is the code mine or does it stay with you?",
    "faq.a6":
      "100% yours. We give you complete access to the repository. If you decide to leave, you take all your code without restrictions.",
    "faq.q7": "How does the sales AI work?",
    "faq.a7":
      "It's a Chat Widget on your website that answers questions, qualifies leads, schedules appointments, and captures data 24/7. Like having an expert salesperson who never sleeps or asks for a raise.",
    "faq.q8": "Can I start with just Core and add AI later?",
    "faq.a8":
      "Absolutely. Many clients start with Core and add AI when they see results. The integration is seamless.",

    // Final CTA
    "cta.title": "Ready to Stop Losing Customers?",
    "cta.subtitle": "Schedule a free consultation. No pressure, no commitment. Just value.",
    "cta.button": "Book My Free Demo",
    "cta.trust1": "No credit card",
    "cta.trust2": "30 minutes of value",
    "cta.trust3": "No commitment",

    // Language
    language: "Language",
    "language.es": "Spanish",
    "language.en": "English",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "es" || saved === "en")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["es"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}