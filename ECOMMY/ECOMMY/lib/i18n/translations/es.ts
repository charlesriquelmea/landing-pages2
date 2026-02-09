import { LocaleLanguaje } from "./translationType";

export const es : LocaleLanguaje= {
  header: {
    inicio: "Inicio",
    caracteristicas: "Características",
    comoFunciona: "Cómo Funciona",
    tecnologia: "Tecnología",
    capacidades: "Capacidades",
    beneficios: "Beneficios",
    precios: "Precios",
    contacto: "Contacto",
    iniciarSesion: "Iniciar Sesión",
    solicitarDemo: "Solicitar Demo",
  },
  hero_section: {
    subtitle: "Automatiza tu tienda online con agentes inteligentes que conversan y convierten.",
    demoButton: "Solicitar demo",
    featuresButton: "Ver funcionalidades",
    stats: [
      { icon: "TrendingUp", value: "35%", label: "Incremento en conversiones" },
      { icon: "Zap", value: "09:00-18:30(-3 GTM)", label: "Soporte automatizado" },
      { icon: "Brain", value: "1+", label: "Tiendas activas" },
    ],
    trust: [
      { label: "Listo para empresas", color: "green" },
      { label: "Cumple con SOC 2", color: "blue" },
      { label: "99.9% de disponibilidad", color: "purple" },
    ],
    demo: {
      messages: [
        {
          role: "user",
          content: "Estoy buscando una cámara digital de buena calidad",
        },
        {
          role: "assistant",
          content:
            "¡Perfecto! Nuestro AI puede ayudarte a encontrar la cámara ideal. ¿Prefieres una profesional o más compacta para uso diario?",
        },
        {
          role: "user",
          content: "Busco algo profesional pero fácil de usar",
        },
      ],
      products: [
        {
          name: "Sony Alpha A7 III",
          price: "1.799,00€",
          image: "/placeholder.svg?height=100&width=100",
          specs: ["Sensor Full Frame", "24.2MP", "Video 4K", "Estabilización de 5 ejes"],
        },
        {
          name: "Canon EOS R6",
          price: "2.499,00€",
          image: "/placeholder.svg?height=100&width=100",
          specs: ["Sensor Full Frame", "20.1MP", "Video 4K", "Autoenfoque Dual Pixel"],
        },
      ],
    },
  },
  free_trial_section: {
  badge: "Oferta limitada",
  title: "Prueba gratuita de 7 días",
  subtitle: "Pruébalo sin compromiso. Cancela cuando quieras.",
  button: "Comenzar ahora",
  features: [
    {
      icon: "Code",
      title: "API completa",
      description: "Accede a toda la API de nuestros agentes de IA",
    },
    {
      icon: "BarChart3",
      title: "Integración eCommerce",
      description: "Compatible con Shopify, WooCommerce, JumpSeller",
    },
    {
      icon: "Truck",
      title: "Seguimiento avanzado",
      description: "En tiempo real con API Blue Envíos. Otros proveedores, costo adicional",
    },
    {
      icon: "Shield",
      title: "Sin compromiso",
      description: "Cancela en cualquier momento sin penalidades",
    },
  ],
    heading: {
    main: "Convierte 3x Más Visitantes en Clientes con",
    highlight: "IA Conversacional para Tú eCommerce"
  },
  description: "Agentes de IA que venden 24/7 en tu eCommerce. Implementación personalizada entre 48 a 72horas.",
  whats_included_title: "Qué incluye la prueba de 7 días Completa:",
  whats_included_items: [
    "API plataforma de eCommerce (Shopify/JumpSeller)       Tracking: Blue Envios. Otro proveedor costo por separado.",
    "Hasta 100 conversaciones con AI",
    "Soporte técnico 09:00 a 18:30 (-3 GTM)",
    "Configuración personalizada"
  ],
  benefits: [
    "Configuración entre 48 a 72hrs aproximadamente",
    "Sin tarjeta de crédito requerida",
    "Cancela en cualquier momento"
  ],
  days_number: "7",
  timer: {
    days_free: "días de prueba"
  },
  cta_button: "Comience Prueba de 7 dias por 59 USD",
  trust_text: "Únete a más de 500+ empresas que ya confían en nosotros",
  integrations_title: "Integración instantánea con:",
  integrations_list: ["Shopify", "WooCommerce", "JumpSeller", "PrestaShop", "DHL", "FedEx"]
},

  features_section: {
    title: "Características Principales",
    subtitle: "Nuestros agentes AI transforman la experiencia de compra en su tienda online",
    features: [
      {
        icon: "Search",
        title: "Búsqueda Inteligente",
        description:
          "Tus clientes encuentran exactamente lo que buscan en segundos.",
      },
      {
        icon: "TrendingUp",
        title: "Aumenta Ventas 67%",
        description:
          "Recomendaciones personalizadas que realmente convierten.",
      },
      {
        icon: "MessageSquare",
        title: "Vendedor Virtual 24/7",
        description:
          "Atiende y convierte clientes mientras duermes.",
      },
    ],
  },
  how_it_works_section: {
    title: "Cómo Funciona",
    subtitle: "Una experiencia de compra conversacional que guía a sus clientes desde la búsqueda hasta la compra",
    video_title: "Demo KreadoresPro",
  },
  technology_section: {
    title: "¿Cómo Funciona la Magia?",
    subtitle: "",
    items: [
      {
        title: "Entiende a tus clientes como un vendedor experto",
        description: "",
      },
      {
        title: "Recomienda productos que realmente quieren comprar",
        description: "",
      },
      {
        title: "Responde preguntas técnicas al instante",
        description: "",
      },
      {
        title: "Procesa pedidos y da seguimiento automático",
        description: "",
      },
    ],
  },
  capabilities_section: {
    title: "Capacidades",
    subtitle: "Descubra todo lo que nuestros agentes AI pueden hacer por su tienda online",
    capabilities: [
      {
        title: "Recomendaciones Personalizadas",
        description: "Sugerencias basadas en preferencias y comportamiento del usuario.",
      },
      {
        title: "Comparación Inteligente",
        description: "Análisis lado a lado de productos para facilitar decisiones.",
      },
      {
        title: "Asistente Conversacional",
        description: "Interacción natural que guía el proceso de compra.",
      },
      {
        title: "Seguimiento de Envíos",
        description: "Información en tiempo real sobre el estado de pedidos.",
      },
    ],
    footerText: "Nuestros agentes AI aprenden continuamente para ofrecer una experiencia cada vez más personalizada",
  },
  benefits_section: {
    title: "Beneficios",
    subtitle: "Ventajas para su negocio y para sus clientes",
    ecommerce: {
      title: "Para el eCommerce",
      items: [
        "Mejora en experiencia del usuario",
        "Reducción del abandono del carrito",
        "Incremento en tasa de conversión",
        "Mayor satisfacción del cliente",
        "Menor carga en atención humana",
      ],
    },
    user: {
      title: "Para el Usuario",
      items: [
        "Experiencia intuitiva y conversacional",
        "Acceso rápido a información detallada",
        "Proceso de checkout simplificado",
        "Seguimiento eficiente de pedidos",
        "Asistencia disponible 24/7",
      ],
    },
  },
    integration_section: {
    title: "Integraciones",
    subtitle: "Conectamos con tu tienda en menos de 5 días hábiles",
    categories: {
        ecommerce: {
        title: "Funciona con tu tienda actual sin complicaciones técnicas",
        platforms: [
          { title: "Shopify", icon: "ShoppingBag", color: "green" },
          { title: "WooCommerce", icon: "ShoppingCart", color: "purple" },
          { title: "JumpSeller", icon: "Rocket", color: "blue" },
          { title: "PrestaShop", icon: "Package", color: "pink" },
          { title: "BigCommerce", icon: "Store", color: "blue" },
        ],
        },
        shipping: {
        title: "Servicios de Envío",
        platforms: [
          {
            title: "Blue Envios",
            description: "APIs otros proveedores logística costo por separado",
            icon: "Truck",
            color: "green",
          },
          "DHL", "FedEx", "UPS", "Correos", "GLS"],
        },
    },
    cta: "Ver todas las integraciones",
    stepsTitle: "Integración en 3 simples pasos",
    steps: [
        {
        step: "01",
        title: "Conectamos tu plataforma",
        description: "Integramos tu tienda online existente mediante API.",
        },
        {
        step: "02",
        title: "Personalizamos tu asistente",
        description: "Configuramos el comportamiento y apariencia de tu agente AI según tus necesidades.",
        },
        {
        step: "03",
        title: "Activamos para JumpSeller y Shopify",
        description: "Lanzamos tú asistente de ventas personalizado.",
        },
    ],
    support: "¿Necesitas ayuda con la integración? Nuestro equipo de soporte está disponible 09:00 a 19:00 (-3 GTM) para asistirte en todo el proceso.",
    highlights: ["Shopify", "WooCommerce", "JumpSeller", "DHL", "FedEx", "UPS"],
    },
roi_calculator_section: {
  title: "Calculadora de Impacto AI",
  subtitle: "Descubre cuánto valor puede generar un agente AI en tu eCommerce. Cálculos basados en datos reales de la industria.",
  form: {
    sectionTitle: "Datos de tu eCommerce",
    fields: {
      traffic: {
        label: "Tráfico Mensual Promedio",
        hint: "visitantes/mes",
        min: "1K",
        max: "500K",
      },
      conversionRate: {
        label: "Tasa de Conversión Actual",
        suffix: "%",
      },
      aov: {
        label: "Ticket Promedio de Venta (AOV)",
        prefix: "$",
      },
      numAgents: {
        label: "Número de Agentes de Soporte",
      },
      costPerAgent: {
        label: "Costo Mensual por Agente",
        prefix: "$",
      },
    },
  },
  results: {
    impactTitle: "Impacto Anual Estimado",
    impactSubtitle: "en valor adicional generado por año",
    monthlyBreakdownTitle: "Desglose Mensual",
    monthly: {
      extraRevenue: "Ingresos Extra",
      supportSavings: "Ahorro en Soporte",
      totalMonthly: "Total Mensual",
    },
    detailedBreakdownTitle: "Desglose Detallado",
    details: {
      currentRevenue: "Ingresos actuales (mensual):",
      aiRevenue: "Ingresos con AI (mensual):",
      gainConversion: "Mejora por conversión (+12%):",
      gainAOV: "Mejora por AOV (+5%):",
      supportSavings: "Ahorro soporte (60% automatizado):",
      uplift: "AI_Conversion_Uplift(12%):",
      // ticketResolutionRate: "AI_Ticket_Resolution_Rate(66%):",
      // aovIncrease: "AI_AOV_Increase (5%):",
    },
  },
  charts: {
    barChart: {
      extraRevenue: "Ingresos Extra",
      supportSavings: "Ahorro en Soporte",
    },
    pieChart: {
      gainConversion: "Mejora Conversión",
      gainAOV: "Aumento AOV",
      supportSavings: "Ahorro Soporte",
    },
  },
},
pricing_section: {
  title: "Planes y Precios",
  subtitle: "Soluciones flexibles que se adaptan a las necesidades de su negocio",
  recommendedBadge: "Recomendado",
  plans: [
    {
      type: "Set Up",
      title: "Set Up o implementación personalizada",
      price: "$10K-30K/mes facturación: $2,490 USD \n$30K-70K/mes facturación: $4,490 USD \n$70K-100K/mes facturación: $7,890 USD",
      priceNote: "neto",
      description: "Solución completa para tu eCommerce",
      features: [
        "Asistente AI conversacional",
        "Búsqueda de productos",
        "Hasta 30k interacciones/mes",
        "Recomendaciones personalizadas",
        "Comparación de productos",
        "Personalización completa",
        "Integración API completa",
        "Historial de interacciones con el agente AI",
        "Soporte por email",
        "Incluye 1 entrenamiento (base de conocimiento de 50 pág máx). Entrenamiento adicional costo por separado",
      ],
      buttonText: "Solicitar Implementación",
      validationNote: "Para validar qué rango de facturar te adaptas. Adjuntar comprobante ingresos, Stripe por ejemplo.",
      highlighted: true,
      showRecommended: true,
    },
    {
      type: "Fee Mensual",
      title: "Fee Mensual",
      price: "$10K-30K/mes: $300/mes USD \n$30K-70K/mes: $500/mes USD \n$70K-100K/mes: $1,000/mes USD",
      priceNote: "mes neto",
      description: "Costo recurrente para mantener tu solución activa",
      features: [
        "Duración: 1 mes (renovable automáticamente)",
        "4 horas/mes de soporte incluidas",
        "SLA de respuesta: 6 horas desde la recepción",
        "Horario de cobertura: Lunes-Viernes, 09:00-18:00 (GMT -3)",
        "Token LLM",
        "base de datos",
        "Embedding",
        "RAG",
        "tarifa por hora extra: $30 USD/Hra"
      ],
      validationNote: "Para validar qué rango de facturar te adaptas. Adjuntar comprobante ingresos, Stripe por ejemplo.",
    },
    {
      type: "AddOn",
      title: "Add on Widget Chat",
      price: "199",
      priceNote: "/mes por agente",
      description: "Potencia tu plan con un asistente de chat IA interactivo.",
      features: [
        "Widget de chat personalizable",
        "Respuestas instantáneas 24/7",
        // "Sugerencias de productos en tiempo real",
        // "Integración con historial de cliente",
        // "Panel de análisis de chat"
      ],
      buttonText: "Añadir al Plan",
      highlighted: true,
      isAddon: true
    },
  ],
},
secondary_hero_section: {
  title: "Multiplica Tus Ventas con IA entre 48 a 72 Horas",
  subtitle: "Únete a las empresas líderes que ya están aprovechando el poder de la inteligencia artificial para revolucionar su eCommerce.",
  now: "hoy mismo",
  highlights: [
    "Implementación en menos de 7 días hábiles",
    "Garantía de satisfacción de 30 días",
    "Soporte técnico personalizado",
    "Más de 500 clientes satisfechos",
  ],
  ctaPrimary: {
    text: "Pruébalo 7 días - Solo API",
    icon: "ArrowRight",
  },
  ctaSecondary: {
    text: "Hablar con un experto",
  },
  apiFeaturesTitle: "Acceso completo a plataformas de eCommerce y tracking",
  apiFeatures: [
    {
      title: "eCommerce APIs",
      description: "Shopify, WooCommerce, JumpSeller",
      icon: "BarChart3",
      color: "blue",
    },
    {
      title: "Blue Envíos",
      description: "APIs de otros proveedores de logística tienen un costo por separado",
      icon: "Truck",
      color: "green",
    },
  ],
  stats: [
    { value: "98%", label: "Satisfacción" },
    { value: "35%", label: "Aumento en conversiones" },
    { value: "09:00-18:30(-3 GTM)", label: "Soporte tecnico" },
    { value: "1+", label: "Clientes activos" },
  ],
},
  contact: {
  title: "¿Listo para empezar?",
  subtitle: "Cuéntanos sobre tu proyecto y te ayudaremos a elegir la mejor solución",
  form: {
    title: "Formulario de contacto",
    step1: {
      title: "Cuéntanos sobre ti",
      name: "Nombre completo",
      email: "Correo electrónico",
      company: "Empresa",
    },
    step2: {
      title: "¿En qué plan estás interesado?",
      setup: {
        title: "Set Up o implementación personalizada",
        description: "Solución completa para tu eCommerce",
        price: "$10K-30K/mes facturación: $2,490 USD\n$30K-70K/mes facturación: $4,490 USD\n$70K-100K/mes facturación: $7,890 USD",
      },
      feeMensual: {
        title: "Fee Mensual",
        description: "Costo recurrente para mantener tu solución activa",
        price: "$10K-30K/mes: $300/mes USD\n$30K-70K/mes: $500/mes USD\n$70K-100K/mes: $1,000/mes USD",
      },
      widgetChat: {
        title: "Add on Widget Chat",
        description: "Potencia tu plan con un asistente de chat IA interactivo.",
        price: "$199 /mes por agente",
      },
      trial: {
        title: "Prueba por 14 días",
        description: "Agentes IA para eCommerces",
        price: "59 USD",
      },
    },
    step3: {
      title: "¿Algo más que quieras contarnos?",
      message: "Mensaje (opcional)",
      additionalComments: "Comentarios adicionales",
      additionalCommentsHelp: "¿Alguna necesidad específica o pregunta que tengas?",
      additionalCommentsNote: "Estos comentarios nos ayudarán a preparar mejor nuestra propuesta para ti.",
      summary: "Resumen de tu solicitud",
      name: "Nombre:",
      email: "Correo:",
      company: "Empresa:",
      plan: "Plan:",
    },
    buttons: {
      previous: "Anterior",
      next: "Siguiente",
      submit: "Enviar solicitud",
    },
    success: {
      title: "¡Gracias por contactarnos!",
      message: "Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo pronto.",
      button: "Enviar otro mensaje",
    },
  },
},


calculator:{
  header: {
    title: "Calculadora de Impacto AI",
    description:
      "Descubre cuánto valor puede generar un agente AI en tu eCommerce. Cálculos basados en datos reales de la industria.",
    tags: [
      { label: "mejora en conversión", highlight: "+12%" },
      { label: "tickets automatizados", highlight: "66%" },
      { label: "aumento en AOV", highlight: "+5%" },
    ],
  },
  chartData:{
    ingresosExtra: "Ingresos Extra",
    ahorroSoporte: "Ahorro en Soporte",
    mejoraConversion: "Mejora Conversión",
    aumentoAOV: "Aumento AOV",
  }
  ,
  form: {
    title: "Datos de tu eCommerce",
    traffic: {
      label: "Tráfico Mensual Promedio",
      unit: "visitantes/mes",
      minLabel: "1K",
      maxLabel: "500K",
    },
    conversionRate: {
      label: "Tasa de Conversión Actual",
      unit: "%",
    },
    aov: {
      label: "Ticket Promedio de Venta (AOV)",
      unit: "$",
    },
    numAgents: {
      label: "Número de Agentes de Soporte",
    },
    costPerAgent: {
      label: "Costo Mensual por Agente",
      unit: "$",
    },
  },
  results: {
    annualImpact: {
      title: "Impacto Anual Estimado",
      subtitle: "en valor adicional generado por año",
    },
    monthlyBreakdown: {
      title: "Desglose Mensual",
      extraRevenue: "Ingresos Extra",
      supportSavings: "Ahorro en Soporte",
      totalMonthly: "Total Mensual",
    },
    detailedBreakdown: {
      title: "Desglose Detallado",
      currentRevenue: "Ingresos actuales (mensual):",
      aiRevenue: "Ingresos con AI (mensual):",
      conversionGain: "Mejora por conversión (+12%):",
      aovGain: "Mejora por AOV (+5%):",
      supportAutomation: "Ahorro soporte (66% automatizado):",
    },
  },
},
cta_section: {
  title: "Experiencia de usuario conversacional",
  subtitle:
    "Nuestros agentes de IA ofrecen una interfaz intuitiva y natural que se adapta a las necesidades de tus clientes en cualquier dispositivo.",
  platforms: ["Móvil", "Escritorio", "Apps", "Chat"],
  button: "Transforma tu eCommerce",
  demoButton: "Ver demo",
  inputPlaceholder: "Escribe tu pregunta aquí...",
  chat_demo: {
    user1: "Busco una cámara para fotografía de paisajes",
    ai1: [
      "¡Claro! Para fotografía de paisajes recomiendo cámaras con buen rango dinámico y alta resolución.",
      "¿Tienes alguna preferencia de marca o presupuesto?"
    ],
    user2: "Me gustan las Sony y tengo un presupuesto de unos 1500€",
    ai2: [
      "Excelente elección. Sony tiene opciones perfectas para paisajes en ese rango.",
      "Te muestro las más recomendadas:"
    ],
    products: [
      {
        name: "Sony Alpha A7 III",
        price: "1.799,00€"
      },
      {
        name: "Sony Alpha A6600",
        price: "1.399,00€"
      }
    ],
    productImagePlaceholder: "Imagen"
  }
},
  ChatbotPreview: {
    title: "Vista Previa de Widget Chat",
    previewTitle: "Agentes de IA para eCommerce",
    description: "Así es como se verá el asistente de IA en tu sitio web, ayudando a tus clientes en tiempo real.",
    widget: {
      title: "Asistente de Compras",
      subtitle: "¿Cómo puedo ayudarte hoy?",
    },
    subtitle: "Personaliza el diseño y la experiencia del chatbot para que se adapte a tu marca y necesidades.",
    cta: "Configura tu chatbot ahora",
    features: [
      {
        title: "Diseño personalizable",
        description: "Ajusta el color, el logo y el estilo del chatbot para que se adapte a tu marca.",
      },
      {
        title: "Experiencia de usuario intuitiva",
        description: "Nuestro chatbot ofrece una interfaz natural y fácil de usar para tus clientes.",
      },
      {
        title: "Integración con tu plataforma",
        description: "Conecta el chatbot con tu plataforma de eCommerce para ofrecer una experiencia de compra sin interrupciones.",
      },
    ],
    suggestions: {
      search: {
        title: "Buscar Productos",
        description: "Encuentra artículos por nombre o categoría."
      },
      status: {
        title: "Estado de mi Pedido",
        description: "Consulta la información de envío."
      },
      agent: {
        title: "Hablar con un Agente",
        description: "Conecta con nuestro equipo de soporte."
      },
      deals: {
        title: "Ver Ofertas",
        description: "Descubre los últimos descuentos."
      }
    },
    inputPlaceholder: "Escribe un mensaje...",
    content: {
      search: {
        title: "Buscar Productos",
        description: "Encuentra exactamente lo que buscas con nuestra búsqueda potenciada por IA",
        popular: "Búsquedas Populares",
        topRated: "Mejor Valorados",
        wishlist: "Favoritos",
      },
      status: {
        title: "Estado del Pedido",
        description: "Sigue tus pedidos en tiempo real",
        recent: "Pedidos Recientes",
        shipped: "Enviado",
        processing: "Procesando",
      },
      agent: {
        title: "Agente Personal",
        description: "Tu asistente de compras con IA está aquí para ayudarte",
        capabilities: "Capacidades del Agente",
        cap1: "Recomendaciones de productos según tus preferencias",
        cap2: "Comparación de precios y alertas de ofertas",
        cap3: "Soporte al cliente 24/7",
        cap4: "Gestión y seguimiento de pedidos",
        statusOnline: "Estado del Agente: En línea",
        ready: "¡Listo para ayudarte con cualquier consulta!",
      },
      deals: {
        title: "Ofertas Especiales",
        description: "Promociones exclusivas para ti",
        today: "Ofertas de Hoy",
        freeShipping: "Envío Gratis",
        bundle: "Combos y Paquetes",
      },
      demo: {
      products: {
        headphones: "Auriculares Inalámbricos",
        laptop: "Laptop Gaming",
        smartwatch: "Smart Watch",
        headset: "Headset Gaming",
        mouse: "Mouse Gaming",
      },
      orders: {
        order1: "#ORD-2024-001",
        order2: "#ORD-2024-002",
      },
      results: {
        result1: "2.3k resultados",
        result2: "1.8k resultados",
        result3: "3.1k resultados",
      },
      texts: {
        recommendationsTitle: "Basado en tus preferencias, te recomiendo estas opciones:",
        moreInfoQuestion: "¿Te gustaría más información sobre alguno de estos modelos?",
      },
      prices: {
        price1: "199,99$",
        price2: "99,99$",
        price3: "299,99$",
        price4: "209,99$",
      },
      discounts: {
        discount1: "50% OFF",
        discount2: "30% OFF",
      },
      url: "https://tutienda.com"
    },
    },
    productCard: {
      name: "Sony Alpha A7 III",
      price: "1.799,00€",
      specs: "Full Frame • 24.2MP • 4K",
      rating: "4.8/5 (1.254 reseñas)",
      addToCart: "Agregar al carrito",
      viewDetails: "Ver detalles",
    },
    benefits: {
      title: "Potencia tu Negocio",
      items: [
        "Aumenta la tasa de conversión",
        "Mejora la satisfacción del cliente",
        "Reduce costos de soporte"
      ]
    }
  },
footer: {
  description: "Plataforma de inteligencia artificial para potenciar tu eCommerce, mejorar la atención al cliente y aumentar conversiones.",
  product: {
    title: "Producto",
    links: ["Planes", "API", "Integraciones", "Demo"]
  },
  resources: {
    title: "Recursos",
    links: ["Documentación", "Soporte", "Guías", "Blog"]
  },
  company: {
    title: "Compañía",
    links: ["Sobre nosotros", "Contacto", "Carreras", "Política de privacidad"]
  },
  copyright: " AI eCommerce. Todos los derechos reservados."
}

}
