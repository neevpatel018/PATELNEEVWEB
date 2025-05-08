import React, { useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Import the images
import slide1 from '@assets/1_FiReal-Estate-Agent-Finding-Spaces-Youll-Love-To-Live-In.png';
import slide2 from '@assets/2_Discover-Your-Dream-Home.png';
import slide3 from '@assets/3_Unparalleled-Expertise.png';
import slide4 from '@assets/4_Client-Testimonials.png';
import slide5 from '@assets/5_Featured-Luxury-Properties.png';
import slide6 from '@assets/6_Virtual-Tours-Available.png';
import slide7 from '@assets/7_Our-Commitment-to-Excellence.png';
import slide8 from '@assets/8_Contact-Us-Today.png';

interface RealEstateLandingGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const RealEstateLandingGallery = ({ isOpen, onClose }: RealEstateLandingGalleryProps) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-5xl bg-gray-900 rounded-xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={onClose}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="py-8">
              <Carousel className="mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex justify-center">
                      <img src={slide1} alt="Real Estate Landing Page Slide 1" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center">
                      <img src={slide2} alt="Real Estate Landing Page Slide 2" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center">
                      <img src={slide3} alt="Real Estate Landing Page Slide 3" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center">
                      <img src={slide4} alt="Real Estate Landing Page Slide 4" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center">
                      <img src={slide5} alt="Real Estate Landing Page Slide 5" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center">
                      <img src={slide6} alt="Real Estate Landing Page Slide 6" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center">
                      <img src={slide7} alt="Real Estate Landing Page Slide 7" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center">
                      <img src={slide8} alt="Real Estate Landing Page Slide 8" className="w-full h-auto max-h-[80vh] object-contain" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RealEstateLandingGallery;