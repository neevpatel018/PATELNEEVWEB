export type CertificationTag = {
  name: string;
};

export type Certification = {
  id: string;
  title: string;
  provider: 'microsoft' | 'linkedin';
  date: string;
  tags?: CertificationTag[];
  imagePath: string;
};

export const certifications: Certification[] = [
  // LinkedIn Certifications
  {
    id: "linkedin-1",
    title: "Amplify Your Critical Thinking with Generative AI",
    provider: "linkedin",
    date: "April 12, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "Critical Thinking" }
    ],
    imagePath: "attached_assets/Amplify Your Critical Thinking with Generative AI.png"
  },
  {
    id: "linkedin-2",
    title: "Become an AI-Powered People Manager",
    provider: "linkedin",
    date: "April 08, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "People Management" }
    ],
    imagePath: "attached_assets/Become an AI-Powered People Manager.png"
  },
  {
    id: "linkedin-3",
    title: "Building a Collaborative Team Culture with AI",
    provider: "linkedin",
    date: "April 12, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "Cross-team Collaboration" },
      { name: "Team Culture" }
    ],
    imagePath: "attached_assets/Building a Collaborative Team Culture with AI.png"
  },
  {
    id: "linkedin-4",
    title: "Enhance Your Coaching Impact with Generative AI",
    provider: "linkedin",
    date: "April 12, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "Coaching & Mentoring" },
      { name: "Generative AI Tools" }
    ],
    imagePath: "attached_assets/Enhance Your Coaching Impact with Generative AI.png"
  },
  {
    id: "linkedin-5",
    title: "The Manager's Guide to Career Conversations in the Age of AI",
    provider: "linkedin",
    date: "April 08, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "Career Management" },
      { name: "People Management" }
    ],
    imagePath: "attached_assets/The Manager's Guide to Career Conversations in the Age of AI.png"
  },
  {
    id: "linkedin-6",
    title: "AI for Managers by Microsoft and LinkedIn",
    provider: "linkedin",
    date: "April 12, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "Cross-team Collaboration" },
      { name: "AI Productivity" }
    ],
    imagePath: "attached_assets/Microsoft AI Skills Fest.png"
  },
  
  // Microsoft Certifications
  {
    id: "microsoft-1",
    title: "Create and manage sensitive information types",
    provider: "microsoft",
    date: "April 10, 2025",
    imagePath: "attached_assets/Create-and-manage-sensitive-information-type.png"
  },
  {
    id: "microsoft-2",
    title: "Describe cloud computing",
    provider: "microsoft",
    date: "April 9, 2025",
    imagePath: "attached_assets/Describe-cloud-computing.png"
  },
  {
    id: "microsoft-3",
    title: "Enhance public sector services with generative AI",
    provider: "microsoft",
    date: "April 13, 2025",
    imagePath: "attached_assets/Enhance-public-sector-services-with-generative-AI.png"
  },
  {
    id: "microsoft-4",
    title: "Introduction to information security and compliance in Microsoft Purview",
    provider: "microsoft",
    date: "April 10, 2025",
    imagePath: "attached_assets/Introduction-to-information-security-and-compliance.png"
  },
  {
    id: "microsoft-5",
    title: "Plan and prepare to develop AI solutions on Azure",
    provider: "microsoft",
    date: "April 10, 2025",
    imagePath: "attached_assets/Plan-and-prepare-to-develop-AI-solutions-on-Azure.png"
  }
];

export default certifications;
