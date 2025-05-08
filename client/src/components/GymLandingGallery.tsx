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

// Import gym landing page images
import trainHarder from "@assets/1_TRAIN-HARDER-LIVE-STRONGER.png";
import unleashBeast from "@assets/2_UNLEASH-YOUR-INNER-BEAST.png";
import fuelAmbition from "@assets/3_FUEL-YOUR-AMBITION.png";
import customizedPrograms from "@assets/4_CUSTOMIZED-PROGRAMS-ELITE-RESULTS.png";
import steelGrit from "@assets/5_THE-STEEL-GRIT-DIFFERENCE.png";
import levelUp from "@assets/6_ARE-YOU-READY-TO-LEVEL-UP.png";
import testimonials from "@assets/7_TESTIMONIALS-FROM-ZERO-TO-HERO.png";
import startTransformation from "@assets/8_START-YOUR-TRANSFORMATION-TODAY.png";

interface GymLandingGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const GymLandingGallery = ({ isOpen, onClose }: GymLandingGalleryProps) => {
  const gymLandingPages = [
    { 
      src: trainHarder, 
      alt: "Train Harder Live Stronger", 
      title: "Train Harder, Live Stronger",
      description: "Motivational hero section with compelling call to action"
    },
    { 
      src: unleashBeast, 
      alt: "Unleash Your Inner Beast", 
      title: "Unleash Your Inner Beast",
      description: "Progressive transformation showcase with training philosophy highlights"
    },
    { 
      src: fuelAmbition, 
      alt: "Fuel Your Ambition", 
      title: "Fuel Your Ambition",
      description: "Core values section with discipline, perseverance and results focus" 
    },
    { 
      src: customizedPrograms, 
      alt: "Customized Programs", 
      title: "Customized Programs, Elite Results",
      description: "Service highlight section with training, nutrition and recovery focus"
    },
    { 
      src: steelGrit, 
      alt: "Steel Grit Difference", 
      title: "The Steel Grit Difference",
      description: "Unique value proposition with certified expertise and specialized coaching"
    },
    { 
      src: levelUp, 
      alt: "Ready to Level Up", 
      title: "Are You Ready to Level Up?",
      description: "Lead generation section targeted at ambitious individuals"
    },
    { 
      src: testimonials, 
      alt: "Testimonials", 
      title: "Testimonials - From Zero to Hero",
      description: "Social proof section with before/after visuals and success stories"
    },
    { 
      src: startTransformation, 
      alt: "Start Transformation", 
      title: "Start Your Transformation Today",
      description: "Call to action with limited-time offer to drive conversions"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentDesign = gymLandingPages[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gymLandingPages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gymLandingPages.length) % gymLandingPages.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl bg-gray-900/95 border border-gray-800 text-white backdrop-blur-lg p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0 relative">
          <DialogTitle className="text-2xl font-bold text-purple-300">Gym Landing Page Designs</DialogTitle>
          <DialogDescription className="text-gray-400">
            High-conversion fitness landing pages with motivational design elements
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
            {gymLandingPages.length > 1 && (
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
          {gymLandingPages.length > 1 && (
            <div className="flex justify-center items-center mt-4 overflow-x-auto pb-2 space-x-2">
              {gymLandingPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                    index === currentImageIndex ? "bg-purple-500" : "bg-gray-600"
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

export default GymLandingGallery;