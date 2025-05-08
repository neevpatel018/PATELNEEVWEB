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

// Import all mockup images
import entranceMockup2 from "@assets/ENTRANCE MOCKUP 2.webp";
import entranceMockup3 from "@assets/ENTRANCE MOCKUP 3.webp";
import mockLaptop from "@assets/MOCK LAP.png";
import mockMobile from "@assets/MOCK MOBILE.png";
import mockWeb from "@assets/MOCK WEB.png";
import officeMockup from "@assets/OFFICE MOCKKUP.webp";

type GalleryType = "entrance" | "device" | "office";

interface MockupGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  type: GalleryType;
}

const getImagesForType = (type: GalleryType) => {
  switch(type) {
    case "entrance":
      return [
        { src: entranceMockup2, alt: "Entrance Mockup 2", title: "Modern Reception Area" },
        { src: entranceMockup3, alt: "Entrance Mockup 3", title: "Elegant Entrance Design" }
      ];
    case "device":
      return [
        { src: mockLaptop, alt: "Laptop Mockup", title: "Laptop Website Display" },
        { src: mockMobile, alt: "Mobile Mockup", title: "Mobile Responsive Design" },
        { src: mockWeb, alt: "Web Mockup", title: "Multi-Device Web Display" }
      ];
    case "office":
      return [
        { src: officeMockup, alt: "Office Mockup", title: "Minimalist Office Setup" }
      ];
    default:
      return [];
  }
};

const getDialogTitle = (type: GalleryType) => {
  switch(type) {
    case "entrance":
      return "Entrance Mockup Designs";
    case "device":
      return "Device Display Mockups";
    case "office":
      return "Office Environment Designs";
    default:
      return "Project Mockups";
  }
};

const MockupGallery = ({ isOpen, onClose, type }: MockupGalleryProps) => {
  const images = getImagesForType(type);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl bg-gray-900/95 border border-gray-800 text-white backdrop-blur-lg p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0 relative">
          <DialogTitle className="text-2xl font-bold text-blue-300">{getDialogTitle(type)}</DialogTitle>
          <DialogDescription className="text-gray-400">
            Professional design mockups for your project
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
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-auto object-contain max-h-[70vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">{currentImage.title}</h3>
              </div>
            </div>
            
            {/* Navigation Controls */}
            {images.length > 1 && (
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
          
          {/* Image Dots */}
          {images.length > 1 && (
            <div className="flex justify-center space-x-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MockupGallery;