import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data/certificationsData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="certifications" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
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
                <Card className="overflow-hidden h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-transparent border border-gray-800">
                  <CardContent className="p-0">
                    <div className="w-full h-full">
                      <img 
                        src={cert.imagePath} 
                        alt={cert.title}
                        className="w-full h-auto object-contain"
                      />
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
