import { LocaleLanguaje } from "./translationType";

export const en : LocaleLanguaje = {
 header: {
  inicio: "Home",
  caracteristicas: "Features",
  comoFunciona: "How It Works",
  tecnologia: "Technology",
  capacidades: "Capabilities",
  beneficios: "Benefits",
  precios: "Pricing",
  contacto: "Contact",
  iniciarSesion: "Sign In",
  solicitarDemo: "Request Demo",
},
 hero_section: {
  subtitle: "Automate your online store with intelligent agents that chat and convert.",
  demoButton: "Request demo",
  featuresButton: "View features",
  stats: [
    { icon: "TrendingUp", value: "35%", label: "Increase in conversions" },
    { icon: "Zap", value: "09:00-18:30 (-3 GTM)", label: "Automated support" },
    { icon: "Brain", value: "1+", label: "Active stores" },
  ],
  trust: [
    { label: "Enterprise ready", color: "green" },
    { label: "SOC 2 compliant", color: "blue" },
    { label: "99.9% uptime", color: "purple" },
  ],
  demo: {
    messages: [
      {
        role: "user",
        content: "I'm looking for a good quality digital camera",
      },
      {
        role: "assistant",
        content:
          "Perfect! Our AI can help you find the ideal camera. Do you prefer a professional one or something more compact for daily use?",
      },
      {
        role: "user",
        content: "I'm looking for something professional but easy to use",
      },
    ],
    products: [
      {
        name: "Sony Alpha A7 III",
        price: "€1,799.00",
        image: "/placeholder.svg?height=100&width=100",
        specs: ["Full Frame Sensor", "24.2MP", "4K Video", "5-axis Stabilization"],
      },
      {
        name: "Canon EOS R6",
        price: "€2,499.00",
        image: "/placeholder.svg?height=100&width=100",
        specs: ["Full Frame Sensor", "20.1MP", "4K Video", "Dual Pixel Autofocus"],
      },
    ],
  },
},
free_trial_section: {
  badge: "Limited offer",
  title: "7-Day Free Trial",
  subtitle: "Try it with no commitment. Cancel anytime.",
  button: "Start now",
  features: [
    {
      icon: "Code",
      title: "Full API",
      description: "Access the complete API of our AI agents",
    },
    {
      icon: "BarChart3",
      title: "eCommerce Integration",
      description: "Compatible with Shopify, WooCommerce, JumpSeller",
    },
    {
      icon: "Truck",
      title: "Advanced Tracking",
      description: "Real-time order tracking",
    },
    {
      icon: "Shield",
      title: "No commitment",
      description: "Cancel anytime without penalties",
    },
  ],
  heading: {
    main: "Convert 3x More Visitors into Customers with",
    highlight: "Conversational AI for Your eCommerce",
  },
  description: "AI agents that sell 24/7 in your eCommerce. Custom implementation within 48 to 72 hours.",
  whats_included_title: "What's included in the Complete 7-Day Trial:",
  whats_included_items: [
    "eCommerce Platform API (Shopify/JumpSeller)       Tracking: Blue Envios. Other providers at an additional cost.",
    "Up to 100 AI conversations",
    "Technical support from 09:00 to 18:30 (-3 GMT)",
    "Custom setup"
  ],
  benefits: [
    "Setup within approximately 48 to 72 hours",
    "No credit card required",
    "Cancel anytime"
  ],
  days_number: "7",
  timer: {
    days_free: "trial days"
  },
  cta_button: "Start 7-Day Trial for 290 USD",
  trust_text: "Join over 500+ companies already trusting us",
  integrations_title: "Instant integration with:",
  integrations_list: ["Shopify", "WooCommerce", "JumpSeller", "PrestaShop", "DHL", "FedEx"]
}
,

features_section: {
  title: "Key Features",
  subtitle: "Our AI agents transform the shopping experience in your online store",
  features: [
    {
      icon: "Search",
      title: "Intelligent Search",
      description:
        "Your customers find exactly what they’re looking for in seconds.",
    },
    {
      icon: "TrendingUp",
      title: "Increase Sales 67%",
      description:
        "Personalized recommendations that actually convert.",
    },
    {
      icon: "MessageSquare",
      title: "24/7 Virtual Sales Agent",
      description:
        "Serves and converts customers while you sleep.",
    },
  ],
},
how_it_works_section: {
  title: "How It Works",
  subtitle: "A conversational shopping experience that guides your customers from search to purchase",
  video_title: "KreadoresPro Demo",
},
technology_section: {
  title: "How the Magic Works?",
  subtitle: "",
  items: [
    {
      title: "Understands your customers like an expert salesperson",
      description: "",
    },
    {
      title: "Recommends products they actually want to buy",
      description: "",
    },
    {
      title: "Answers technical questions instantly",
      description: "",
    },
    {
      title: "Processes orders and provides automatic follow-up",
      description: "",
    },
  ],
},
capabilities_section: {
  title: "Capabilities",
  subtitle: "Discover everything our AI agents can do for your online store",
  capabilities: [
    {
      title: "Personalized Recommendations",
      description: "Suggestions based on user preferences and behavior.",
    },
    {
      title: "Smart Comparison",
      description: "Side-by-side product analysis to simplify decisions.",
    },
    {
      title: "Conversational Assistant",
      description: "Natural interaction that guides the buying process.",
    },
    {
      title: "Order Tracking",
      description: "Real-time information about order status.",
    },
  ],
  footerText: "Our AI agents continuously learn to deliver an increasingly personalized experience",
},
benefits_section: {
  title: "Benefits",
  subtitle: "Advantages for your business and your customers",
  ecommerce: {
    title: "For eCommerce",
    items: [
      "Improved user experience",
      "Reduced cart abandonment",
      "Increased conversion rate",
      "Higher customer satisfaction",
      "Lower human support workload",
    ],
  },
  user: {
    title: "For Users",
    items: [
      "Intuitive and conversational experience",
      "Quick access to detailed information",
      "Simplified checkout process",
      "Efficient order tracking",
      "24/7 assistance available",
    ],
  },
},
integration_section: {
  title: "Integrations",
  subtitle: "We connect with your store in less than 5 business days",
  categories: {
    ecommerce: {
      title: "Works with your current store without technical complications",
      platforms: [
        { title: "Shopify", icon: "ShoppingBag", color: "green" },
        { title: "WooCommerce", icon: "ShoppingCart", color: "purple" },
        { title: "JumpSeller", icon: "Rocket", color: "blue" },
        { title: "PrestaShop", icon: "Package", color: "pink" },
        { title: "BigCommerce", icon: "Store", color: "blue" },
      ],
    },
    shipping: {
      title: "Shipping Services",
      platforms: [
        {
          title: "Blue Envios",
          description: "APIs for other logistics providers available at extra cost",
          icon: "Truck",
          color: "green",
        },
        "DHL", "FedEx", "UPS", "Correos", "GLS"],
    },
  },
  cta: "View all integrations",
  stepsTitle: "Integration in 3 simple steps",
  steps: [
    {
      step: "01",
      title: "We connect your platform",
      description: "We integrate your existing online store via API.",
    },
    {
      step: "02",
      title: "We customize your assistant",
      description: "We configure your AI agent's behavior and appearance to match your needs.",
    },
    {
      step: "03",
      title: "Activation for JumpSeller and Shopify",
      description: "We launch your personalized sales assistant.",
    },
  ],
  support: "Need help with integration? Our support team is available from 09:00 to 19:00 (-3 GMT) to assist you throughout the process.",
  highlights: ["Shopify", "WooCommerce", "JumpSeller", "DHL", "FedEx", "UPS"],
},
roi_calculator_section: {
  title: "AI Impact Calculator",
  subtitle: "Discover how much value an AI agent can generate for your eCommerce. Calculations based on real industry data.",
  form: {
    sectionTitle: "Your eCommerce Data",
    fields: {
      traffic: {
        label: "Average Monthly Traffic",
        hint: "visitors/month",
        min: "1K",
        max: "500K",
      },
      conversionRate: {
        label: "Current Conversion Rate",
        suffix: "%",
      },
      aov: {
        label: "Average Order Value (AOV)",
        prefix: "$",
      },
      numAgents: {
        label: "Number of Support Agents",
      },
      costPerAgent: {
        label: "Monthly Cost per Agent",
        prefix: "$",
      },
    },
  },
  results: {
    impactTitle: "Estimated Annual Impact",
    impactSubtitle: "in additional value generated per year",
    monthlyBreakdownTitle: "Monthly Breakdown",
    monthly: {
      extraRevenue: "Extra Revenue",
      supportSavings: "Support Savings",
      totalMonthly: "Total Monthly",
    },
    detailedBreakdownTitle: "Detailed Breakdown",
    details: {
      currentRevenue: "Current revenue (monthly):",
      aiRevenue: "Revenue with AI (monthly):",
      gainConversion: "Conversion improvement (+12%):",
      gainAOV: "AOV improvement (+5%):",
      supportSavings: "Support savings (60% automated):",
      uplift: "AI_Conversion_Uplift(12%):",
      // ticketResolutionRate: "AI_Ticket_Resolution_Rate(66%):",
      // aovIncrease: "AI_AOV_Increase (5%):",
    },
  },
  charts: {
    barChart: {
      extraRevenue: "Extra Revenue",
      supportSavings: "Support Savings",
    },
    pieChart: {
      gainConversion: "Conversion Gain",
      gainAOV: "AOV Increase",
      supportSavings: "Support Savings",
    },
  },
  },
pricing_section: {
  title: "Plans and Pricing",
  subtitle: "Flexible solutions that adapt to your business needs",
  recommendedBadge: "Recommended",
  plans: [
    {
      type: "Set Up",
      title: "Set Up or Custom Implementation",
      price: "$10K-30K/month invoicing: $4,490 USD \n$30K-70K/month invoicing: $7,590 USD \n$70K-100K/month invoicing: $9,890 USD",
      priceNote: "net",
      description: "Complete solution for your eCommerce",
      features: [
        "Conversational AI assistant",
        "Product search",
        "Basic recommendations",
        "Up to 30k interactions/month",
        "Personalized recommendations",
        "Product comparison",
        "Full customization",
        "Full API integration",
        "Interaction history with the AI agent",
        "Email support",
      ],
      buttonText: "Request Implementation",
      validationNote: "To validate your billing range, attach proof of income, Stripe for example.",
      highlighted: true,
      showRecommended: true,
    },
    {
      type: "Monthly Fee",
      title: "Monthly Fee",
      price: "$10K-30K/month: $450/month USD\n$30K-70K/month: $650/month USD\n$70K-100K/month: $950/month USD",
      priceNote: "net per month",
      description: "Recurring cost to keep your solution active",
      features: [
        "Duration: 1 month (auto-renewable)",
        "8 hours/month of included support",
        "Response SLA: 6 hours from receipt",
        "Coverage hours: Monday–Friday, 09:00–18:00 (GMT -3)",
        "LLM Token",
        "Database",
        "Embedding",
        "RAG",
        "extra hour rate: $30 USD/hr"
      ],
      validationNote: "To validate your billing range, attach proof of income, Stripe for example.",
    },
    {
      type: "AddOn",
      title: "Add on Widget Chat",
      price: "$199",
      priceNote: "/month per agent",
      description: "Supercharge your plan with an interactive AI chat assistant.",
      features: [
        "Customizable chat widget",
        "24/7 instant responses",
        "Real-time product suggestions",
        "Customer history integration",
        "Chat analytics dashboard"
      ],
      buttonText: "Add to Plan",
      highlighted: true,
      isAddon: true
    }
  ],
},
secondary_hero_section: {
  title: "Multiply Your Sales with AI in 48 to 72 Hours",
  subtitle: "Join leading companies already leveraging artificial intelligence to revolutionize their eCommerce.",
  now: "today",
  highlights: [
    "Implementation in less than 7 business days",
    "30-day satisfaction guarantee",
    "Personalized technical support",
    "More than 500 satisfied clients",
  ],
  ctaPrimary: {
    text: "Try it 7 days - API only",
    icon: "ArrowRight",
  },
  ctaSecondary: {
    text: "Talk to an expert",
  },
  apiFeaturesTitle: "Full access to eCommerce and tracking platforms",
  apiFeatures: [
    {
      title: "eCommerce APIs",
      description: "Shopify, WooCommerce, JumpSeller",
      icon: "BarChart3",
      color: "blue",
    },
    {
      title: "Blue Shipping",
      description: "APIs for other logistics providers have a separate cost",
      icon: "Truck",
      color: "green",
    },
  ],
  stats: [
    { value: "98%", label: "Satisfaction" },
    { value: "35%", label: "Increase in conversions" },
    { value: "09:00 to 18:30 (-3 GMT)", label: "Support available" },
    { value: "1+", label: "Active clients" },
  ],
},
contact: {
  title: "Ready to get started?",
  subtitle: "Tell us about your project and we’ll help you choose the best solution",
  form: {
    title: "Contact form",
    step1: {
      title: "Tell us about yourself",
      name: "Full name",
      email: "Email address",
      company: "Company",
    },
    step2: {
      title: "Which plan are you interested in?",
      setup: {
        title: "Set Up or Custom Implementation",
        description: "Complete solution for your eCommerce",
        price: "$10K-30K/month invoicing: $4,490 USD\n$30K-70K/month invoicing: $7,590 USD\n$70K-100K/month invoicing: $9,890 USD",
      },
      feeMensual: {
        title: "Monthly Fee",
        description: "Recurring cost to keep your solution active",
        price: "$10K-30K/month: $450/month USD\n$30K-70K/month: $650/month USD\n$70K-100K/month: $950/month USD",
      },
      widgetChat: {
        title: "Add on Widget Chat",
        description: "Supercharge your plan with an interactive AI chat assistant.",
        price: "$199 /month per agent",
      },
      trial: {
        title: "14-Day Trial",
        description: "AI Agents for eCommerce",
        price: "290 USD",
      },
    },
    step3: {
      title: "Anything else you'd like to tell us?",
      message: "Message (optional)",
      additionalComments: "Additional comments",
      additionalCommentsHelp: "Any specific needs or questions you have?",
      additionalCommentsNote: "These comments will help us better prepare our proposal for you.",
      summary: "Summary of your request",
      name: "Name:",
      email: "Email:",
      company: "Company:",
      plan: "Plan:",
    },
    buttons: {
      previous: "Previous",
      next: "Next",
      submit: "Send request",
    },
    success: {
      title: "Thank you for contacting us!",
      message: "We have received your message. Our team will get back to you soon.",
      button: "Send another message",
    },
  },
},
cta_section: {
  title: "Conversational user experience",
  subtitle:
    "Our AI agents provide an intuitive and natural interface that adapts to your customers’ needs on any device.",
  platforms: ["Mobile", "Desktop", "Apps", "Chat"],
  button: "Transform your eCommerce",
  demoButton: "View demo",
  inputPlaceholder: "Type your question here...",
  chat_demo: {
    user1: "I’m looking for a camera for landscape photography",
    ai1: [
      "Of course! For landscape photography, I recommend cameras with good dynamic range and high resolution.",
      "Do you have any brand preference or budget?"
    ],
    user2: "I like Sony and my budget is around €1500",
    ai2: [
      "Great choice. Sony has perfect options for landscapes in that price range.",
      "Here are the most recommended ones:"
    ],
    products: [
      {
        name: "Sony Alpha A7 III",
        price: "€1,799.00"
      },
      {
        name: "Sony Alpha A6600",
        price: "€1,399.00"
      }
    ],
    productImagePlaceholder: "Image"
  }
},
  calculator:{
    header: {
      title: "AI Impact Calculator",
      description:
        "Discover how much value an AI agent can generate for your eCommerce. Calculations based on real industry data.",
      tags: [
        { label: "+12% conversion improvement", highlight: "+12%" },
        { label: "66% tickets automated", highlight: "66%" },
        { label: "+5% increase in AOV", highlight: "+5%" },
      ],
    },
    chartData: {
    ingresosExtra: "Extra Revenue",
    ahorroSoporte: "Support Savings",
    mejoraConversion: "Conversion Improvement",
    aumentoAOV: "AOV Increase",
  }
  ,
  form: {
    title: "Your eCommerce Data",
    traffic: {
      label: "Average Monthly Traffic",
      unit: "visitors/month",
      minLabel: "1K",
      maxLabel: "500K",
    },
    conversionRate: {
      label: "Current Conversion Rate",
      unit: "%",
    },
    aov: {
      label: "Average Order Value (AOV)",
      unit: "$",
    },
    numAgents: {
      label: "Number of Support Agents",
    },
    costPerAgent: {
      label: "Monthly Cost per Agent",
      unit: "$",
    },
  },
  results: {
    annualImpact: {
      title: "Estimated Annual Impact",
      subtitle: "in additional value generated per year",
    },
    monthlyBreakdown: {
      title: "Monthly Breakdown",
      extraRevenue: "Extra Revenue",
      supportSavings: "Support Savings",
      totalMonthly: "Total Monthly",
    },
    detailedBreakdown: {
      title: "Detailed Breakdown",
      currentRevenue: "Current revenue (monthly):",
      aiRevenue: "Revenue with AI (monthly):",
      conversionGain: "Conversion improvement (+12%):",
      aovGain: "AOV increase (+5%):",
      supportAutomation: "Support savings (66% automated):",
    },
  },
  cta: {
    button: "I want to automate my eCommerce with AI",
    disclaimer: "* Calculations based on industry averages and real success stories",
  },
},
ChatbotPreview: {
  title: "Chat Widget Preview",
  previewTitle: "AI Agents for eCommerce",
  description: "This is how the AI assistant will look on your website, helping your customers in real-time.",
  widget: {
    title: "Shopping Assistant",
    subtitle: "How can I help you today?",
  },
  suggestions: {
    search: {
      title: "Search Products",
      description: "Find items by name or category."
    },
    status: {
      title: "Order Status",
      description: "Check your shipping information."
    },
    agent: {
      title: "Talk to an Agent",
      description: "Connect with our support team."
    },
    deals: {
      title: "View Deals",
      description: "Discover the latest discounts."
    }
  },
  inputPlaceholder: "Type a message...",
  content: {
    search: {
      title: "Search Products",
      description: "Find exactly what you're looking for with our AI-powered search",
      popular: "Popular Searches",
      topRated: "Top Rated",
      wishlist: "Wishlist",
    },
    status: {
      title: "Order Status",
      description: "Track your orders in real-time",
      recent: "Recent Orders",
      shipped: "Shipped",
      processing: "Processing",
    },
    agent: {
      title: "Personal Agent",
      description: "Your AI shopping assistant is here to help",
      capabilities: "Agent Capabilities",
      cap1: "Product recommendations based on your preferences",
      cap2: "Price comparison and deal alerts",
      cap3: "24/7 customer support",
      cap4: "Order management and tracking",
      statusOnline: "Agent Status: Online",
      ready: "Ready to assist you with any questions!",
    },
    deals: {
      title: "Special Deals",
      description: "Exclusive offers just for you",
      today: "Today's Deals",
      freeShipping: "Free Shipping",
      bundle: "Bundle Deals",
    },
    demo: {
      products: {
        headphones: "Wireless Headphones",
        laptop: "Gaming Laptop",
        smartwatch: "Smart Watch",
        headset: "Gaming Headset",
        mouse: "Gaming Mouse",
      },
      orders: {
        order1: "#ORD-2024-001",
        order2: "#ORD-2024-002",
      },
      results: {
        result1: "2.3k results",
        result2: "1.8k results",
        result3: "3.1k results",
      },
      texts: {
        recommendationsTitle: "Based on your preferences, I recommend these options:",
        moreInfoQuestion: "Would you like more information about any of these models?",
      },
      prices: {
        price1: "$199.99",
        price2: "$99.99",
        price3: "$299.99",
        price4: "$209.99",
      },
      discounts: {
        discount1: "50% OFF",
        discount2: "30% OFF",
      },
      url: "https://tutienda.com",
    },
  },
  productCard: {
    name: "Sony Alpha A7 III",
    price: "$1,799.00",
    specs: "Full Frame • 24.2MP • 4K",
    rating: "4.8/5 (1,254 reviews)",
    addToCart: "Add to cart",
    viewDetails: "View details",
  },
  benefits: {
    title: "Boost Your Business",
    items: [
      "Increase conversion rates",
      "Improve customer satisfaction",
      "Reduce support costs"
    ]
  }
},
footer: {
  description: "Artificial intelligence platform to empower your eCommerce, improve customer service, and increase conversions.",
  product: {
    title: "Product",
    links: ["Plans", "API", "Integrations", "Demo"]
  },
  resources: {
    title: "Resources",
    links: ["Documentation", "Support", "Guides", "Blog"]
  },
  company: {
    title: "Company",
    links: ["About Us", "Contact", "Careers", "Privacy Policy"]
  },
  copyright: "  AI eCommerce. All rights reserved."
}

}
