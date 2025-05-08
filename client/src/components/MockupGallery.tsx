import { useState } from 'react';
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// Import all mockups
import entranceMockup1 from "../assets/mockups/entrance-mockup-1.webp";
import entranceMockup2 from "../assets/mockups/entrance-mockup-2.webp";
import entranceMockup3 from "../assets/mockups/entrance-mockup-3.webp";
import laptopMockup from "../assets/mockups/laptop-mockup.png";
import mobileMockup from "../assets/mockups/mobile-mockup.png";
import webMockup from "../assets/mockups/web-mockup.png";
import officeMockup from "../assets/mockups/office-mockup.webp";
import portfolioWeb from "../assets/mockups/portfolio-web.png";

interface MockupGalleryProps {
  category: string;
}

const MockupGallery = ({ category }: MockupGalleryProps) => {
  const mockups = {
    'entrance': [
      { src: entranceMockup1, alt: "Modern office reception mockup with square logo display", title: "Reception Area Design" },
      { src: entranceMockup2, alt: "Elegant circular reception desk mockup with backlit display", title: "Circular Reception Design" },
      { src: entranceMockup3, alt: "Hexagonal reception desk mockup with illuminated logo", title: "Premium Reception Area" },
    ],
    'device': [
      { src: laptopMockup, alt: "Portfolio website displayed on a laptop", title: "Portfolio Laptop View" },
      { src: mobileMockup, alt: "Portfolio website responsive mobile design", title: "Mobile Responsive Design" },
      { src: webMockup, alt: "Multi-device portfolio website showcase", title: "Cross-Device Compatibility" },
      { src: portfolioWeb, alt: "Portfolio website with mobile device displays", title: "Responsive Web Design" },
    ],
    'office': [
      { src: officeMockup, alt: "Minimalist office workspace with wall display", title: "Modern Workspace Design" },
    ]
  };

  // Select the appropriate mockup array based on category
  const mockupArray = category === 'entrance' ? mockups.entrance : 
                     category === 'device' ? mockups.device : mockups.office;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? mockupArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === mockupArray.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="w-full relative">
      <div className={`relative overflow-hidden rounded-xl border border-gray-800 shadow-xl transition-all duration-300 bg-gray-900/50 ${isZoomed ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/90' : 'h-[300px] md:h-[400px]'}`}>
        <motion.img
          key={currentIndex}
          src={mockupArray[currentIndex].src}
          alt={mockupArray[currentIndex].alt}
          className={`w-full h-full object-contain ${isZoomed ? 'max-h-[90vh] max-w-[90vw]' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {!isZoomed && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
            <h4 className="text-white font-medium text-center">{mockupArray[currentIndex].title}</h4>
          </div>
        )}
        
        <button 
          onClick={toggleZoom}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label={isZoomed ? "Exit fullscreen" : "View fullscreen"}
        >
          <ZoomIn size={20} />
        </button>
      </div>
      
      {!isZoomed && mockupArray.length > 1 && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-2">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
      
      {isZoomed && (
        <button
          onClick={toggleZoom}
          className="fixed top-4 right-4 p-3 bg-gray-800 rounded-full text-white z-50"
          aria-label="Close fullscreen"
        >
          ✕
        </button>
      )}
      
      {!isZoomed && mockupArray.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {mockupArray.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MockupGallery;