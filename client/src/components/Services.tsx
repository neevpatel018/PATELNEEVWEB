import { motion } from "framer-motion";
import { services } from "../data/servicesData";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Search, Shield, Cloud, Users, BarChart3, Bot } from "lucide-react";

const getServiceIcon = (iconName: string, isTechnical: boolean) => {
  const iconClass = isTechnical 
    ? "w-6 h-6 text-secondary-500" 
    : "w-6 h-6 text-primary-500";
  
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
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Professional Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
            const isTechnical = service.category === "technical";
            
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full transition-transform hover:scale-[1.02] hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${isTechnical ? 'bg-secondary-50' : 'bg-primary-50'} rounded-full flex items-center justify-center mb-4`}>
                      {getServiceIcon(service.icon, isTechnical)}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
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
