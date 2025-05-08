import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data/certificationsData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import certificate images
import amplifyThinking from "@assets/Amplify Your Critical Thinking with Generative AI.png";
import aiPoweredManager from "@assets/Become an AI-Powered People Manager.png";
import collaborativeTeam from "@assets/Building a Collaborative Team Culture with AI.png";
import enhanceCoaching from "@assets/Enhance Your Coaching Impact with Generative AI.png";
import managersGuide from "@assets/The Manager's Guide to Career Conversations in the Age of AI.png";
import microsoftSkillsFest from "@assets/Microsoft AI Skills Fest.png";
import sensitiveInfo from "@assets/Create-and-manage-sensitive-information-type.png";
import cloudComputing from "@assets/Describe-cloud-computing.png";
import publicSector from "@assets/Enhance-public-sector-services-with-generative-AI.png";
import infoSecurity from "@assets/Introduction-to-information-security-and-compliance.png";
import azurePlan from "@assets/Plan-and-prepare-to-develop-AI-solutions-on-Azure.png";

// Map paths to imported images
const imageMap: Record<string, string> = {
  "attached_assets/Amplify Your Critical Thinking with Generative AI.png": amplifyThinking,
  "attached_assets/Become an AI-Powered People Manager.png": aiPoweredManager,
  "attached_assets/Building a Collaborative Team Culture with AI.png": collaborativeTeam,
  "attached_assets/Enhance Your Coaching Impact with Generative AI.png": enhanceCoaching,
  "attached_assets/The Manager's Guide to Career Conversations in the Age of AI.png": managersGuide,
  "attached_assets/Microsoft AI Skills Fest.png": microsoftSkillsFest,
  "attached_assets/Create-and-manage-sensitive-information-type.png": sensitiveInfo,
  "attached_assets/Describe-cloud-computing.png": cloudComputing,
  "attached_assets/Enhance-public-sector-services-with-generative-AI.png": publicSector,
  "attached_assets/Introduction-to-information-security-and-compliance.png": infoSecurity,
  "attached_assets/Plan-and-prepare-to-develop-AI-solutions-on-Azure.png": azurePlan
};

type FilterType = "all" | "microsoft" | "linkedin";

const Certifications = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredCertifications = certifications.filter(cert => {
    if (filter === "all") return true;
    return cert.provider === filter;
  });

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  return (
    <section id="certifications" className="py-16 bg-black text-white relative overflow-hidden">
      {/* More vibrant background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.1),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(147,51,234,0.1),_transparent_50%)]"></div>
      
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[120px] z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full filter blur-[80px] z-0"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 right-0 bottom-0" 
            style={{
              backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}>
        </div>
      </div>
      
      {/* Animated diagonal line */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
        animate={{
          y: [0, 2000],
          opacity: [0.3, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transform: 'rotate(-45deg) translateX(-50%)', width: '200%' }}
      />
      
      {/* Animated horizontal scanning line */}
      <motion.div 
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        style={{ opacity: 0.3 }}
        animate={{
          top: ['-5%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Animated vertical scanning line */}
      <motion.div 
        className="absolute top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"
        style={{ opacity: 0.3 }}
        animate={{
          left: ['-5%', '100%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Larger floating elements */}
      <motion.div 
        className="absolute top-10 right-[10%] w-32 h-32 border-2 border-blue-500/30 rounded-lg"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-[15%] w-28 h-28 border-2 border-purple-500/30 rounded-full"
        animate={{ 
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Digital particle effect - more visible */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-blue-500"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() > 0.5 ? -50 : 50, 0],
            x: [0, Math.random() > 0.5 ? -50 : 50, 0],
            opacity: [0, 0.8, 0],
            scale: [0, Math.random() * 3, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Professional Certifications</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuously enhancing my skills through professional development and certification programs from industry leaders.
          </p>
        </motion.div>

        {/* Certification filters */}
        <motion.div 
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex rounded-md shadow-md" role="group">
            <button 
              type="button" 
              className={`px-5 py-2 text-sm font-medium border border-gray-700 rounded-l-lg hover:bg-gray-800 focus:z-10 focus:ring-2 focus:ring-blue-500 ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-300'}`}
              onClick={() => handleFilterChange('all')}
            >
              All
            </button>
            <button 
              type="button" 
              className={`px-5 py-2 text-sm font-medium border-t border-b border-gray-700 hover:bg-gray-800 focus:z-10 focus:ring-2 focus:ring-blue-500 ${filter === 'microsoft' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-300'}`}
              onClick={() => handleFilterChange('microsoft')}
            >
              Microsoft
            </button>
            <button 
              type="button" 
              className={`px-5 py-2 text-sm font-medium border border-gray-700 rounded-r-lg hover:bg-gray-800 focus:z-10 focus:ring-2 focus:ring-blue-500 ${filter === 'linkedin' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-300'}`}
              onClick={() => handleFilterChange('linkedin')}
            >
              LinkedIn Learning
            </button>
          </div>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-transparent border border-gray-800 relative group">
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                    <div className={`w-16 h-16 origin-bottom-left rotate-45 transform translate-y-[-8px] translate-x-[8px] ${cert.provider === 'microsoft' ? 'bg-blue-600' : 'bg-indigo-500'}`}></div>
                  </div>
                  
                  <CardContent className="p-0">
                    <div className="w-full h-full relative">
                      <img 
                        src={imageMap[cert.imagePath] || cert.imagePath} 
                        alt={cert.title}
                        className="w-full h-auto object-contain"
                      />
                      
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Reveal details on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-xs text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="font-medium mb-1">{cert.title}</div>
                        <div className="text-gray-300 text-opacity-70">{cert.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
