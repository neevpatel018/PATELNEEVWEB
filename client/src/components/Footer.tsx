import { Link } from "wouter";
import { Github, Linkedin, Twitter, BookOpen } from "lucide-react";

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
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Neev Patel</h2>
            <p className="text-gray-300 mt-1">AI & Cloud Professional</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("certifications");
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Certifications
            </a>
            <a 
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Neev Patel. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <BookOpen className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
