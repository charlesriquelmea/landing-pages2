export interface Project {
    title: string
    category: string
    result: string
    image: string
    url: string
    position?: string
    video?: string
}

// ... existing code ...

export function getDemos(t: (key: string) => string): Project[] {
    return [
        {
            title: "Victor Mane Tattoo",
            category: "Landing Page",
            result: t("portfolio.item18.result"),
            image: "/images/victorMane.png",
            url: "#",
            video: "/videos/victor mane.mp4"
        },
    ]
}

export function getProjects(t: (key: string) => string): Project[] {
    return [
        {
            title: "Salida Fiscal",
            category: t("portfolio.item1.type"),
            result: t("portfolio.item1.result"),
            image: "/images/saidafiscal.png",
            url: "https://saidafiscal.pro",
        },
        // {
        //   title: "Perceivo AI",
        //   category: t("portfolio.item3.type"),
        //   result: t("portfolio.item3.result"),
        //   image: "/images/perceivoAI.png",
        //   url: "https://perceivoai.agency",
        // },
        // {
        //   title: "Perceivo AI Franquias",
        //   category: t("portfolio.item4.type"),
        //   result: t("portfolio.item4.result"),
        //   image: "/images/perceivoAIFranquias.png",
        //   url: "https://franchise.perceivoai.agency",
        // },
        // {
        //   title: "Roberta Torquetti",
        //   category: t("portfolio.item11.type"),
        //   result: t("portfolio.item11.result"),
        //   image: "/images/TorquettiFisioterapia.png",
        //   url: "https://fisioterapia.protoly.lat/",
        // },
        {
            title: "Planificación Patrimonial",
            category: t("portfolio.item12.type"),
            result: t("portfolio.item12.result"),
            image: "/images/PlanejamientoPatrimonial.png",
            url: "http://planejamentopatrimonial.pro",
        },
        {
            title: "IusChain",
            category: t("portfolio.item13.type"),
            result: t("portfolio.item13.result"),
            image: "/images/iuschain.png",
            url: "https://www.iuschain.xyz/",
        },
        {
            title: "Hearth",
            category: t("portfolio.item14.type"),
            result: t("portfolio.item14.result"),
            image: "/images/hearth.png",
            url: "https://hearth.protolylat.com/",
        },
        {
            title: "Biodescodificación",
            category: t("portfolio.item15.type"),
            result: t("portfolio.item15.result"),
            image: "/images/biodecodificacion.png",
            url: "https://biodescodificacion.protolylat.com/",
        },
        {
            title: "Booking Pro",
            category: t("portfolio.item16.type"),
            result: t("portfolio.item16.result"),
            image: "/images/bookingpro.png",
            url: "https://bookingpro.protoly.lat/",
        },
        {
            title: "System 10x",
            category: t("portfolio.item17.type"),
            result: t("portfolio.item17.result"),
            image: "/images/system10x.png",
            url: "https://system10x.protolylat.com/",
        },
        {
            title: "Victor Mane",
            category: t("portfolio.item18.type"),
            result: t("portfolio.item18.result"),
            image: "/images/victorMane.png",
            url: "https://www.victormanetattoo.protolylat.com/",
        },
        {
            title: "Inkstinct NYC",
            category: t("portfolio.item19.type"),
            result: t("portfolio.item19.result"),
            image: "/images/inkstinct.png",
            url: "https://inkstinctnyc.com/",
            position: "object-top",
        },
    ]
}


