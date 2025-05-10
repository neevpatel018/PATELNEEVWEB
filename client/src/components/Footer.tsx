import { Link } from "wouter";
import { Github, Linkedin, Twitter, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
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
    <footer className="bg-black text-white py-10 border-t border-gray-800 relative overflow-hidden">
      {/* Animated wave effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Glowing corner accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full filter blur-[60px] z-0"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating tech-inspired shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 z-0"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1]
        }}
        style={{
          originX: 0,
          originY: 0,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Animated dot grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, rgba(59, 130, 246, 0.4) 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Neev Patel</h2>
            <p className="text-gray-400 mt-1">AI & Cloud Professional</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              About
            </a>
            <a 
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("certifications");
              }}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              Certifications
            </a>
            <a 
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              Services
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Neev Patel. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <BookOpen className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
