import { notFound } from "next/navigation"
import { CaseStudyContent } from "@/components/case-study-content"

const caseStudies = {
  "nbc-washington-feature": {
    title: "NBC Washington Feature",
    category: "Documentary",
    client: "NBC4 Washington",
    duration: "8 weeks",
    year: "2024",
    heroImage: "/news-broadcast-studio-professional-lighting.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    results: {
      views: "2.3M",
      engagement: "45%",
      shares: "15K",
    },
    challenge:
      "NBC Washington needed a compelling documentary series that would highlight the diverse stories of Washington DC's communities while maintaining broadcast quality standards and tight deadlines.",
    solution:
      "We deployed a multi-camera setup with our experienced documentary team, conducting over 50 interviews across the DC metro area. Our post-production team worked in parallel to deliver episodes on schedule.",
    testimonial: {
      quote:
        "Washington Digital Media delivered exceptional work that exceeded our broadcast standards. Their team's professionalism and creative vision made this project a success.",
      author: "Sarah Johnson",
      role: "Executive Producer, NBC4 Washington",
      avatar: "/professional-woman-executive-portrait.jpg",
    },
    services: ["Documentary Production", "Multi-Camera Setup", "Post-Production", "Color Grading"],
    gallery: [
      "/news-broadcast-studio-professional-lighting.jpg",
      "/documentary-interview-setup-professional.jpg",
      "/video-editing-suite-post-production.jpg",
    ],
  },
  "capital-one-campaign": {
    title: "Capital One Campaign",
    category: "Commercial",
    client: "Capital One",
    duration: "6 weeks",
    year: "2024",
    heroImage: "/corporate-office-modern-business-professional.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    results: {
      roi: "150%",
      leads: "2.5K",
      conversions: "35%",
    },
    challenge:
      "Capital One required a multi-platform campaign that would resonate with diverse audiences while maintaining brand consistency across TV, digital, and social media channels.",
    solution:
      "We created a cohesive campaign with multiple video formats optimized for each platform, from 30-second TV spots to 6-second social bumpers, all sharing a consistent visual language.",
    testimonial: {
      quote:
        "The ROI on this campaign exceeded all our expectations. Washington Digital Media understood our brand and delivered content that truly connected with our audience.",
      author: "Michael Chen",
      role: "VP of Marketing, Capital One",
      avatar: "/professional-businessman-portrait-headshot.jpg",
    },
    services: ["Commercial Production", "Multi-Platform Content", "Motion Graphics", "Media Buying Strategy"],
    gallery: [
      "/corporate-office-modern-business-professional.jpg",
      "/commercial-video-shoot-set.jpg",
      "/brand-campaign-creative-team.jpg",
    ],
  },
  "dc-food-bank-gala": {
    title: "DC Food Bank Gala",
    category: "Event",
    client: "DC Food Bank",
    duration: "3 weeks",
    year: "2024",
    heroImage: "/charity-gala-event-elegant-venue.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    results: {
      raised: "$500K",
      attendance: "800+",
      donations: "200%",
    },
    challenge:
      "The DC Food Bank needed comprehensive event coverage that would capture the emotional impact of their work while encouraging real-time and post-event donations.",
    solution:
      "We provided full live streaming coverage, real-time highlight reels, and a compelling recap video that continued to drive donations weeks after the event.",
    testimonial: {
      quote:
        "The video content created by Washington Digital Media helped us raise 200% more than previous years. They captured the heart of our mission beautifully.",
      author: "Maria Gonzalez",
      role: "Director, DC Food Bank",
      avatar: "/professional-woman-nonprofit-director-portrait.jpg",
    },
    services: ["Live Event Coverage", "Live Streaming", "Recap Video", "Social Media Content"],
    gallery: [
      "/charity-gala-event-elegant-venue.jpg",
      "/nonprofit-event-speakers-stage.jpg",
      "/charity-dinner-fundraiser-crowd.jpg",
    ],
  },
  "tech-startup-launch": {
    title: "Tech Startup Launch",
    category: "Corporate",
    client: "TechStart DC",
    duration: "4 weeks",
    year: "2024",
    heroImage: "/technology-startup-office-modern-workspace.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    results: {
      funding: "Series A",
      views: "500K",
      press: "50+",
    },
    challenge:
      "TechStart DC needed a compelling pitch video and brand story that would help them secure Series A funding while establishing credibility with potential enterprise clients.",
    solution:
      "We created a comprehensive video package including a founder story, product demo, customer testimonials, and investor-focused pitch video that clearly communicated their value proposition.",
    testimonial: {
      quote:
        "The video package Washington Digital Media created was instrumental in closing our Series A. Investors commented specifically on the quality and professionalism.",
      author: "Isaiah Decruise",
      role: "CEO, TechStart DC",
      avatar: "/professional-businessman-portrait-headshot.jpg",
    },
    services: ["Brand Video", "Product Demo", "Testimonial Videos", "Pitch Deck Video"],
    gallery: [
      "/technology-startup-office-modern-workspace.jpg",
      "/startup-team-brainstorming-session.jpg",
      "/tech-product-demo-presentation.jpg",
    ],
  },
  "restaurant-promo": {
    title: "Restaurant Promo",
    category: "Commercial",
    client: "El Tamarindo",
    duration: "2 weeks",
    year: "2024",
    heroImage: "/upscale-restaurant-interior-fine-dining.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    results: {
      traffic: "40%",
      bookings: "65%",
      social: "100K",
    },
    challenge:
      "El Tamarindo wanted to showcase their authentic cuisine and vibrant atmosphere to attract new customers while maintaining their loyal local following.",
    solution:
      "We created mouth-watering food videos, behind-the-scenes kitchen content, and customer testimonials that captured the restaurant's unique character and culinary excellence.",
    testimonial: {
      quote:
        "Our foot traffic increased 40% after the campaign launched. Washington Digital Media captured the essence of our restaurant perfectly.",
      author: "Carlos Rodriguez",
      role: "Owner, El Tamarindo",
      avatar: "/restaurant-owner-chef-portrait.jpg",
    },
    services: ["Food Videography", "Social Media Content", "Commercial Production", "Photography"],
    gallery: [
      "/upscale-restaurant-interior-fine-dining.jpg",
      "/chef-cooking-kitchen-action.jpg",
      "/delicious-food-plating-presentation.jpg",
    ],
  },
  "government-agency": {
    title: "Government Agency",
    category: "Documentary",
    client: "DC Mayor's Office on Latino Affairs",
    duration: "6 weeks",
    year: "2024",
    heroImage: "/government-building-washington-dc-capitol.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    results: {
      reach: "500K",
      engagement: "75%",
      awareness: "85%",
    },
    challenge:
      "The Mayor's Office needed to communicate important community programs and resources to DC's Latino population through culturally relevant and accessible content.",
    solution:
      "We produced a bilingual documentary series and social media campaign that highlighted community success stories and clearly explained available resources and programs.",
    testimonial: {
      quote:
        "Washington Digital Media understood our community's needs and created content that truly resonated. The response has been overwhelming.",
      author: "Dr. Patricia Ramirez",
      role: "Director, DC Latino Affairs",
      avatar: "/professional-woman-government-official.jpg",
    },
    services: ["Documentary Production", "Bilingual Content", "Social Media Campaign", "Community Outreach"],
    gallery: [
      "/government-building-washington-dc-capitol.jpg",
      "/community-meeting-diverse-audience.jpg",
      "/government-official-interview-setup.jpg",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = caseStudies[slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyContent caseStudy={caseStudy} />
}
