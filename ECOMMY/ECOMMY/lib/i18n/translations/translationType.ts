export type IconKey =
  | "Users"
  | "Eye"
  | "Brain"
  | "ShoppingCart"
  | "CheckCircle"

export type LocaleLanguaje = {
  header: {
  inicio: string,
    caracteristicas:string,
    comoFunciona: string,
    tecnologia: string,
    capacidades: string,
    beneficios: string,
    precios: string,
    contacto: string,
    iniciarSesion: string,
    solicitarDemo: string,
},

  hero_section: {
    subtitle: string;
    demoButton: string;
    featuresButton: string;
    stats: Array<{
      icon: string;
      value: string;
      label: string;
    }>;
    trust: Array<{
      label: string;
      color: string;
    }>;
    demo: {
      messages: Array<{
        role: "user" | "assistant";
        content: string;
      }>;
      products: Array<{
        name: string;
        price: string;
        image: string;
        specs: string[];
      }>;
    };
  };
  free_trial_section: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    heading: {
      main: string;
      highlight: string;
    }
    whats_included_title: string;
    whats_included_items:string[];
    benefits:string[];
    days_number: string;
    timer:{
      days_free:string;
    }
    description: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    cta_button: string;
    trust_text: string;
    integrations_title: string;
    integrations_list: string[];
  };
  features_section: {
    title: string;
    subtitle: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  how_it_works_section: {
    title: string;
    subtitle: string;
    video_title: string;
  };
  technology_section: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  capabilities_section: {
    title: string;
    subtitle: string;
    capabilities: Array<{
      title: string;
      description: string;
    }>;
    footerText: string;
  };
  benefits_section: {
    title: string;
    subtitle: string;
    ecommerce: {
      title: string;
      items: string[];
    };
    user: {
      title: string;
      items: string[];
    };
  };
  integration_section: {
    title: string;
    subtitle: string;
    categories: {
      ecommerce: {
        title: string;
        platforms: Array<string | { title: string; icon?: string; color?: string; description?: string }>;
      };
      shipping: {
        title: string;
        platforms: Array<string | { title: string; icon?: string; color?: string; description?: string }>;
      };
    };
    cta: string;
    stepsTitle: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    support: string;
    highlights: string[];
  };
  roi_calculator_section: {
    title: string;
    subtitle: string;
    form: {
      sectionTitle: string;
      fields: {
        traffic: {
          label: string;
          hint: string;
          min: string;
          max: string;
        };
        conversionRate: {
          label: string;
          suffix: string;
        };
        aov: {
          label: string;
          prefix: string;
        };
        numAgents: {
          label: string;
        };
        costPerAgent: {
          label: string;
          prefix: string;
        };
      };
    };
    results: {
      impactTitle: string;
      impactSubtitle: string;
      monthlyBreakdownTitle: string;
      monthly: {
        extraRevenue: string;
        supportSavings: string;
        totalMonthly: string;
      };
      detailedBreakdownTitle: string;
      details: {
        currentRevenue: string;
        aiRevenue: string;
        gainConversion: string;
        gainAOV: string;
        supportSavings: string;
        uplift: string;
      };
    };
    charts: {
      barChart: {
        extraRevenue: string;
        supportSavings: string;
      };
      pieChart: {
        gainConversion: string;
        gainAOV: string;
        supportSavings: string;
      };
    };
    cta?: string;
    disclaimer?: string;
  };
  pricing_section: {
    title: string;
    subtitle: string;
    recommendedBadge?: string;
    plans: Array<{
      type: 'basic' | 'professional' | 'enterprise' | 'trial' | 'Set Up' | 'Fee Mensual' | 'Fee Mensal' | 'Monthly Fee' | 'AddOn';
      title: string;
      price: string;
      priceNote: string;
      description: string;
      features: string[];
      buttonText?: string;
      buttonVariant?: string;
      highlighted?: boolean;
      showRecommended?: boolean;
      validationNote?: string;
      isAddon?: boolean;
      isBlue?: boolean;
    }>;
  };
  secondary_hero_section: {
    title: string;
    subtitle: string;
    now?: string;
    highlights: string[];
    ctaPrimary: {
      text: string;
      icon: string;
    };
    ctaSecondary: {
      text: string;
    };
    apiFeaturesTitle: string;
    apiFeatures: Array<{
      title: string;
      description: string;
      icon: string;
      color: string;
    }>;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  contact: {
    title: string
    subtitle: string
    form: {
      title: string
      step1: {
        title: string
        name: string
        email: string
        company: string
      }
      step2: {
        title: string
        setup: {
          title: string
          description: string
          price: string
        }
        feeMensual: {
          title: string
          description: string
          price: string
        }
        widgetChat: {
          title: string
          description: string
          price: string
        }
        trial: {
          title: string
          description: string
          price: string
        }
      }
      step3: {
        title: string
        message: string
        additionalComments: string
        additionalCommentsHelp: string
        additionalCommentsNote: string
        summary: string
        name: string
        email: string
        company: string
        plan: string
      }
      buttons: {
        previous: string
        next: string
        submit: string
      }
      success: {
        title: string
        message: string
        button: string
      }
  }
  };
  calculator:{
    header: {
    title: string
    description: string
    tags: {
      label: string
      highlight: string
    }[]
  }
   chartData:{
    ingresosExtra: string,
    ahorroSoporte: string,
    mejoraConversion: string,
    aumentoAOV: string,
  }
  form: {
    title: string
    traffic: {
      label: string
      unit: string
      minLabel: string
      maxLabel: string
    }
    conversionRate: {
      label: string
      unit: string
    }
   
    aov: {
      label: string
      unit: string
    }
    numAgents: {
      label: string
    }
    costPerAgent: {
      label: string
      unit: string
    }
  }
  results: {
    annualImpact: {
      title: string
      subtitle: string
    }
    monthlyBreakdown: {
      title: string
      extraRevenue: string
      supportSavings: string
      totalMonthly: string
    }
    detailedBreakdown: {
      title: string
      currentRevenue: string
      aiRevenue: string
      conversionGain: string
      aovGain: string
      supportAutomation: string
    }
  }
  cta?: {
    button: string
    disclaimer: string
  }
  }
  cta_section: {
    title: string;
    subtitle: string;
    platforms: Array<
      string | {
        title: string;
        description: string;
        icon: string;
        color: string;
      }
    >;
    button: string;
    demoButton: string;
    inputPlaceholder: string;
    chat_demo: {
    user1: string;
    ai1: string[];
    user2: string;
    ai2: string[];
    products: {
      name: string;
      price: string;
    }[];
    productImagePlaceholder: string;
  };
  };
  footer: {
    description: string;
    product: {
      title: string;
      links: string[];
    };
    resources: {
      title: string;
      links: string[];
    };
    company: {
      title: string;
      links: string[];
    };
    copyright: string;
  };
  ChatbotPreview: {
    title: string;
    previewTitle: string;
    description: string;
    subtitle?: string;
    cta?: string;
    features?: Array<{
      title: string;
      description: string;
    }>;
    widget?: {
      title: string;
      subtitle: string;
    };
    suggestions: {
      search: {
        title: string;
        description: string;
      };
      status: {
        title: string;
        description: string;
      };
      agent: {
        title: string;
        description: string;
      };
      deals: {
        title: string;
        description: string;
      };
    };
    inputPlaceholder: string;
    content?: {
      search: {
        title: string;
        description: string;
        popular: string;
        topRated: string;
        wishlist: string;
      };
      status: {
        title: string;
        description: string;
        recent: string;
        shipped: string;
        processing: string;
      };
      agent: {
        title: string;
        description: string;
        capabilities: string;
        cap1: string;
        cap2: string;
        cap3: string;
        cap4: string;
        statusOnline: string;
        ready: string;
      };
      deals: {
        title: string;
        description: string;
        today: string;
        freeShipping: string;
        bundle: string;
      };
      demo: {
        products: {
          headphones: string;
          laptop: string;
          smartwatch: string;
          headset: string;
          mouse: string;
        };
        orders: {
          order1: string;
          order2: string;
        };
        results: {
          result1: string;
          result2: string;
          result3: string;
        };
        texts: {
          recommendationsTitle: string;
          moreInfoQuestion: string;
        };
        prices: {
          price1: string;
          price2: string;
          price3: string;
          price4: string;
        };
        discounts: {
          discount1: string;
          discount2: string;
        };
        url: string;
      };
    };
    productCard?: {
      name: string;
      price: string;
      specs: string;
      rating: string;
      addToCart: string;
      viewDetails: string;
    };
    benefits: {
      title: string;
      items: string[];
    };
  };
};
