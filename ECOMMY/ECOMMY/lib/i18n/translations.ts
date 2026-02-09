// // Definición de tipos para las traducciones
// export type TranslationKey =
//   | "header"
//   | "hero"
//   | "features"
//   | "howItWorks"
//   | "technology"
//   | "capabilities"
//   | "benefits"
//   | "integration"
//   | "pricing"
//   | "secondaryHero"
//   | "contact"
//   | "cta"
//   | "footer"

// export type NestedTranslations = {
//   [key: string]: string | NestedTranslations | string[] 
// }

// export type Translations = {
//   [key in TranslationKey]: NestedTranslations
// }

// // Traducciones en español (idioma por defecto)
// export const es: Translations = {
//   header: {
//     inicio: "Inicio",
//     caracteristicas: "Características",
//     comoFunciona: "Cómo Funciona",
//     tecnologia: "Tecnología",
//     capacidades: "Capacidades",
//     beneficios: "Beneficios",
//     precios: "Precios",
//     contacto: "Contacto",
//     iniciarSesion: "Iniciar Sesión",
//     solicitarDemo: "Solicitar Demo",
//   },
//   hero: {
//     title: "Agentes AI para eCommerce: Experiencia de compra conversacional",
//     subtitle:
//       "Transforme su tienda online con asistentes inteligentes que aumentan conversiones y mejoran la experiencia del cliente",
//     demoButton: "Solicitar Demo",
//     featuresButton: "Ver Características",
//   },
//   features: {
//     title: "Características Principales",
//     subtitle: "Nuestros agentes AI transforman la experiencia de compra en su tienda online",
//     search: {
//       title: "Optimización de Búsquedas",
//       description: "Resultados precisos y relevantes basados en la intención del usuario, no solo en palabras clave.",
//     },
//     conversion: {
//       title: "Mejora de Conversiones",
//       description: "Incremento demostrado en tasas de conversión gracias a recomendaciones personalizadas.",
//     },  
//     support: {
//       title: "Automatización de Atención",
//       description: "Asistencia disponible 24/7 para resolver dudas y guiar a los clientes en su proceso de compra.",
//     },
//   },
//   howItWorks: {
//     title: "Cómo Funciona",
//     subtitle: "Una experiencia de compra conversacional que guía a sus clientes desde la búsqueda hasta la compra",
//   },
//   technology: {
//     title: "Tecnología Avanzada",
//     subtitle: "Potenciado por los últimos avances en inteligencia artificial y procesamiento del lenguaje natural",
//     languageModel: {
//       title: "Modelo de Lenguaje Contextual",
//       description:
//         "Comprende el contexto y la intención detrás de las consultas de los usuarios para ofrecer respuestas precisas.",
//     },
//     searchEngine: {
//       title: "Motor de Búsqueda Semántica",
//       description: "Va más allá de las palabras clave para entender el significado y la intención de las búsquedas.",
//     },
//     recommendationSystem: {
//       title: "Sistema de Recomendación Híbrido",
//       description: "Combina análisis de comportamiento y preferencias para ofrecer recomendaciones personalizadas.",
//     },
//     advancedSearch: {
//       title: "Búsqueda Avanzada de Productos",
//       description: "Filtrado inteligente que ayuda a los usuarios a encontrar exactamente lo que buscan.",
//     },
//     trackingApi: {
//       title: "Integración API de Tracking",
//       description: "Conexión en tiempo real con proveedores de envío para seguimiento de pedidos actualizado.",
//     },
//   },
//   capabilities: {
//     title: "Capacidades",
//     subtitle: "Descubra todo lo que nuestros agentes AI pueden hacer por su tienda online",
//     recommendations: {
//       title: "Recomendaciones Personalizadas",
//       description: "Sugerencias basadas en preferencias y comportamiento del usuario.",
//     },
//     comparison: {
//       title: "Comparación Inteligente",
//       description: "Análisis lado a lado de productos para facilitar decisiones.",
//     },
//     assistant: {
//       title: "Asistente Conversacional",
//       description: "Interacción natural que guía el proceso de compra.",
//     },
//     tracking: {
//       title: "Seguimiento de Envíos",
//       description: "Información en tiempo real sobre el estado de pedidos.",
//     },
//     learning: "Nuestros agentes AI aprenden continuamente para ofrecer una experiencia cada vez más personalizada",
//   },
//   benefits: {
//     title: "Beneficios",
//     subtitle: "Ventajas para su negocio y para sus clientes",
//     forBusiness: {
//       title: "Para el eCommerce",
//       items: [
//         "Mejora en experiencia del usuario",
//         "Reducción del abandono del carrito",
//         "Incremento en tasa de conversión",
//         "Mayor satisfacción del cliente",
//         "Menor carga en atención humana",
//       ],
//     },
//     forUsers: {
//       title: "Para el Usuario",
//       items: [
//         "Experiencia intuitiva y conversacional",
//         "Acceso rápido a información detallada",
//         "Proceso de checkout simplificado",
//         "Seguimiento eficiente de pedidos",
//         "Asistencia disponible 24/7",
//       ],
//     },
//   },
//   integration: {
//     title: "Integraciones",
//     subtitle: "Compatible con las principales plataformas de eCommerce y servicios de envío",
//     ecommerce: {
//       title: "Plataformas eCommerce",
//       platforms: ["Shopify", "WooCommerce", "JumpSeller", "PrestaShop", "Jumpseller", "BigCommerce"],
//     },
//     shipping: {
//       title: "Servicios de Envío",
//       platforms: ["DHL", "FedEx", "UPS", "Correos", "Blue envíos", "GLS"],
//     },
//     viewAll: "Ver todas las integraciones",
//     steps: {
//       title: "Integración en 3 simples pasos",
//       step1: {
//         title: "Conecta tu plataforma",
//         description: "Integración sencilla con tu tienda online existente mediante API o plugins.",
//       },
//       step2: {
//         title: "Personaliza tu asistente",
//         description: "Configura el comportamiento y apariencia de tu agente AI según tus necesidades.",
//       },
//       step3: {
//         title: "Activa y monitorea",
//         description: "Lanza tu asistente y analiza su rendimiento en tiempo real.",
//       },
//       support:
//         "¿Necesitas ayuda con la integración? Nuestro equipo de soporte está disponible 24/7 para asistirte en todo el proceso.",
//     },
//   },
//   pricing: {
//     title: "Planes y Precios",
//     subtitle: "Soluciones flexibles que se adaptan a las necesidades de su negocio",
//     basic: {
//       title: "Básico",
//       price: "99€",
//       description: "Ideal para pequeñas tiendas online",
//       features: [
//         "Asistente AI conversacional",
//         "Búsqueda de productos",
//         "Recomendaciones básicas",
//         "Hasta 1,000 conversaciones/mes",
//         "Soporte por email",
//       ],
//       button: "Comenzar Gratis",
//     },
//     professional: {
//       title: "Profesional",
//       price: "249€",
//       description: "Para tiendas en crecimiento",
//       features: [
//         "Todo lo del plan Básico",
//         "Recomendaciones personalizadas",
//         "Comparación de productos",
//         "Hasta 5,000 conversaciones/mes",
//         "Integración con CRM",
//         "Soporte prioritario",
//       ],
//       button: "Solicitar Demo",
//       recommended: "Recomendado",
//     },
//     enterprise: {
//       title: "Empresarial",
//       price: "Personalizado",
//       description: "Para grandes eCommerce",
//       features: [
//         "Todo lo del plan Profesional",
//         "Conversaciones ilimitadas",
//         "Personalización completa",
//         "Integración API completa",
//         "Análisis avanzado",
//         "Soporte 24/7",
//         "Gestor de cuenta dedicado",
//       ],
//       button: "Contactar",
//     },
//     perMonth: "/mes",
//   },
//   secondaryHero: {
//     title: "Transforma la experiencia de tus clientes hoy mismo",
//     subtitle:
//       "Únete a las empresas líderes que ya están aprovechando el poder de la inteligencia artificial para revolucionar su eCommerce.",
//     features: [
//       "Implementación en menos de 24 horas",
//       "Garantía de satisfacción de 30 días",
//       "Soporte técnico personalizado",
//       "Más de 500 clientes satisfechos",
//     ],
//     startButton: "Comenzar ahora",
//     talkButton: "Hablar con un experto",
//    stats: {
//     satisfaction: { value: "98%", label: "Satisfacción" },
//     conversions: { value: "35%", label: "Aumento en conversiones" },
//     support: { value: "24/7", label: "Soporte disponible" },
//     clients: { value: "500+", label: "Clientes activos" },
//   }
//   },
//   contact: {
//     title: "¿Listo para comenzar?",
//     subtitle: "Cuéntanos sobre tu proyecto y te ayudaremos a elegir la mejor solución",
//     form: {
//       title: "Formulario de contacto",
//       step1: {
//         title: "Cuéntanos sobre ti",
//         name: "Nombre completo",
//         email: "Correo electrónico",
//         company: "Empresa",
//       },
//       step2: {
//         title: "¿Qué plan te interesa?",
//         basic: {
//           title: "Plan Básico",
//           description: "Ideal para pequeñas tiendas online",
//           price: "99€/mes",
//         },
//         professional: {
//           title: "Plan Profesional",
//           description: "Para tiendas en crecimiento",
//           price: "249€/mes",
//         },
//         enterprise: {
//           title: "Plan Empresarial",
//           description: "Para grandes eCommerce",
//           price: "Personalizado",
//         },
//       },
//       step3: {
//         title: "¿Algo más que quieras contarnos?",
//         message: "Mensaje (opcional)",
//         additionalComments: "Comentarios adicionales",
//         additionalCommentsHelp: "¿Alguna necesidad específica o pregunta que tengas?",
//         additionalCommentsNote: "Estos comentarios nos ayudarán a preparar mejor nuestra propuesta para ti.",
//         summary: "Resumen de tu solicitud",
//         name: "Nombre:",
//         email: "Email:",
//         company: "Empresa:",
//         plan: "Plan:",
//       },
//       buttons: {
//         previous: "Anterior",
//         next: "Siguiente",
//         submit: "Enviar solicitud",
//       },
//       success: {
//         title: "¡Gracias por contactarnos!",
//         message: "Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo en breve.",
//         button: "Enviar otro mensaje",
//       },
//     },
//   },
//   cta: {
//     title: "Experiencia de usuario conversacional",
//     subtitle:
//       "Nuestros agentes AI ofrecen una interfaz intuitiva y natural que se adapta a las necesidades de tus clientes en cualquier dispositivo.",
//     platforms: ["Móvil", "Escritorio", "Apps", "Chat"],
//     button: "Transforme su eCommerce",
//     demoButton: "Ver demostración",
//   },
//   footer: {
//     description: "Transformando la experiencia de compra online con agentes inteligentes conversacionales.",
//     product: {
//       title: "Producto",
//       links: ["Características", "Precios", "Integraciones", "Casos de uso"],
//     },
//     resources: {
//       title: "Recursos",
//       links: ["Documentación", "Blog", "Tutoriales", "Soporte"],
//     },
//     company: {
//       title: "Empresa",
//       links: ["Sobre nosotros", "Contacto", "Política de privacidad", "Términos de servicio"],
//     },
//     copyright: "© {year} AI eCommerce. Todos los derechos reservados.",
//   },
// }

// // Traducciones en inglés
// export const en: Translations = {
//   header: {
//     inicio: "Home",
//     caracteristicas: "Features",
//     comoFunciona: "How It Works",
//     tecnologia: "Technology",
//     capacidades: "Capabilities",
//     beneficios: "Benefits",
//     precios: "Pricing",
//     contacto: "Contact",
//     iniciarSesion: "Log In",
//     solicitarDemo: "Request Demo",
//   },
//   hero: {
//     title: "AI Agents for eCommerce: Conversational shopping experience",
//     subtitle:
//       "Transform your online store with intelligent assistants that increase conversions and improve customer experience",
//     demoButton: "Request Demo",
//     featuresButton: "View Features",
//   },
//   features: {
//     title: "Key Features",
//     subtitle: "Our AI agents transform the shopping experience in your online store",
//     search: {
//       title: "Search Optimization",
//       description: "Precise and relevant results based on user intent, not just keywords.",
//     },
//     conversion: {
//       title: "Conversion Improvement",
//       description: "Demonstrated increase in conversion rates thanks to personalized recommendations.",
//     },
//     support: {
//       title: "Support Automation",
//       description: "24/7 assistance to resolve doubts and guide customers in their purchase process.",
//     },
//   },
//   howItWorks: {
//     title: "How It Works",
//     subtitle: "A conversational shopping experience that guides your customers from search to purchase",
//   },
//   technology: {
//     title: "Advanced Technology",
//     subtitle: "Powered by the latest advances in artificial intelligence and natural language processing",
//     languageModel: {
//       title: "Contextual Language Model",
//       description: "Understands the context and intention behind user queries to provide accurate answers.",
//     },
//     searchEngine: {
//       title: "Semantic Search Engine",
//       description: "Goes beyond keywords to understand the meaning and intent of searches.",
//     },
//     recommendationSystem: {
//       title: "Hybrid Recommendation System",
//       description: "Combines behavior analysis and preferences to offer personalized recommendations.",
//     },
//     advancedSearch: {
//       title: "Advanced Product Search",
//       description: "Intelligent filtering that helps users find exactly what they're looking for.",
//     },
//     trackingApi: {
//       title: "Tracking API Integration",
//       description: "Real-time connection with shipping providers for updated order tracking.",
//     },
//   },
//   capabilities: {
//     title: "Capabilities",
//     subtitle: "Discover everything our AI agents can do for your online store",
//     recommendations: {
//       title: "Personalized Recommendations",
//       description: "Suggestions based on user preferences and behavior.",
//     },
//     comparison: {
//       title: "Intelligent Comparison",
//       description: "Side-by-side product analysis to facilitate decisions.",
//     },
//     assistant: {
//       title: "Conversational Assistant",
//       description: "Natural interaction that guides the purchase process.",
//     },
//     tracking: {
//       title: "Shipment Tracking",
//       description: "Real-time information on order status.",
//     },
//     learning: "Our AI agents continuously learn to provide an increasingly personalized experience",
//   },
//   benefits: {
//     title: "Benefits",
//     subtitle: "Advantages for your business and for your customers",
//     forBusiness: {
//       title: "For eCommerce",
//       items: [
//         "Improved user experience",
//         "Reduced cart abandonment",
//         "Increased conversion rate",
//         "Greater customer satisfaction",
//         "Reduced human support load",
//       ],
//     },
//     forUsers: {
//       title: "For Users",
//       items: [
//         "Intuitive and conversational experience",
//         "Quick access to detailed information",
//         "Simplified checkout process",
//         "Efficient order tracking",
//         "24/7 assistance available",
//       ],
//     },
//   },
//   integration: {
//     title: "Integrations",
//     subtitle: "Compatible with major eCommerce platforms and shipping services",
//     ecommerce: {
//       title: "eCommerce Platforms",
//       platforms: ["Shopify", "WooCommerce", "JumpSeller", "PrestaShop", "Jumpseller", "BigCommerce"],
//     },
//     shipping: {
//       title: "Shipping Services",
//       platforms: ["DHL", "FedEx", "UPS", "Correos", "Blue shipping", "GLS"],
//     },
//     viewAll: "View all integrations",
//     steps: {
//       title: "Integration in 3 simple steps",
//       step1: {
//         title: "Connect your platform",
//         description: "Simple integration with your existing online store via API or plugins.",
//       },
//       step2: {
//         title: "Customize your assistant",
//         description: "Configure the behavior and appearance of your AI agent according to your needs.",
//       },
//       step3: {
//         title: "Activate and monitor",
//         description: "Launch your assistant and analyze its performance in real time.",
//       },
//       support: "Need help with integration? Our support team is available 24/7 to assist you throughout the process.",
//     },
//   },
//   pricing: {
//     title: "Plans and Pricing",
//     subtitle: "Flexible solutions that adapt to your business needs",
//     basic: {
//       title: "Basic",
//       price: "€99",
//       description: "Ideal for small online stores",
//       features: [
//         "Conversational AI assistant",
//         "Product search",
//         "Basic recommendations",
//         "Up to 1,000 conversations/month",
//         "Email support",
//       ],
//       button: "Start Free",
//     },
//     professional: {
//       title: "Professional",
//       price: "€249",
//       description: "For growing stores",
//       features: [
//         "Everything in Basic plan",
//         "Personalized recommendations",
//         "Product comparison",
//         "Up to 5,000 conversations/month",
//         "CRM integration",
//         "Priority support",
//       ],
//       button: "Request Demo",
//       recommended: "Recommended",
//     },
//     enterprise: {
//       title: "Enterprise",
//       price: "Custom",
//       description: "For large eCommerce",
//       features: [
//         "Everything in Professional plan",
//         "Unlimited conversations",
//         "Complete customization",
//         "Full API integration",
//         "Advanced analytics",
//         "24/7 support",
//         "Dedicated account manager",
//       ],
//       button: "Contact Us",
//     },
//     perMonth: "/month",
//   },
//   secondaryHero: {
//     title: "Transform your customers' experience today",
//     subtitle:
//       "Join leading companies already leveraging the power of artificial intelligence to revolutionize their eCommerce.",
//     features: [
//       "Implementation in less than 24 hours",
//       "30-day satisfaction guarantee",
//       "Personalized technical support",
//       "Over 500 satisfied customers",
//     ],
//     startButton: "Start now",
//     talkButton: "Talk to an expert",
//     stats: {
//     satisfaction: { value: "98%", label: "Satisfacción" },
//     conversions: { value: "35%", label: "Aumento en conversiones" },
//     support: { value: "24/7", label: "Soporte disponible" },
//     clients: { value: "500+", label: "Clientes activos" },
//   }
//   },
//   contact: {
//     title: "Ready to get started?",
//     subtitle: "Tell us about your project and we'll help you choose the best solution",
//     form: {
//       title: "Contact form",
//       step1: {
//         title: "Tell us about yourself",
//         name: "Full name",
//         email: "Email address",
//         company: "Company",
//       },
//       step2: {
//         title: "Which plan are you interested in?",
//         basic: {
//           title: "Basic Plan",
//           description: "Ideal for small online stores",
//           price: "€99/month",
//         },
//         professional: {
//           title: "Professional Plan",
//           description: "For growing stores",
//           price: "€249/month",
//         },
//         enterprise: {
//           title: "Enterprise Plan",
//           description: "For large eCommerce",
//           price: "Custom",
//         },
//       },
//       step3: {
//         title: "Anything else you'd like to tell us?",
//         message: "Message (optional)",
//         additionalComments: "Additional comments",
//         additionalCommentsHelp: "Any specific needs or questions you have?",
//         additionalCommentsNote: "These comments will help us better prepare our proposal for you.",
//         summary: "Summary of your request",
//         name: "Name:",
//         email: "Email:",
//         company: "Company:",
//         plan: "Plan:",
//       },
//       buttons: {
//         previous: "Previous",
//         next: "Next",
//         submit: "Submit request",
//       },
//       success: {
//         title: "Thank you for contacting us!",
//         message: "We have received your message. Our team will get in touch with you shortly.",
//         button: "Send another message",
//       },
//     },
//   },
//   cta: {
//     title: "Conversational user experience",
//     subtitle:
//       "Our AI agents offer an intuitive and natural interface that adapts to your customers' needs on any device.",
//     platforms: ["Mobile", "Desktop", "Apps", "Chat"],
//     button: "Transform your eCommerce",
//     demoButton: "View demo",
//   },
//   footer: {
//     description: "Transforming the online shopping experience with conversational intelligent agents.",
//     product: {
//       title: "Product",
//       links: ["Features", "Pricing", "Integrations", "Use cases"],
//     },
//     resources: {
//       title: "Resources",
//       links: ["Documentation", "Blog", "Tutorials", "Support"],
//     },
//     company: {
//       title: "Company",
//       links: ["About us", "Contact", "Privacy policy", "Terms of service"],
//     },
//     copyright: "© {year} AI eCommerce. All rights reserved.",
//   },
// }

// // Traducciones en portugués
// export const pt: Translations = {
//   header: {
//     inicio: "Início",
//     caracteristicas: "Características",
//     comoFunciona: "Como Funciona",
//     tecnologia: "Tecnologia",
//     capacidades: "Capacidades",
//     beneficios: "Benefícios",
//     precios: "Preços",
//     contacto: "Contato",
//     iniciarSesion: "Iniciar Sessão",
//     solicitarDemo: "Solicitar Demo",
//   },
//   hero: {
//     title: "Agentes de IA para eCommerce: Experiência de compra conversacional",
//     subtitle:
//       "Transforme sua loja online com assistentes inteligentes que aumentam conversões e melhoram a experiência do cliente",
//     demoButton: "Solicitar Demo",
//     featuresButton: "Ver Características",
//   },
//   features: {
//     title: "Características Principais",
//     subtitle: "Nossos agentes de IA transformam a experiência de compra em sua loja online",
//     search: {
//       title: "Otimização de Buscas",
//       description: "Resultados precisos e relevantes baseados na intenção do usuário, não apenas em palavras-chave.",
//     },
//     conversion: {
//       title: "Melhoria de Conversões",
//       description: "Aumento demonstrado nas taxas de conversão graças a recomendações personalizadas.",
//     },
//     support: {
//       title: "Automação de Atendimento",
//       description: "Assistência disponível 24/7 para resolver dúvidas e guiar os clientes em seu processo de compra.",
//     },
//   },
//   howItWorks: {
//     title: "Como Funciona",
//     subtitle: "Uma experiência de compra conversacional que guia seus clientes desde a busca até a compra",
//   },
//   technology: {
//     title: "Tecnologia Avançada",
//     subtitle: "Alimentado pelos últimos avanços em inteligência artificial e processamento de linguagem natural",
//     languageModel: {
//       title: "Modelo de Linguagem Contextual",
//       description:
//         "Compreende o contexto e a intenção por trás das consultas dos usuários para oferecer respostas precisas.",
//     },
//     searchEngine: {
//       title: "Motor de Busca Semântica",
//       description: "Vai além das palavras-chave para entender o significado e a intenção das buscas.",
//     },
//     recommendationSystem: {
//       title: "Sistema de Recomendação Híbrido",
//       description: "Combina análise de comportamento e preferências para oferecer recomendações personalizadas.",
//     },
//     advancedSearch: {
//       title: "Busca Avançada de Produtos",
//       description: "Filtragem inteligente que ajuda os usuários a encontrar exatamente o que procuram.",
//     },
//     trackingApi: {
//       title: "Integração API de Rastreamento",
//       description: "Conexão em tempo real com provedores de envio para rastreamento atualizado de pedidos.",
//     },
//   },
//   capabilities: {
//     title: "Capacidades",
//     subtitle: "Descubra tudo o que nossos agentes de IA podem fazer por sua loja online",
//     recommendations: {
//       title: "Recomendações Personalizadas",
//       description: "Sugestões baseadas em preferências e comportamento do usuário.",
//     },
//     comparison: {
//       title: "Comparação Inteligente",
//       description: "Análise lado a lado de produtos para facilitar decisões.",
//     },
//     assistant: {
//       title: "Assistente Conversacional",
//       description: "Interação natural que guia o processo de compra.",
//     },
//     tracking: {
//       title: "Rastreamento de Envios",
//       description: "Informações em tempo real sobre o status dos pedidos.",
//     },
//     learning: "Nossos agentes de IA aprendem continuamente para oferecer uma experiência cada vez mais personalizada",
//   },
//   benefits: {
//     title: "Benefícios",
//     subtitle: "Vantagens para seu negócio e para seus clientes",
//     forBusiness: {
//       title: "Para o eCommerce",
//       items: [
//         "Melhoria na experiência do usuário",
//         "Redução do abandono do carrinho",
//         "Aumento na taxa de conversão",
//         "Maior satisfação do cliente",
//         "Menor carga em atendimento humano",
//       ],
//     },
//     forUsers: {
//       title: "Para o Usuário",
//       items: [
//         "Experiência intuitiva e conversacional",
//         "Acesso rápido a informações detalhadas",
//         "Processo de checkout simplificado",
//         "Rastreamento eficiente de pedidos",
//         "Assistência disponível 24/7",
//       ],
//     },
//   },
//   integration: {
//     title: "Integrações",
//     subtitle: "Compatível com as principais plataformas de eCommerce e serviços de envio",
//     ecommerce: {
//       title: "Plataformas de eCommerce",
//       platforms: ["Shopify", "WooCommerce", "JumpSeller", "PrestaShop", "Jumpseller", "BigCommerce"],
//     },
//     shipping: {
//       title: "Serviços de Envio",
//       platforms: ["DHL", "FedEx", "UPS", "Correos", "Blue envios", "GLS"],
//     },
//     viewAll: "Ver todas as integrações",
//     steps: {
//       title: "Integração em 3 simples passos",
//       step1: {
//         title: "Conecte sua plataforma",
//         description: "Integração simples com sua loja online existente através de API ou plugins.",
//       },
//       step2: {
//         title: "Personalize seu assistente",
//         description: "Configure o comportamento e aparência do seu agente de IA de acordo com suas necessidades.",
//       },
//       step3: {
//         title: "Ative e monitore",
//         description: "Lance seu assistente e analise seu desempenho em tempo real.",
//       },
//       support:
//         "Precisa de ajuda com a integração? Nossa equipe de suporte está disponível 24/7 para ajudá-lo em todo o processo.",
//     },
//   },
//   pricing: {
//     title: "Planos e Preços",
//     subtitle: "Soluções flexíveis que se adaptam às necessidades do seu negócio",
//     basic: {
//       title: "Básico",
//       price: "€99",
//       description: "Ideal para pequenas lojas online",
//       features: [
//         "Assistente de IA conversacional",
//         "Busca de produtos",
//         "Recomendações básicas",
//         "Até 1.000 conversas/mês",
//         "Suporte por email",
//       ],
//       button: "Começar Grátis",
//     },
//     professional: {
//       title: "Profissional",
//       price: "€249",
//       description: "Para lojas em crescimento",
//       features: [
//         "Tudo do plano Básico",
//         "Recomendações personalizadas",
//         "Comparação de produtos",
//         "Até 5.000 conversas/mês",
//         "Integração com CRM",
//         "Suporte prioritário",
//       ],
//       button: "Solicitar Demo",
//       recommended: "Recomendado",
//     },
//     enterprise: {
//       title: "Empresarial",
//       price: "Personalizado",
//       description: "Para grandes eCommerces",
//       features: [
//         "Tudo do plano Profissional",
//         "Conversas ilimitadas",
//         "Personalização completa",
//         "Integração API completa",
//         "Análise avançada",
//         "Suporte 24/7",
//         "Gerente de conta dedicado",
//       ],
//       button: "Contatar",
//     },
//     perMonth: "/mês",
//   },
//   secondaryHero: {
//     title: "Transforme a experiência dos seus clientes hoje mesmo",
//     subtitle:
//       "Junte-se às empresas líderes que já estão aproveitando o poder da inteligência artificial para revolucionar seu eCommerce.",
//     features: [
//       "Implementação em menos de 24 horas",
//       "Garantia de satisfação de 30 dias",
//       "Suporte técnico personalizado",
//       "Mais de 500 clientes satisfeitos",
//     ],
//     startButton: "Começar agora",
//     talkButton: "Falar com um especialista",
//     stats: {
//     satisfaction: { value: "98%", label: "Satisfacción" },
//     conversions: { value: "35%", label: "Aumento en conversiones" },
//     support: { value: "24/7", label: "Soporte disponible" },
//     clients: { value: "500+", label: "Clientes activos" },
//   }
//   },
//   contact: {
//     title: "Pronto para começar?",
//     subtitle: "Conte-nos sobre seu projeto e ajudaremos você a escolher a melhor solução",
//     form: {
//       title: "Formulário de contato",
//       step1: {
//         title: "Conte-nos sobre você",
//         name: "Nome completo",
//         email: "Endereço de email",
//         company: "Empresa",
//       },
//       step2: {
//         title: "Qual plano você está interessado?",
//         basic: {
//           title: "Plano Básico",
//           description: "Ideal para pequenas lojas online",
//           price: "€99/mês",
//         },
//         professional: {
//           title: "Plano Profissional",
//           description: "Para lojas em crescimento",
//           price: "€249/mês",
//         },
//         enterprise: {
//           title: "Plano Empresarial",
//           description: "Para grandes eCommerces",
//           price: "Personalizado",
//         },
//       },
//       step3: {
//         title: "Mais alguma coisa que você gostaria de nos contar?",
//         message: "Mensagem (opcional)",
//         additionalComments: "Comentários adicionais",
//         additionalCommentsHelp: "Alguma necessidade específica ou pergunta que você tenha?",
//         additionalCommentsNote: "Estes comentários nos ajudarão a preparar melhor nossa proposta para você.",
//         summary: "Resumo da sua solicitação",
//         name: "Nome:",
//         email: "Email:",
//         company: "Empresa:",
//         plan: "Plan:",
//       },
//       buttons: {
//         previous: "Anterior",
//         next: "Próximo",
//         submit: "Enviar solicitação",
//       },
//       success: {
//         title: "Obrigado por nos contatar!",
//         message: "Recebemos sua mensagem. Nossa equipe entrará em contato com você em breve.",
//         button: "Enviar outra mensagem",
//       },
//     },
//   },
//   cta: {
//     title: "Experiência de usuário conversacional",
//     subtitle:
//       "Nossos agentes de IA oferecem uma interface intuitiva e natural que se adapta às necessidades dos seus clientes em qualquer dispositivo.",
//     platforms: ["Móvel", "Desktop", "Apps", "Chat"],
//     button: "Transforme seu eCommerce",
//     demoButton: "Ver demonstração",
//   },
//   footer: {
//     description: "Transformando a experiência de compra online com agentes inteligentes conversacionais.",
//     product: {
//       title: "Produto",
//       links: ["Características", "Precios", "Integraciones", "Casos de uso"],
//     },
//     resources: {
//       title: "Recursos",
//       links: ["Documentación", "Blog", "Tutoriais", "Suporte"],
//     },
//     company: {
//       title: "Empresa",
//       links: ["Sobre nós", "Contato", "Política de privacidade", "Termos de serviço"],
//     },
//     copyright: "© {year} AI eCommerce. Todos os direitos reservados.",
//   },
// }
