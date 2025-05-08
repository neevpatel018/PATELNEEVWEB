export type CertificationTag = {
  name: string;
};

export type Certification = {
  id: string;
  title: string;
  provider: 'microsoft' | 'linkedin';
  date: string;
  tags?: CertificationTag[];
  logoUrl: string;
};

export const certifications: Certification[] = [
  {
    id: "microsoft-1",
    title: "Create and manage sensitive information types",
    provider: "microsoft",
    date: "April 10, 2025",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    id: "microsoft-2",
    title: "Describe cloud computing",
    provider: "microsoft",
    date: "April 9, 2025",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    id: "microsoft-3",
    title: "Enhance public sector services with generative AI",
    provider: "microsoft",
    date: "April 13, 2025",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    id: "microsoft-4",
    title: "Introduction to information security and compliance in Microsoft Purview",
    provider: "microsoft",
    date: "April 10, 2025",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    id: "microsoft-5",
    title: "Plan and prepare to develop AI solutions on Azure",
    provider: "microsoft",
    date: "April 10, 2025",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    id: "linkedin-1",
    title: "Enhance Your Coaching Impact with Generative AI",
    provider: "linkedin",
    date: "April 12, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "Coaching & Mentoring" },
      { name: "Generative AI Tools" }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
  },
  {
    id: "linkedin-2",
    title: "AI for Managers by Microsoft and LinkedIn",
    provider: "linkedin",
    date: "April 12, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "Cross-team Collaboration" },
      { name: "AI Productivity" }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
  },
  {
    id: "linkedin-3",
    title: "The Manager's Guide to Career Conversations in the Age of AI",
    provider: "linkedin",
    date: "April 8, 2025",
    tags: [
      { name: "Artificial Intelligence for Business" },
      { name: "Career Management" },
      { name: "People Management" }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
  }
];

export default certifications;
