export type ServiceSubItem = {
  id: string;
  title: string;
  description: string;
  galleryType?: "entrance" | "device" | "office";
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
        description: "High-conversion landing pages designed to capture leads and communicate your value proposition effectively."
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
