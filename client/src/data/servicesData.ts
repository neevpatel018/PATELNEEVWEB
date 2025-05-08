export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: 'technical' | 'business';
};

export const services: ServiceItem[] = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Implementation",
    description: "Develop comprehensive AI strategies and implementation plans tailored to your organization's specific needs and objectives.",
    features: [
      "AI Readiness Assessment",
      "Generative AI Implementation",
      "AI Governance Frameworks"
    ],
    icon: "robot",
    category: "technical"
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Optimization",
    description: "Guide your organization through successful cloud migration with a focus on Microsoft Azure solutions and optimization.",
    features: [
      "Cloud Migration Strategy",
      "Azure Architecture Design",
      "Cost Optimization Analysis"
    ],
    icon: "cloud",
    category: "technical"
  },
  {
    id: "info-security",
    title: "Information Security & Compliance",
    description: "Implement robust information security frameworks and ensure compliance with regulatory requirements.",
    features: [
      "Microsoft Purview Implementation",
      "Security Posture Assessment",
      "Sensitive Information Management"
    ],
    icon: "shield",
    category: "technical"
  },
  {
    id: "executive-coaching",
    title: "Executive Coaching & Training",
    description: "Provide leadership coaching and training focused on technology transformation and AI integration.",
    features: [
      "AI Leadership Development",
      "Digital Transformation Coaching",
      "Team Capabilities Assessment"
    ],
    icon: "users",
    category: "business"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Strategy",
    description: "Develop comprehensive digital transformation roadmaps aligned with business objectives and technological capabilities.",
    features: [
      "Digital Maturity Assessment",
      "Technology Roadmap Development",
      "Change Management Strategy"
    ],
    icon: "workflow",
    category: "business"
  },
  {
    id: "tech-advisory",
    title: "Tech Advisory Services",
    description: "Provide expert advice on technology selection, implementation, and optimization for maximum business value.",
    features: [
      "Technology Stack Assessment",
      "Vendor Selection Guidance",
      "Technology ROI Analysis"
    ],
    icon: "search",
    category: "business"
  }
];

export default services;
