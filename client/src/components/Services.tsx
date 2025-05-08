import { motion } from "framer-motion";
import services from "../data/servicesData";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Monitor, ArrowRight } from "lucide-react";

const getServiceIcon = (iconName: string) => {
  const iconClass = "w-12 h-12 text-blue-500";
  
  switch (iconName) {
    case "palette":
      return <Palette className={iconClass} />;
    case "monitor":
      return <Monitor className={iconClass} />;
    default:
      return <Palette className={iconClass} />;
  }
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const subItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, delay: 0.1 }
    }
  };

  return (
    <section id="services" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background glow effects similar to other sections */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[80px] z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[80px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Professional Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Creative design services that combine aesthetic excellence with functional perfection.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="flex flex-col">
              <Card className="transition-all duration-300 transform hover:shadow-xl bg-gray-900/70 border border-gray-800 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-blue-900/30 rounded-2xl flex items-center justify-center mr-6 border border-blue-500/20">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-blue-100">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-10">
                    {service.subServices.map((subService) => (
                      <motion.div 
                        key={subService.id}
                        variants={subItemVariants}
                        className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-800 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-2xl font-semibold text-blue-300">{subService.title}</h4>
                          <ArrowRight className="h-5 w-5 text-blue-500" />
                        </div>
                        <p className="text-gray-400 text-lg">
                          {subService.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
