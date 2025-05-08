import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import real estate images
import realEstate1 from "@assets/1_FiReal-Estate-Agent-Finding-Spaces-Youll-Love-To-Live-In.png";
import realEstate2 from "@assets/2_Discover-Your-Dream-Home.png";
import realEstate3 from "@assets/3_Unparalleled-Expertise.png";
import realEstate4 from "@assets/4_Client-Testimonials.png";
import realEstate5 from "@assets/5_Featured-Luxury-Properties.png";
import realEstate6 from "@assets/6_Virtual-Tours-Available.png";
import realEstate7 from "@assets/7_Our-Commitment-to-Excellence.png";
import realEstate8 from "@assets/8_Contact-Us-Today.png";

interface RealEstateLandingGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const RealEstateLandingGallery = ({ isOpen, onClose }: RealEstateLandingGalleryProps) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  }, [onClose]);

  const slides = [
    { id: 1, image: realEstate1, alt: "Finding Spaces You'll Love To Live In" },
    { id: 2, image: realEstate2, alt: "Discover Your Dream Home" },
    { id: 3, image: realEstate3, alt: "Unparalleled Expertise" },
    { id: 4, image: realEstate4, alt: "Client Testimonials" },
    { id: 5, image: realEstate5, alt: "Featured Luxury Properties" },
    { id: 6, image: realEstate6, alt: "Virtual Tours Available" },
    { id: 7, image: realEstate7, alt: "Our Commitment to Excellence" },
    { id: 8, image: realEstate8, alt: "Contact Us Today" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Listen for keyboard events when gallery is open
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-5xl mx-auto p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button 
              onClick={onClose}
              className="absolute right-6 top-6 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex">
                <motion.img 
                  key={currentIndex}
                  src={slides[currentIndex].image} 
                  alt={slides[currentIndex].alt}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                    index === currentIndex ? 'bg-pink-500' : 'bg-gray-500 hover:bg-pink-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Slide counter */}
            <div className="absolute left-6 top-6 bg-black/50 rounded-md px-3 py-1 text-white text-sm">
              {currentIndex + 1} / {slides.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RealEstateLandingGallery;