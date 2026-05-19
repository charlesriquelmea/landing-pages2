'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type Language = 'es' | 'en' | 'pt'

type Translations = Record<string, any>

const es: Translations = {
  nav: {
    recorrido: 'Recorrido',
    laCancha: 'La Cancha',
    stackTech: 'Stack Tech',
    shipFast: 'Ship Fast',
    contacto: 'Contacto',
    aplicarShipFast: 'Aplicar a Ship Fast',
    cerrarMenu: 'Cerrar menú',
    abrirMenu: 'Abrir menú',
    navegacion: 'Navegación principal',
    builderLatino: 'Builder',
    builderSuffix: 'Latino',
  },
  hero: {
    builderLatino: 'Builder Latino',
    santiago: 'Santiago, Chile',
    title1: 'De vendedor ambulante a arquitecto de',
    title2: 'ecosistemas',
    description: 'Nací en Santiago de Chile, lejos de Silicon Valley, en un país donde la cancha suele venir inclinada. Mi primer "MBA" no fue un diploma: fue la calle, a los 3 años, vendiendo junto a mi padre y aprendiendo a sostener la mirada, a insistir, y a convertir "no" en supervivencia. Hoy construyo productos y sistemas de innovación con bootstrapping real: sin capital externo, con recursividad, colaboración y código con mis amigos los Devs.',
    verRecorrido: 'Ver el recorrido',
    trabajarConmigo: 'Trabajar conmigo',
    fotoPerfil: 'Foto de perfil',
    stat1: '+12 años en tech e innovación',
    stat2: '+9 incubaciones',
    stat3: 'Bootstrapping puro',
    stat4: 'IA + Internet como igualador',
  },
  dna: {
    p1: 'No enseño desde un salón de clases. Construyo desde la experiencia empírica. Crecí entendiendo algo incómodo: el sistema rara vez está diseñado para hacerte libre; está diseñado para hacerte funcional. Esa revelación no me volvió cínico, me volvió intencional: si la estructura no ayuda, entonces se diseña una nueva.',
    p2: 'Creo en una mentalidad autodidacta, aprender por Ósmosis y en la tecnología como palanca de movilidad. La innovación no es "ideas lindas", es ejecución bajo restricciones.',
    quote: '"Internet es el Motor de generación de Riqueza más grande que jamás haya existido."',
  },
  timeline: {
    chip: 'Recorrido',
    title: 'El camino de un builder',
    items: [
      {
        year: 'Inicio',
        title: 'El MBA de la calle',
        description: 'A los 3 años vendía con mi padre en Santiago. Aprendí trabajo duro, resiliencia y el arte de vender para sobrevivir.',
        chip: 'Santiago, Chile',
      },
      {
        year: 'Revelación',
        title: 'El sistema y la libertad',
        description: 'Entendí temprano que jugar "correcto" no siempre significa ganar. Empecé a buscar modelos mentales, finanzas, y construcción de valor desde cero. Chile, uno de los países más desiguales del mundo, me enseñó que las reglas del juego están escritas por otros.',
        chip: 'Filosofía Kiyosaki y Tim Ferris',
      },
      {
        year: 'La cancha',
        title: 'Construir > opinar',
        description: 'Sin títulos rimbombantes, pero con entregables: nodos de valor, productos vivos, y comunidades activas. La obsesión no fue obtener validación académica, sino validación de mercado.',
        chip: 'Bootstrapping',
      },
      {
        year: 'Hoy',
        title: 'Arquitectura de ecosistemas',
        description: 'Pienso en sistemas completos: producto, distribución, automatización, comunidad y narrativa. Internet + IA como motor para multiplicar capacidad, no para reemplazar humanidad.',
        chip: 'IA + Internet',
      },
    ],
  },
  projects: {
    chip: 'La Cancha',
    title: 'Lo construido',
    verProyecto: 'Ver proyecto',
    enEjecucion: 'en ejecución',
    items: [
      { name: 'Pixelbile', description: 'Diseño responsive en HTML5 desde cero, pensado dispositivo por dispositivo.' },
      { name: 'Developbile', description: 'Infraestructura y desarrollo de alto nivel para productos reales.' },
      { name: 'OnePageCard', description: 'Presencia digital en una sola página, sin humo.' },
      { name: 'Tus Fondas App', description: 'El primer directorio de Fondas en Chile.' },
      { name: 'Kulko App', description: 'Micro e-commerce que redirecciona ventas por WhatsApp.' },
      { name: 'Perceivo AI Agency', description: 'Orquestación de agentes y automatización inteligente.' },
      { name: 'Autonoma AI', description: 'Automatización inteligente de procesos empresariales.' },
      { name: 'eCommy AI', description: 'El futuro del personal shopper con IA.' },
      { name: 'Protolylat', description: 'La evolución de Pixelbile con Developbile: laboratorio de productos.' },
      { name: 'Empowered Night', description: 'El punto de encuentro de la resistencia creativa y makers.' },
    ],
  },
  stack: {
    chip: 'Stack Tech',
    title: 'Construyendo con las herramientas de frontera',
    subtitle: 'Cada herramienta elegida por su capacidad de ejecución, no por hype.',
    categories: [
      {
        category: 'Frontend & Design',
        items: [
          { name: 'Next.js 16', useCase: 'Protolylat, OnePageCard, todas las apps' },
          { name: 'React 19', useCase: 'UI reactiva en cada producto' },
          { name: 'Tailwind CSS', useCase: 'Estilos rápidos y consistentes' },
          { name: 'shadcn/ui', useCase: 'Componentes accesibles y elegantes' },
          { name: 'Framer Motion', useCase: 'Animaciones de esta página' },
          { name: 'v0 by Vercel', useCase: 'Prototipado ultra rápido' },
        ],
      },
      {
        category: 'Backend & Infrastructure',
        items: [
          { name: 'Node.js', useCase: 'APIs, microservicios, tooling' },
          { name: 'Python', useCase: 'Agentes IA, scraping, data' },
          { name: 'Vercel SDK', useCase: 'Deploy instantáneo' },
          { name: 'Vercel / Netlify / DO', useCase: 'Hosting multi-cloud' },
          { name: 'Supabase', useCase: 'Auth + DB en tiempo real' },
          { name: 'Typescript', useCase: 'Tipado estricto en todo el stack' },
        ],
      },
      {
        category: 'AI & Automation',
        items: [
          { name: 'LangChain', useCase: 'Orquestación de agentes' },
          { name: 'n8n', useCase: 'Workflows de automatización' },
          { name: 'OpenAI SDK', useCase: 'GPT en producción' },
          { name: 'ChatKit by OpenAI', useCase: 'Interfaces conversacionales' },
          { name: 'Vercel AI SDK', useCase: 'Streaming y tool calling' },
          { name: 'Embeddings', useCase: 'Incrustación de datos' },
          { name: 'RAG', useCase: 'Recuperación aumentada contextual' },
        ],
      },
      {
        category: 'LLMs de Frontera',
        items: [
          { name: 'Claude 4.6 Sonnet', useCase: 'Código, análisis profundo' },
          { name: 'Gemini 3.0 Pro', useCase: 'Multimodal, contexto largo' },
          { name: 'GPT-5.2', useCase: 'Razonamiento avanzado' },
        ],
      },
      {
        category: 'E-commerce & Tools',
        items: [
          { name: 'Medusa JS', useCase: 'eCommy, headless commerce' },
          { name: 'WhatsApp Business API', useCase: 'Kulko App, ventas directas' },
          { name: 'Stripe', useCase: 'Pagos sin fricción' },
          { name: 'Meta Ads API', useCase: 'Crecimiento orgánico + paid' },
        ],
      },
      {
        category: 'Development Tools',
        items: [
          { name: 'GitHub', useCase: 'Versionamiento de todo' },
          { name: 'Notion', useCase: 'Documentación y ops' },
          { name: 'Perplexity AI', useCase: 'Research acelerado' },
          { name: 'Antigravity', useCase: 'Herramientas internas' },
          { name: 'Windsurf', useCase: 'Desarrollo AI-first' },
          { name: 'Replit', useCase: 'Prototipos rápidos' },
          { name: 'Claude Code', useCase: 'Experto en grandes bases de código' },
          { name: 'GPT 5.3 Codex', useCase: 'Instrucciones a código limpio y sin errores' },
        ],
      },
    ],
  },
  shipFast: {
    chip: 'Ship Fast',
    title: 'Ship Fast: Edición Latina (Orlando)',
    description: 'Importamos el mindset de innovación de Silicon Valley y lo adaptamos a la realidad Latina',
    items: [
      'Sprint intensivo de 54 horas',
      'Problema claro, cliente real',
      'Prototipo rápido con Vibe Coding',
      'Demo final con feedback',
      'Metodología Silicon Valley adaptada a Latam',
    ],
    formTitle: 'Aplica a Ship Fast',
    formDescription: 'Cuéntanos qué estás construyendo.',
    formText: 'Para aplicar, por favor completa el formulario al final de la página. Queremos conocerte mejor y entender qué estás construyendo.',
    formButton: 'Ir al Formulario de Aplicación',
  },
  footerCta: {
    chip: 'Trabajemos',
    title: 'Si quieres construir algo real, empieza por aquí',
    cards: [
      {
        title: 'Para Emprendedores',
        description: 'Validación, producto, y go-to-market sin fantasías.',
        cta: 'Agendar consultoría',
      },
      {
        title: 'Para Equipos/Empresas',
        description: 'Sistemas de automatización e IA aplicados a operación real.',
        cta: 'Ver casos de éxito',
      },
      {
        title: 'Para Builders',
        description: 'Ejecución, diseño de producto, y disciplina de shipping.',
        cta: 'Unirme a la comunidad',
      },
    ],
  },
  footer: {
    text: 'Santiago ↔ Internet. Construyendo con código, comunidad y obsesión por aprender.',
    credit: '© 2026 · Hecho con Next.js, café y obsesión',
  },
  orderForm: {
    intro: {
      title1: 'Construyamos',
      title2: 'algo real.',
      description: 'Si quieres validar una idea, escalar tu producto o implementar automatización inteligente, comienza por aquí.',
      button: 'Empezar ahora',
    },
    success: {
      title: 'Solicitud enviada.',
      description: 'Hemos recibido tu información. Analizaremos tu caso y nos pondremos en contacto contigo a la brevedad.',
      back: 'Volver al inicio',
    },
    progress: {
      review: 'Revisión Final',
      phase: 'Fase',
      of: 'de',
    },
    summary: {
      title: 'Confirma los datos',
      name: 'Nombre',
      contact: 'Contacto',
      profile: 'Perfil',
      project: 'Proyecto / Comentarios',
    },
    buttons: {
      back: 'Atrás',
      next: 'Siguiente',
      submit: 'Enviar Solicitud',
      sending: 'Enviando...',
    },
    questions: [
      { text: '¿Cuál es tu nombre?', description: 'Para saber a quién nos dirigimos.', placeholder: 'Nombre completo' },
      { text: 'Tu correo electrónico', description: 'Donde te enviaremos la información.', placeholder: 'tu@email.com' },
      { text: 'WhatsApp (Opcional)', description: 'Si prefieres una comunicación más ágil.', placeholder: '+56 9 ...' },
      { text: '¿Cuál es tu perfil?', description: 'Selecciona la opción que mejor describe tu rol actual.' },
      { text: '¿Qué estás construyendo?', description: 'Cuéntanos sobre tu proyecto, idea o el desafío técnico que tienes.', placeholder: 'Estoy desarrollando una plataforma para... / Necesito automatizar...' },
    ],
    roles: [
      { value: 'dueno-negocio', display: 'Dueño de Negocio' },
      { value: 'emprendedor', display: 'Emprendedor' },
      { value: 'profesional', display: 'Profesional' },
      { value: 'empleado', display: 'Empleado' },
      { value: 'estudiante', display: 'Estudiante / Maker' },
    ],
    emailError: '⚠️ El formato del correo no es válido.',
    sendError: 'Hubo un error al enviar. Por favor, intenta de nuevo.',
  },
}

const en: Translations = {
  nav: {
    recorrido: 'Journey',
    laCancha: 'The Field',
    stackTech: 'Tech Stack',
    shipFast: 'Ship Fast',
    contacto: 'Contact',
    aplicarShipFast: 'Apply to Ship Fast',
    cerrarMenu: 'Close menu',
    abrirMenu: 'Open menu',
    navegacion: 'Main navigation',
    builderLatino: 'Builder',
    builderSuffix: 'Latino',
  },
  hero: {
    builderLatino: 'Builder Latino',
    santiago: 'Santiago, Chile',
    title1: 'From street vendor to',
    title2: 'ecosystem architect',
    description: 'I was born in Santiago, Chile, far from Silicon Valley, in a country where the playing field is often tilted. My first "MBA" was not a diploma: it was the streets, at age 3, selling alongside my father and learning to hold eye contact, to persist, and to turn "no" into survival. Today I build products and innovation systems with real bootstrapping: no outside capital, with recursion, collaboration, and code with my friends the Devs.',
    verRecorrido: 'See the journey',
    trabajarConmigo: 'Work with me',
    fotoPerfil: 'Profile photo',
    stat1: '+12 years in tech & innovation',
    stat2: '+9 incubations',
    stat3: 'Pure bootstrapping',
    stat4: 'AI + Internet as equalizer',
  },
  dna: {
    p1: 'I don\'t teach from a classroom. I build from empirical experience. I grew up understanding something uncomfortable: the system is rarely designed to make you free; it is designed to make you functional. That revelation didn\'t make me cynical, it made me intentional: if the structure doesn\'t help, then design a new one.',
    p2: 'I believe in a self-taught mindset, learning by osmosis, and technology as a mobility lever. Innovation is not "pretty ideas", it\'s execution under constraints.',
    quote: '"The Internet is the greatest Wealth-generation Engine that has ever existed."',
  },
  timeline: {
    chip: 'Journey',
    title: 'The path of a builder',
    items: [
      {
        year: 'Start',
        title: 'The Street MBA',
        description: 'At age 3 I sold with my father in Santiago. I learned hard work, resilience, and the art of selling to survive.',
        chip: 'Santiago, Chile',
      },
      {
        year: 'Revelation',
        title: 'The system and freedom',
        description: 'I understood early that playing "right" doesn\'t always mean winning. I started seeking mental models, finance, and value-building from scratch. Chile, one of the most unequal countries in the world, taught me that the rules of the game are written by others.',
        chip: 'Kiyosaki & Tim Ferris philosophy',
      },
      {
        year: 'The field',
        title: 'Build > opine',
        description: 'No fancy titles, but deliverables: value nodes, live products, and active communities. The obsession was not academic validation, but market validation.',
        chip: 'Bootstrapping',
      },
      {
        year: 'Today',
        title: 'Ecosystem architecture',
        description: 'I think in complete systems: product, distribution, automation, community, and narrative. Internet + AI as an engine to multiply capacity, not replace humanity.',
        chip: 'AI + Internet',
      },
    ],
  },
  projects: {
    chip: 'The Field',
    title: 'What\'s been built',
    verProyecto: 'View project',
    enEjecucion: 'in progress',
    items: [
      { name: 'Pixelbile', description: 'Responsive HTML5 design from scratch, thought device by device.' },
      { name: 'Developbile', description: 'High-level infrastructure and development for real products.' },
      { name: 'OnePageCard', description: 'Digital presence on a single page, no fluff.' },
      { name: 'Tus Fondas App', description: 'The first directory of Fondas in Chile.' },
      { name: 'Kulko App', description: 'Micro e-commerce redirecting sales through WhatsApp.' },
      { name: 'Perceivo AI Agency', description: 'Agent orchestration and intelligent automation.' },
      { name: 'Autonoma AI', description: 'Intelligent automation of business processes.' },
      { name: 'eCommy AI', description: 'The future of AI personal shopping.' },
      { name: 'Protolylat', description: 'The evolution of Pixelbile with Developbile: a product lab.' },
      { name: 'Empowered Night', description: 'The meeting point for creative resistance and makers.' },
    ],
  },
  stack: {
    chip: 'Tech Stack',
    title: 'Building with frontier tools',
    subtitle: 'Every tool chosen for execution capability, not hype.',
    categories: [
      {
        category: 'Frontend & Design',
        items: [
          { name: 'Next.js 16', useCase: 'Protolylat, OnePageCard, all apps' },
          { name: 'React 19', useCase: 'Reactive UI in every product' },
          { name: 'Tailwind CSS', useCase: 'Fast, consistent styling' },
          { name: 'shadcn/ui', useCase: 'Accessible and elegant components' },
          { name: 'Framer Motion', useCase: 'Animations on this page' },
          { name: 'v0 by Vercel', useCase: 'Ultra-fast prototyping' },
        ],
      },
      {
        category: 'Backend & Infrastructure',
        items: [
          { name: 'Node.js', useCase: 'APIs, microservices, tooling' },
          { name: 'Python', useCase: 'AI agents, scraping, data' },
          { name: 'Vercel SDK', useCase: 'Instant deploy' },
          { name: 'Vercel / Netlify / DO', useCase: 'Multi-cloud hosting' },
          { name: 'Supabase', useCase: 'Auth + real-time DB' },
          { name: 'Typescript', useCase: 'Strict typing across the stack' },
        ],
      },
      {
        category: 'AI & Automation',
        items: [
          { name: 'LangChain', useCase: 'Agent orchestration' },
          { name: 'n8n', useCase: 'Automation workflows' },
          { name: 'OpenAI SDK', useCase: 'GPT in production' },
          { name: 'ChatKit by OpenAI', useCase: 'Conversational interfaces' },
          { name: 'Vercel AI SDK', useCase: 'Streaming and tool calling' },
          { name: 'Embeddings', useCase: 'Data embedding' },
          { name: 'RAG', useCase: 'Contextual augmented retrieval' },
        ],
      },
      {
        category: 'Frontier LLMs',
        items: [
          { name: 'Claude 4.6 Sonnet', useCase: 'Code, deep analysis' },
          { name: 'Gemini 3.0 Pro', useCase: 'Multimodal, long context' },
          { name: 'GPT-5.2', useCase: 'Advanced reasoning' },
        ],
      },
      {
        category: 'E-commerce & Tools',
        items: [
          { name: 'Medusa JS', useCase: 'eCommy, headless commerce' },
          { name: 'WhatsApp Business API', useCase: 'Kulko App, direct sales' },
          { name: 'Stripe', useCase: 'Frictionless payments' },
          { name: 'Meta Ads API', useCase: 'Organic + paid growth' },
        ],
      },
      {
        category: 'Development Tools',
        items: [
          { name: 'GitHub', useCase: 'Version control for everything' },
          { name: 'Notion', useCase: 'Documentation and ops' },
          { name: 'Perplexity AI', useCase: 'Accelerated research' },
          { name: 'Antigravity', useCase: 'Internal tools' },
          { name: 'Windsurf', useCase: 'AI-first development' },
          { name: 'Replit', useCase: 'Fast prototyping' },
          { name: 'Claude Code', useCase: 'Expert in large codebases' },
          { name: 'GPT 5.3 Codex', useCase: 'Instructions to clean, error-free code' },
        ],
      },
    ],
  },
  shipFast: {
    chip: 'Ship Fast',
    title: 'Ship Fast: Latin Edition (Orlando)',
    description: 'We import the Silicon Valley innovation mindset and adapt it to the Latin reality',
    items: [
      'Intensive 54-hour sprint',
      'Clear problem, real client',
      'Fast prototype with Vibe Coding',
      'Final demo with feedback',
      'Silicon Valley methodology adapted to Latam',
    ],
    formTitle: 'Apply to Ship Fast',
    formDescription: 'Tell us what you\'re building.',
    formText: 'To apply, please complete the form at the bottom of the page. We want to get to know you better and understand what you\'re building.',
    formButton: 'Go to Application Form',
  },
  footerCta: {
    chip: 'Let\'s work',
    title: 'If you want to build something real, start here',
    cards: [
      {
        title: 'For Entrepreneurs',
        description: 'Validation, product, and go-to-market without fantasies.',
        cta: 'Schedule a consultation',
      },
      {
        title: 'For Teams/Companies',
        description: 'Automation and AI systems applied to real operations.',
        cta: 'View success stories',
      },
      {
        title: 'For Builders',
        description: 'Execution, product design, and shipping discipline.',
        cta: 'Join the community',
      },
    ],
  },
  footer: {
    text: 'Santiago ↔ Internet. Building with code, community, and an obsession for learning.',
    credit: '© 2026 · Made with Next.js, coffee and obsession',
  },
  orderForm: {
    intro: {
      title1: 'Let\'s build',
      title2: 'something real.',
      description: 'If you want to validate an idea, scale your product, or implement intelligent automation, start here.',
      button: 'Start now',
    },
    success: {
      title: 'Application sent.',
      description: 'We have received your information. We will analyze your case and contact you shortly.',
      back: 'Back to start',
    },
    progress: {
      review: 'Final Review',
      phase: 'Step',
      of: 'of',
    },
    summary: {
      title: 'Confirm your data',
      name: 'Name',
      contact: 'Contact',
      profile: 'Profile',
      project: 'Project / Comments',
    },
    buttons: {
      back: 'Back',
      next: 'Next',
      submit: 'Send Application',
      sending: 'Sending...',
    },
    questions: [
      { text: 'What is your name?', description: 'So we know who we\'re talking to.', placeholder: 'Full name' },
      { text: 'Your email', description: 'Where we\'ll send you the information.', placeholder: 'you@email.com' },
      { text: 'WhatsApp (Optional)', description: 'If you prefer faster communication.', placeholder: '+1 234 ...' },
      { text: 'What is your profile?', description: 'Select the option that best describes your current role.' },
      { text: 'What are you building?', description: 'Tell us about your project, idea, or technical challenge.', placeholder: 'I\'m developing a platform to... / I need to automate...' },
    ],
    roles: [
      { value: 'dueno-negocio', display: 'Business Owner' },
      { value: 'emprendedor', display: 'Entrepreneur' },
      { value: 'profesional', display: 'Professional' },
      { value: 'empleado', display: 'Employee' },
      { value: 'estudiante', display: 'Student / Maker' },
    ],
    emailError: '⚠️ Email format is not valid.',
    sendError: 'There was an error sending. Please try again.',
  },
}

const pt: Translations = {
  nav: {
    recorrido: 'Jornada',
    laCancha: 'O Campo',
    stackTech: 'Stack Tech',
    shipFast: 'Ship Fast',
    contacto: 'Contato',
    aplicarShipFast: 'Aplicar para Ship Fast',
    cerrarMenu: 'Fechar menu',
    abrirMenu: 'Abrir menu',
    navegacion: 'Navegação principal',
    builderLatino: 'Builder',
    builderSuffix: 'Latino',
  },
  hero: {
    builderLatino: 'Builder Latino',
    santiago: 'Santiago, Chile',
    title1: 'De vendedor ambulante a arquiteto de',
    title2: 'ecossistemas',
    description: 'Nasci em Santiago do Chile, longe do Vale do Silício, em um país onde o campo geralmente vem inclinado. Meu primeiro "MBA" não foi um diploma: foi a rua, aos 3 anos, vendendo junto com meu pai e aprendendo a sustentar o olhar, a insistir e a transformar "não" em sobrevivência. Hoje construo produtos e sistemas de inovação com bootstrapping real: sem capital externo, com recursividade, colaboração e código com meus amigos os Devs.',
    verRecorrido: 'Ver a jornada',
    trabajarConmigo: 'Trabalhe comigo',
    fotoPerfil: 'Foto de perfil',
    stat1: '+12 anos em tech e inovação',
    stat2: '+9 incubações',
    stat3: 'Bootstrapping puro',
    stat4: 'IA + Internet como equalizador',
  },
  dna: {
    p1: 'Não ensino de uma sala de aula. Construo a partir da experiência empírica. Cresci entendendo algo desconfortável: o sistema raramente é projetado para te fazer livre; é projetado para te fazer funcional. Essa revelação não me tornou cínico, me tornou intencional: se a estrutura não ajuda, então projeta-se uma nova.',
    p2: 'Acredito em uma mentalidade autodidata, aprender por Osmose e na tecnologia como alavanca de mobilidade. Inovação não são "ideias bonitas", é execução sob restrições.',
    quote: '"A Internet é o maior Motor de geração de Riqueza que já existiu."',
  },
  timeline: {
    chip: 'Jornada',
    title: 'O caminho de um builder',
    items: [
      {
        year: 'Início',
        title: 'O MBA da rua',
        description: 'Aos 3 anos vendia com meu pai em Santiago. Aprendi trabalho duro, resiliência e a arte de vender para sobreviver.',
        chip: 'Santiago, Chile',
      },
      {
        year: 'Revelação',
        title: 'O sistema e a liberdade',
        description: 'Entendi cedo que jogar "correto" nem sempre significa ganhar. Comecei a buscar modelos mentais, finanças e construção de valor do zero. O Chile, um dos países mais desiguais do mundo, me ensinou que as regras do jogo são escritas por outros.',
        chip: 'Filosofia Kiyosaki e Tim Ferris',
      },
      {
        year: 'O campo',
        title: 'Construir > opinar',
        description: 'Sem títulos pomposos, mas com entregáveis: nós de valor, produtos vivos e comunidades ativas. A obsessão não foi obter validação acadêmica, mas validação de mercado.',
        chip: 'Bootstrapping',
      },
      {
        year: 'Hoje',
        title: 'Arquitetura de ecossistemas',
        description: 'Penso em sistemas completos: produto, distribuição, automação, comunidade e narrativa. Internet + IA como motor para multiplicar capacidade, não para substituir humanidade.',
        chip: 'IA + Internet',
      },
    ],
  },
  projects: {
    chip: 'O Campo',
    title: 'O construído',
    verProyecto: 'Ver projeto',
    enEjecucion: 'em execução',
    items: [
      { name: 'Pixelbile', description: 'Design responsivo em HTML5 do zero, pensado dispositivo por dispositivo.' },
      { name: 'Developbile', description: 'Infraestrutura e desenvolvimento de alto nível para produtos reais.' },
      { name: 'OnePageCard', description: 'Presença digital em uma página, sem enrolação.' },
      { name: 'Tus Fondas App', description: 'O primeiro diretório de Fondas no Chile.' },
      { name: 'Kulko App', description: 'Micro e-commerce que redireciona vendas pelo WhatsApp.' },
      { name: 'Perceivo AI Agency', description: 'Orquestração de agentes e automação inteligente.' },
      { name: 'Autonoma AI', description: 'Automação inteligente de processos empresariais.' },
      { name: 'eCommy AI', description: 'O futuro do personal shopper com IA.' },
      { name: 'Protolylat', description: 'A evolução da Pixelbile com Developbile: laboratório de produtos.' },
      { name: 'Empowered Night', description: 'O ponto de encontro da resistência criativa e makers.' },
    ],
  },
  stack: {
    chip: 'Stack Tech',
    title: 'Construindo com as ferramentas de fronteira',
    subtitle: 'Cada ferramenta escolhida pela capacidade de execução, não por hype.',
    categories: [
      {
        category: 'Frontend & Design',
        items: [
          { name: 'Next.js 16', useCase: 'Protolylat, OnePageCard, todos os apps' },
          { name: 'React 19', useCase: 'UI reativa em cada produto' },
          { name: 'Tailwind CSS', useCase: 'Estilos rápidos e consistentes' },
          { name: 'shadcn/ui', useCase: 'Componentes acessíveis e elegantes' },
          { name: 'Framer Motion', useCase: 'Animações desta página' },
          { name: 'v0 by Vercel', useCase: 'Prototipagem ultra rápida' },
        ],
      },
      {
        category: 'Backend & Infrastructure',
        items: [
          { name: 'Node.js', useCase: 'APIs, microsserviços, tooling' },
          { name: 'Python', useCase: 'Agentes IA, scraping, dados' },
          { name: 'Vercel SDK', useCase: 'Deploy instantâneo' },
          { name: 'Vercel / Netlify / DO', useCase: 'Hospedagem multi-cloud' },
          { name: 'Supabase', useCase: 'Auth + DB em tempo real' },
          { name: 'Typescript', useCase: 'Tipagem estrita em todo o stack' },
        ],
      },
      {
        category: 'AI & Automation',
        items: [
          { name: 'LangChain', useCase: 'Orquestração de agentes' },
          { name: 'n8n', useCase: 'Workflows de automação' },
          { name: 'OpenAI SDK', useCase: 'GPT em produção' },
          { name: 'ChatKit by OpenAI', useCase: 'Interfaces conversacionais' },
          { name: 'Vercel AI SDK', useCase: 'Streaming e tool calling' },
          { name: 'Embeddings', useCase: 'Incrustação de dados' },
          { name: 'RAG', useCase: 'Recuperação aumentada contextual' },
        ],
      },
      {
        category: 'LLMs de Fronteira',
        items: [
          { name: 'Claude 4.6 Sonnet', useCase: 'Código, análise profunda' },
          { name: 'Gemini 3.0 Pro', useCase: 'Multimodal, contexto longo' },
          { name: 'GPT-5.2', useCase: 'Raciocínio avançado' },
        ],
      },
      {
        category: 'E-commerce & Tools',
        items: [
          { name: 'Medusa JS', useCase: 'eCommy, comércio headless' },
          { name: 'WhatsApp Business API', useCase: 'Kulko App, vendas diretas' },
          { name: 'Stripe', useCase: 'Pagamentos sem atrito' },
          { name: 'Meta Ads API', useCase: 'Crescimento orgânico + pago' },
        ],
      },
      {
        category: 'Development Tools',
        items: [
          { name: 'GitHub', useCase: 'Versionamento de tudo' },
          { name: 'Notion', useCase: 'Documentação e operações' },
          { name: 'Perplexity AI', useCase: 'Pesquisa acelerada' },
          { name: 'Antigravity', useCase: 'Ferramentas internas' },
          { name: 'Windsurf', useCase: 'Desenvolvimento AI-first' },
          { name: 'Replit', useCase: 'Protótipos rápidos' },
          { name: 'Claude Code', useCase: 'Especialista em grandes bases de código' },
          { name: 'GPT 5.3 Codex', useCase: 'Instruções para código limpo e sem erros' },
        ],
      },
    ],
  },
  shipFast: {
    chip: 'Ship Fast',
    title: 'Ship Fast: Edição Latina (Orlando)',
    description: 'Importamos a mentalidade de inovação do Vale do Silício e a adaptamos à realidade Latina',
    items: [
      'Sprint intensivo de 54 horas',
      'Problema claro, cliente real',
      'Protótipo rápido com Vibe Coding',
      'Demo final com feedback',
      'Metodologia Vale do Silício adaptada à América Latina',
    ],
    formTitle: 'Aplique para Ship Fast',
    formDescription: 'Conte-nos o que você está construindo.',
    formText: 'Para aplicar, preencha o formulário no final da página. Queremos conhecer você melhor e entender o que está construindo.',
    formButton: 'Ir para o Formulário de Aplicação',
  },
  footerCta: {
    chip: 'Vamos trabalhar',
    title: 'Se você quer construir algo real, comece por aqui',
    cards: [
      {
        title: 'Para Empreendedores',
        description: 'Validação, produto e go-to-market sem fantasia.',
        cta: 'Agendar consultoria',
      },
      {
        title: 'Para Equipes/Empresas',
        description: 'Sistemas de automação e IA aplicados à operação real.',
        cta: 'Ver casos de sucesso',
      },
      {
        title: 'Para Builders',
        description: 'Execução, design de produto e disciplina de shipping.',
        cta: 'Entrar na comunidade',
      },
    ],
  },
  footer: {
    text: 'Santiago ↔ Internet. Construindo com código, comunidade e obsessão por aprender.',
    credit: '© 2026 · Feito com Next.js, café e obsessão',
  },
  orderForm: {
    intro: {
      title1: 'Vamos construir',
      title2: 'algo real.',
      description: 'Se você quer validar uma ideia, escalar seu produto ou implementar automação inteligente, comece por aqui.',
      button: 'Começar agora',
    },
    success: {
      title: 'Solicitação enviada.',
      description: 'Recebemos suas informações. Analisaremos seu caso e entraremos em contato em breve.',
      back: 'Voltar ao início',
    },
    progress: {
      review: 'Revisão Final',
      phase: 'Fase',
      of: 'de',
    },
    summary: {
      title: 'Confirme os dados',
      name: 'Nome',
      contact: 'Contato',
      profile: 'Perfil',
      project: 'Projeto / Comentários',
    },
    buttons: {
      back: 'Voltar',
      next: 'Próximo',
      submit: 'Enviar Solicitação',
      sending: 'Enviando...',
    },
    questions: [
      { text: 'Qual é o seu nome?', description: 'Para saber a quem nos dirigimos.', placeholder: 'Nome completo' },
      { text: 'Seu e-mail', description: 'Onde enviaremos as informações.', placeholder: 'seu@email.com' },
      { text: 'WhatsApp (Opcional)', description: 'Se prefere uma comunicação mais ágil.', placeholder: '+55 11 ...' },
      { text: 'Qual é o seu perfil?', description: 'Selecione a opção que melhor descreve seu cargo atual.' },
      { text: 'O que você está construindo?', description: 'Conte-nos sobre seu projeto, ideia ou desafio técnico.', placeholder: 'Estou desenvolvendo uma plataforma para... / Preciso automatizar...' },
    ],
    roles: [
      { value: 'dueno-negocio', display: 'Dono de Negócio' },
      { value: 'emprendedor', display: 'Empreendedor' },
      { value: 'profesional', display: 'Profissional' },
      { value: 'empleado', display: 'Funcionário' },
      { value: 'estudiante', display: 'Estudante / Maker' },
    ],
    emailError: '⚠️ O formato do e-mail não é válido.',
    sendError: 'Ocorreu um erro ao enviar. Por favor, tente novamente.',
  },
}

const all = { es, en, pt }

interface LangContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
  }, [])

  const t = useCallback((key: string): any => {
    const keys = key.split('.')
    let value: any = all[language]
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    return value ?? key
  }, [language])

  return (
    <LangContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
