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
      <DialogContent className="sm:max-w-5xl bg-gray-900/95 border border-gray-800 text-white backdrop-blur-lg p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0 relative">
          <DialogTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">Steel Grit Fitness</DialogTitle>
          <DialogDescription className="text-gray-400">
            High-conversion fitness landing pages with motivational design elements and dramatic lighting
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
            <div className="relative overflow-hidden rounded-lg bg-gray-900/80 border border-purple-700/40 shadow-lg shadow-green-500/10">
              <motion.img 
                key={currentImageIndex}
                src={currentDesign.src}
                alt={currentDesign.alt}
                className="w-full h-auto object-contain max-h-[70vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 backdrop-blur-sm border-t border-purple-800/30">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">{currentDesign.title}</h3>
                <p className="text-gray-300 text-sm">{currentDesign.description}</p>
              </div>
            </div>
            
            {/* Navigation Controls */}
            {gymLandingPages.length > 1 && (
              <div className="absolute top-1/2 left-0 right-0 -mt-4 flex justify-between px-4">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-purple-900/70 backdrop-blur-sm transition-colors border border-purple-500/30"
                >
                  ←
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-green-900/70 backdrop-blur-sm transition-colors border border-green-500/30"
                >
                  →
                </button>
              </div>
            )}
          </div>
          
          {/* Image Dots/Thumbnails */}
          {gymLandingPages.length > 1 && (
            <div className="flex justify-center items-center mt-6 overflow-x-auto pb-2 space-x-3">
              {gymLandingPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${
                    index === currentImageIndex 
                    ? index % 2 === 0 
                      ? "bg-purple-500 scale-110 shadow-md shadow-purple-500/50" 
                      : "bg-green-500 scale-110 shadow-md shadow-green-500/50"
                    : "bg-gray-700 hover:bg-gray-600"
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