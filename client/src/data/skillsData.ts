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
    title: "🤖 AI & Machine Learning",
    icon: "brain",
    skills: [
      "AI Tools for Productivity",
      "Generative AI with ChatGPT & MidJourney",
      "AI in Everyday Life Projects",
      "Canva & AI Integration",
      "Beginner Python for AI"
    ]
  },
  {
    id: "cloud",
    title: "☁️ Cloud & Development",
    icon: "cloud",
    skills: [
      "Web Hosting Basics (GitHub Pages, Netlify)",
      "Cloud Concepts with Google Cloud / Azure Fundamentals",
      "Interactive Portfolio Hosting",
      "Version Control with Git & GitHub",
      "Challenge Deployments"
    ]
  },
  {
    id: "security",
    title: "🔐 Security Awareness",
    icon: "shield",
    skills: [
      "Internet Safety Practices",
      "Two-Factor Authentication Setup",
      "Secure Coding Basics",
      "Privacy Settings Management",
      "Responsible AI Use"
    ]
  }
];

export const proficiencySkills: ProficiencySkill[] = [
  {
    name: "Canva Design",
    percentage: 95,
    category: "technical"
  },
  {
    name: "AI & ChatGPT Usage",
    percentage: 90,
    category: "technical"
  },
  {
    name: "SQL",
    percentage: 50,
    category: "technical"
  },
  {
    name: "Python Basics",
    percentage: 70,
    category: "technical"
  },
  {
    name: "Git & GitHub",
    percentage: 65,
    category: "technical"
  },
  {
    name: "Creativity & Innovation",
    percentage: 95,
    category: "professional"
  },
  {
    name: "Content Creation for Social Media",
    percentage: 92,
    category: "professional"
  },
  {
    name: "Marketing & Branding",
    percentage: 89,
    category: "professional"
  },
  {
    name: "Communication & Presentation",
    percentage: 90,
    category: "professional"
  },
  {
    name: "Problem Solving",
    percentage: 88,
    category: "professional"
  }
];

export default { skillCategories, proficiencySkills };
