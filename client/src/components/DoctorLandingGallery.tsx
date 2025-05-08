import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import the doctor landing page images
import introImage from "@assets/introdoc.png";
import aboutImage from "@assets/aboutdoc.png";
import specImage from "@assets/spedoc.png";
import patientImage from "@assets/patdoc.png";
import commitmentImage from "@assets/commdoc.png";
import appointmentImage from "@assets/appodoc.png";
import contactImage from "@assets/contdoc.png";
import paymentImage from "@assets/paydoc.png";

interface DoctorLandingGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const DoctorLandingGallery = ({ isOpen, onClose }: DoctorLandingGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of doctor landing page images
  const images = [
    { src: introImage, alt: "Doctor Introduction Section", caption: "Introduction & Hero Section" },
    { src: aboutImage, alt: "About Doctor Section", caption: "About Doctor Profile" },
    { src: specImage, alt: "Specializations Section", caption: "Medical Specializations" },
    { src: patientImage, alt: "Patient Testimonials", caption: "Patient Testimonials" },
    { src: commitmentImage, alt: "Commitment Section", caption: "Our Commitment to Patients" },
    { src: appointmentImage, alt: "Appointment Booking", caption: "Appointment Booking" },
    { src: contactImage, alt: "Contact Information", caption: "Contact Information" },
    { src: paymentImage, alt: "Payment Options", caption: "Insurance & Payment Options" },
  ];

  // Go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle clicking on an image
  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle key press events
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          goToPrev();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
            className="relative bg-gray-900/90 border border-blue-800/30 rounded-xl p-4 max-w-7xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <Button 
                size="icon" 
                variant="ghost" 
                className="rounded-full h-8 w-8 text-gray-300 hover:bg-blue-900/20 hover:text-white"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex flex-col h-full">
              {/* Main image display */}
              <div className="relative flex-1 flex items-center justify-center overflow-hidden p-4">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="max-h-[60vh] w-auto object-contain rounded-lg border border-blue-500/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Navigation arrows */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-4 bg-gray-900/60 hover:bg-gray-800/80 text-white rounded-full h-10 w-10 shadow-md"
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 bg-gray-900/60 hover:bg-gray-800/80 text-white rounded-full h-10 w-10 shadow-md"
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              
              <div className="mt-4">
                <h3 className="text-center text-xl font-semibold text-blue-200 mb-3">
                  {images[currentIndex].caption}
                </h3>
                
                <p className="text-center text-gray-400 text-sm mb-4">
                  {currentIndex + 1} of {images.length}
                </p>
                
                {/* Thumbnail navigation */}
                <div className="flex justify-center gap-2 overflow-x-auto pb-3 px-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageClick(index)}
                      className={`flex-shrink-0 h-16 w-16 rounded-md overflow-hidden border-2 transition-all ${
                        index === currentIndex 
                          ? 'border-blue-500 ring-2 ring-blue-500/50' 
                          : 'border-gray-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={`Thumbnail ${index + 1}`} 
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DoctorLandingGallery;