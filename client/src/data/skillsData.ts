export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  skills: string[];
};

export type ProficiencySkill = {
  name: string;
  percentage: number;
  category: 'technical' | 'professional';
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "brain",
    skills: [
      "Generative AI Implementation",
      "AI Solutions Architecture",
      "Machine Learning Pipelines",
      "Responsible AI Frameworks",
      "AI Strategy Development"
    ]
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    icon: "cloud",
    skills: [
      "Microsoft Azure Solutions",
      "Cloud Architecture Design",
      "Infrastructure as Code",
      "Serverless Architecture",
      "Cloud Migration Strategy"
    ]
  },
  {
    id: "security",
    title: "Security & Compliance",
    icon: "shield",
    skills: [
      "Microsoft Purview Implementation",
      "Information Security Architecture",
      "Data Protection Strategies",
      "Sensitive Information Management",
      "Compliance Framework Implementation"
    ]
  }
];

export const proficiencySkills: ProficiencySkill[] = [
  {
    name: "Microsoft Azure",
    percentage: 95,
    category: "technical"
  },
  {
    name: "AI & Machine Learning",
    percentage: 90,
    category: "technical"
  },
  {
    name: "Information Security",
    percentage: 85,
    category: "technical"
  },
  {
    name: "Cloud Architecture",
    percentage: 92,
    category: "technical"
  },
  {
    name: "Leadership & Coaching",
    percentage: 95,
    category: "professional"
  },
  {
    name: "Project Management",
    percentage: 88,
    category: "professional"
  },
  {
    name: "Strategic Planning",
    percentage: 90,
    category: "professional"
  },
  {
    name: "Digital Transformation",
    percentage: 93,
    category: "professional"
  }
];

export default { skillCategories, proficiencySkills };
