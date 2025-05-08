export type LandingPageSubCategory = {
  id: string;
  title: string;
  description: string;
};

export type ServiceSubItem = {
  id: string;
  title: string;
  description: string;
  galleryType?: "entrance" | "device" | "office";
  subCategories?: LandingPageSubCategory[];
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  subServices: ServiceSubItem[];
};

export const services: ServiceItem[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Professional graphic design services for both digital and print media with focus on modern aesthetics and brand identity.",
    icon: "palette",
    subServices: [
      {
        id: "mockups",
        title: "Mockups",
        description: "High-quality product mockups for presentations, marketing materials, and product visualization.",
        galleryType: "entrance"
      },
      {
        id: "thumbnail-design",
        title: "Thumbnail Design",
        description: "Eye-catching thumbnail designs for videos, blogs, and digital content that drive engagement and clicks."
      }
    ]
  },
  {
    id: "website-design",
    title: "Website Design",
    description: "Custom website design services focused on user experience, modern aesthetics, and responsive layouts.",
    icon: "monitor",
    subServices: [
      {
        id: "landing-pages",
        title: "Landing Pages",
        description: "High-conversion landing pages designed to capture leads and communicate your value proposition effectively.",
        subCategories: [
          {
            id: "lawyer-landing",
            title: "Lawyer Landing Pages",
            description: "Professional landing pages for law firms with trust-building design elements and clear call-to-actions."
          },
          {
            id: "doctor-landing",
            title: "Doctor Landing Pages",
            description: "Professional and trustworthy landing pages for medical practices with clean design and patient-focused information."
          },
          {
            id: "realestate-landing",
            title: "Real Estate Landing Pages",
            description: "Elegant property showcase landing pages with visual emphasis and lead capture optimization."
          },
          {
            id: "gym-landing",
            title: "Gym Landing Pages",
            description: "High-energy fitness landing pages designed to motivate visitors and drive membership signups."
          }
        ]
      },
      {
        id: "custom-ui-design",
        title: "Custom UI Design",
        description: "Unique user interface designs that reflect your brand identity while providing intuitive user experiences."
      }
    ]
  }
];

export default services;
