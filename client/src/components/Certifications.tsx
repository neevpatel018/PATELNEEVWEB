import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data/certificationsData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

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
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              type="button" 
              className={`px-5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-primary-500 ${filter === 'all' ? 'text-primary-600 bg-primary-50' : 'text-gray-600'}`}
              onClick={() => handleFilterChange('all')}
            >
              All
            </button>
            <button 
              type="button" 
              className={`px-5 py-2 text-sm font-medium bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-primary-500 ${filter === 'microsoft' ? 'text-primary-600 bg-primary-50' : 'text-gray-600'}`}
              onClick={() => handleFilterChange('microsoft')}
            >
              Microsoft
            </button>
            <button 
              type="button" 
              className={`px-5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-primary-500 ${filter === 'linkedin' ? 'text-primary-600 bg-primary-50' : 'text-gray-600'}`}
              onClick={() => handleFilterChange('linkedin')}
            >
              LinkedIn Learning
            </button>
          </div>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02] hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <img src={cert.logoUrl} alt={`${cert.provider} Logo`} className="h-6" />
                      <Badge variant="secondary" className={`text-xs px-3 py-1 rounded-full ${
                        cert.provider === 'microsoft' 
                          ? 'bg-secondary-50 text-secondary-700' 
                          : 'bg-primary-50 text-primary-700'
                      }`}>
                        {cert.provider === 'microsoft' ? 'Microsoft' : 'LinkedIn Learning'}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{cert.date}</p>
                    
                    {cert.provider === 'microsoft' ? (
                      <div className="flex items-center text-gray-500 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>Successfully completed</span>
                      </div>
                    ) : (
                      cert.tags && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {cert.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      )
                    )}
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
