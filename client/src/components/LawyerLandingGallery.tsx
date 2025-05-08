import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";

// Import lawyer landing page images
import highProfileLawyer from "@assets/1_High-Profile-Lawyer-Landing-Page-Design-Presentation.png";
import heroVisualHook from "@assets/2_Hero-Section-Visual-Hook.png";
import heroHeadline from "@assets/3_Hero-Section-Headline-and-Tagline.png";
import authorityExpertise from "@assets/4_Authority-and-Expertise.png";
import trustConfidentiality from "@assets/5_Trust-and-Confidentiality.png";
import clearCta from "@assets/6_Clear-Call-to-Action.png";
import pageLayout from "@assets/7_Page-Layout-and-Design-Elements.png";
import summary from "@assets/8_Summary-and-Next-Steps.png";

interface LawyerLandingGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const LawyerLandingGallery = ({ isOpen, onClose }: LawyerLandingGalleryProps) => {
  const lawyerLandingPages = [
    { 
      src: highProfileLawyer, 
      alt: "High Profile Lawyer Landing Page", 
      title: "High-Profile Lawyer Landing Page: Design Presentation",
      description: "Bold, dark theme emphasizing authority, trust, and confidentiality"
    },
    { 
      src: heroVisualHook, 
      alt: "Hero Section Visual Hook", 
      title: "Hero Section: Visual Hook",
      description: "Full-screen dark marble and gold visuals creating a prestigious effect"
    },
    { 
      src: heroHeadline, 
      alt: "Hero Section Headline and Tagline", 
      title: "Hero Section: Headline & Tagline",
      description: "Justice, Integrity, Excellence - powerful headline in large serif font" 
    },
    { 
      src: authorityExpertise, 
      alt: "Authority and Expertise", 
      title: "Authority & Expertise",
      description: "Practice areas and achievements establishing credibility and deep legal expertise"
    },
    { 
      src: trustConfidentiality, 
      alt: "Trust and Confidentiality", 
      title: "Trust & Confidentiality",
      description: "Privacy and client testimonials highlighting professional, discreet service"
    },
    { 
      src: clearCta, 
      alt: "Clear Call to Action", 
      title: "Clear Call to Action",
      description: "Gold-colored prominent button with benefit-driven text and urgency cues"
    },
    { 
      src: pageLayout, 
      alt: "Page Layout and Design Elements", 
      title: "Page Layout & Design Elements",
      description: "Dark theme with gold accents, elegant typography, and clean minimalist layout"
    },
    { 
      src: summary, 
      alt: "Summary and Next Steps", 
      title: "Summary & Next Steps",
      description: "Performance metrics and continuous improvement plan for conversion optimization"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentDesign = lawyerLandingPages[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lawyerLandingPages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lawyerLandingPages.length) % lawyerLandingPages.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl bg-gray-900/95 border border-gray-800 text-white backdrop-blur-lg p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0 relative">
          <DialogTitle className="text-2xl font-bold text-amber-300">Lawyer Landing Page Designs</DialogTitle>
          <DialogDescription className="text-gray-400">
            Professional landing pages for law firms with trust-building design elements
          </DialogDescription>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white focus:outline-none transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>
        
        <div className="p-6 pt-4">
          <div className="relative">
            {/* Current Image */}
            <div className="relative overflow-hidden rounded-lg bg-gray-800/50 border border-gray-700">
              <motion.img 
                key={currentImageIndex}
                src={currentDesign.src}
                alt={currentDesign.alt}
                className="w-full h-auto object-contain max-h-[70vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">{currentDesign.title}</h3>
                <p className="text-gray-300 text-sm">{currentDesign.description}</p>
              </div>
            </div>
            
            {/* Navigation Controls */}
            {lawyerLandingPages.length > 1 && (
              <div className="absolute top-1/2 left-0 right-0 -mt-4 flex justify-between px-4">
                <button 
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 backdrop-blur-sm transition-colors"
                >
                  ←
                </button>
                <button 
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 backdrop-blur-sm transition-colors"
                >
                  →
                </button>
              </div>
            )}
          </div>
          
          {/* Image Dots/Thumbnails */}
          {lawyerLandingPages.length > 1 && (
            <div className="flex justify-center items-center mt-4 overflow-x-auto pb-2 space-x-2">
              {lawyerLandingPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                    index === currentImageIndex ? "bg-amber-500" : "bg-gray-600"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LawyerLandingGallery;