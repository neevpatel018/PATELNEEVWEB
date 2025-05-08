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

// Import thumbnail images
import iplTeams from "@assets/2.png";
import canvaBanner from "@assets/Black Red and White Brutalist Swiss Photographic Birthday Party Music YouTube Banner.png";
import canvaDesign from "@assets/CAN CANVA.png";
import iplPlayers from "@assets/IPL 1.png";
import iplKids from "@assets/IPL 2.png";
import kingDesign from "@assets/KING.png";

interface ThumbnailGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThumbnailGallery = ({ isOpen, onClose }: ThumbnailGalleryProps) => {
  const thumbnails = [
    { src: iplTeams, alt: "IPL Teams Design", title: "Cricket Team Thumbnails" },
    { src: canvaBanner, alt: "Canva Banner", title: "YouTube Channel Banner" },
    { src: canvaDesign, alt: "Canva Design", title: "Product Advertisement" },
    { src: iplPlayers, alt: "IPL Players", title: "Sports Player Showcase" },
    { src: iplKids, alt: "IPL Kids", title: "Creative Character Design" },
    { src: kingDesign, alt: "King Design", title: "Player Spotlight Design" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = thumbnails[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % thumbnails.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + thumbnails.length) % thumbnails.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl bg-gray-900/95 border border-gray-800 text-white backdrop-blur-lg p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0 relative">
          <DialogTitle className="text-2xl font-bold text-blue-300">Thumbnail Design Examples</DialogTitle>
          <DialogDescription className="text-gray-400">
            Eye-catching thumbnail designs for videos, blogs, and digital content
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
            {thumbnails.length > 1 && (
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
          {thumbnails.length > 1 && (
            <div className="flex justify-center space-x-2 mt-4">
              {thumbnails.map((_: any, index: number) => (
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

export default ThumbnailGallery;