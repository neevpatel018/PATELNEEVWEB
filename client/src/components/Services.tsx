import { motion } from "framer-motion";
import { services } from "../data/servicesData";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, Shield, Cloud, Users, BarChart3, Bot } from "lucide-react";

const getServiceIcon = (iconName: string) => {
  const iconClass = "w-10 h-10 text-blue-500";
  
  switch (iconName) {
    case "robot":
      return <Bot className={iconClass} />;
    case "cloud":
      return <Cloud className={iconClass} />;
    case "shield":
      return <Shield className={iconClass} />;
    case "users":
      return <Users className={iconClass} />;
    case "workflow":
      return <BarChart3 className={iconClass} />;
    case "search":
      return <Search className={iconClass} />;
    default:
      return <Bot className={iconClass} />;
  }
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="services" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Professional Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Expert services designed to help organizations leverage cutting-edge technologies and best practices.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-gray-800 border border-gray-700">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="text-gray-300 space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
