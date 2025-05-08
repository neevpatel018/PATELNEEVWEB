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

// Import UI design images
import gameReviewsUI from "@assets/ui1 (1).png";
import gamerParadiseUI from "@assets/ui1 (2).png";
import gamerZoneUI from "@assets/ui1 (3).png";
import gamingAdventuresUI from "@assets/ui1 (4).png";
import gamingGalaxyUI from "@assets/ui1 (5).png";
import techInterfaceUI from "@assets/ui1 (6).png";
import uxPortfolioUI from "@assets/ui1 (7).png";
import casualGamesUI from "@assets/ui1 (8).png";

interface UIDesignGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const UIDesignGallery = ({ isOpen, onClose }: UIDesignGalleryProps) => {
  const uiDesigns = [
    { 
      src: gameReviewsUI, 
      alt: "Game Reviews UI", 
      title: "Game Reviews Interface",
      description: "Dark theme gaming review platform with modern typography and card-based layout"
    },
    { 
      src: gamerParadiseUI, 
      alt: "Gamer's Paradise Zone", 
      title: "Gamer's Paradise Zone",
      description: "Vibrant purple-themed gaming setup showcase with neon accent elements"
    },
    { 
      src: gamerZoneUI, 
      alt: "Gamer Zone UI", 
      title: "Level Up Gaming Experience",
      description: "Minimalist split layout design with high contrast and dramatic lighting" 
    },
    { 
      src: gamingAdventuresUI, 
      alt: "Gaming Adventures UI", 
      title: "Gaming Adventures in Digital Realm",
      description: "Futuristic UI with geometric elements and cyberpunk color scheme"
    },
    { 
      src: gamingGalaxyUI, 
      alt: "Gaming Galaxy UI", 
      title: "Gaming Galaxy Dashboard",
      description: "Full-featured gaming platform interface with neon accent lights and holographic elements"
    },
    { 
      src: techInterfaceUI, 
      alt: "Technology UI", 
      title: "Technology User Interface",
      description: "Clean split-screen signup form with product showcase and minimalist design"
    },
    { 
      src: uxPortfolioUI, 
      alt: "UX Design Portfolio", 
      title: "UX Design Portfolio",
      description: "Soft color palette portfolio page with clean typography and ample whitespace"
    },
    { 
      src: casualGamesUI, 
      alt: "Casual Games UI", 
      title: "Casual Games Interface",
      description: "High-contrast gaming promotion with atmospheric lighting and bold call-to-action"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentDesign = uiDesigns[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % uiDesigns.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + uiDesigns.length) % uiDesigns.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl bg-gray-900/95 border border-gray-800 text-white backdrop-blur-lg p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0 relative">
          <DialogTitle className="text-2xl font-bold text-blue-300">UI Design Examples</DialogTitle>
          <DialogDescription className="text-gray-400">
            Custom user interfaces for gaming, tech, and creative platforms
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
            {uiDesigns.length > 1 && (
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
          {uiDesigns.length > 1 && (
            <div className="flex justify-center items-center mt-4 overflow-x-auto pb-2 space-x-2">
              {uiDesigns.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                    index === currentImageIndex ? "bg-blue-500" : "bg-gray-600"
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

export default UIDesignGallery;