import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LiveCoding from "./LiveCoding";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black text-white py-20 md:py-28 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background glow effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[80px] z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[80px] z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[70px] z-0"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-lg transform scale-105"></div>
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-10 rounded-lg transform rotate-3"></div>
              <div className="relative w-full h-auto max-w-xl mx-auto rounded-lg shadow-2xl shadow-indigo-900/40 border border-gray-800 overflow-hidden">
                <LiveCoding />
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-br-lg blur-lg opacity-30"></div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-2 text-blue-400">HELLO, I AM</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  NEEV PATEL
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-200 font-light">
                  TECH ENTHUSIAST
                </p>
                <p className="text-lg mb-8 text-gray-300">
                  Specialized in Microsoft Azure, Information Security, and AI solutions for enterprise and public sector organizations.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md"
                  onClick={() => scrollToSection("certifications")}
                >
                  View Certifications
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
