import { useState } from "react";
import { motion } from "framer-motion";
import services from "../data/servicesData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Monitor, ArrowRight, ExternalLink } from "lucide-react";
import MockupGallery from "./MockupGallery";
import ThumbnailGallery from "./ThumbnailGallery";
import UIDesignGallery from "./UIDesignGallery";
import GymLandingGallery from "./GymLandingGallery";
import LawyerLandingGallery from "./LawyerLandingGallery";
import DoctorLandingGallery from "./DoctorLandingGallery";
import RealEstateLandingGallery from "./RealEstateLandingGallery";

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
  const [isMockupGalleryOpen, setIsMockupGalleryOpen] = useState(false);
  const [isThumbnailGalleryOpen, setIsThumbnailGalleryOpen] = useState(false);
  const [isUIDesignGalleryOpen, setIsUIDesignGalleryOpen] = useState(false);
  const [isGymLandingGalleryOpen, setIsGymLandingGalleryOpen] = useState(false);
  const [isLawyerLandingGalleryOpen, setIsLawyerLandingGalleryOpen] = useState(false);
  const [isDoctorLandingGalleryOpen, setIsDoctorLandingGalleryOpen] = useState(false);
  const [isRealEstateLandingGalleryOpen, setIsRealEstateLandingGalleryOpen] = useState(false);

  const handleOpenMockupGallery = () => {
    setIsMockupGalleryOpen(true);
  };

  const handleCloseMockupGallery = () => {
    setIsMockupGalleryOpen(false);
  };
  
  const handleOpenThumbnailGallery = () => {
    setIsThumbnailGalleryOpen(true);
  };

  const handleCloseThumbnailGallery = () => {
    setIsThumbnailGalleryOpen(false);
  };
  
  const handleOpenUIDesignGallery = () => {
    setIsUIDesignGalleryOpen(true);
  };

  const handleCloseUIDesignGallery = () => {
    setIsUIDesignGalleryOpen(false);
  };
  
  const handleOpenGymLandingGallery = () => {
    setIsGymLandingGalleryOpen(true);
  };

  const handleCloseGymLandingGallery = () => {
    setIsGymLandingGalleryOpen(false);
  };
  
  const handleOpenLawyerLandingGallery = () => {
    setIsLawyerLandingGalleryOpen(true);
  };

  const handleCloseLawyerLandingGallery = () => {
    setIsLawyerLandingGalleryOpen(false);
  };
  
  const handleOpenDoctorLandingGallery = () => {
    setIsDoctorLandingGalleryOpen(true);
  };

  const handleCloseDoctorLandingGallery = () => {
    setIsDoctorLandingGalleryOpen(false);
  };
  
  const handleOpenRealEstateLandingGallery = () => {
    setIsRealEstateLandingGalleryOpen(true);
  };

  const handleCloseRealEstateLandingGallery = () => {
    setIsRealEstateLandingGalleryOpen(false);
  };

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
      {/* Display the mockup gallery when active */}
      {isMockupGalleryOpen && (
        <MockupGallery 
          isOpen={isMockupGalleryOpen} 
          onClose={handleCloseMockupGallery} 
          type="entrance" 
        />
      )}
      
      {/* Display the thumbnail gallery when active */}
      {isThumbnailGalleryOpen && (
        <ThumbnailGallery 
          isOpen={isThumbnailGalleryOpen} 
          onClose={handleCloseThumbnailGallery} 
        />
      )}
      
      {/* Display the UI design gallery when active */}
      {isUIDesignGalleryOpen && (
        <UIDesignGallery 
          isOpen={isUIDesignGalleryOpen} 
          onClose={handleCloseUIDesignGallery} 
        />
      )}
      
      {/* Display the gym landing gallery when active */}
      {isGymLandingGalleryOpen && (
        <GymLandingGallery 
          isOpen={isGymLandingGalleryOpen} 
          onClose={handleCloseGymLandingGallery} 
        />
      )}
      
      {/* Display the lawyer landing gallery when active */}
      {isLawyerLandingGalleryOpen && (
        <LawyerLandingGallery 
          isOpen={isLawyerLandingGalleryOpen} 
          onClose={handleCloseLawyerLandingGallery} 
        />
      )}
      
      {/* Display the doctor landing gallery when active */}
      {isDoctorLandingGalleryOpen && (
        <DoctorLandingGallery 
          isOpen={isDoctorLandingGalleryOpen} 
          onClose={handleCloseDoctorLandingGallery} 
        />
      )}
      
      {/* Display the real estate landing gallery when active */}
      {isRealEstateLandingGalleryOpen && (
        <RealEstateLandingGallery 
          isOpen={isRealEstateLandingGalleryOpen} 
          onClose={handleCloseRealEstateLandingGallery} 
        />
      )}
      
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
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Professional Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Creative design services that combine aesthetic excellence with functional perfection.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="flex flex-col w-full lg:w-1/2">
              <Card className="transition-all duration-300 transform hover:shadow-xl bg-gray-900/70 border border-gray-800 backdrop-blur-sm overflow-hidden h-full">
                <CardContent className="p-5 lg:p-6 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-900/30 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 border border-blue-500/20">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-blue-100">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {service.subServices.map((subService) => (
                      <motion.div 
                        key={subService.id}
                        variants={subItemVariants}
                        className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-800 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <h4 className="text-xl sm:text-2xl font-semibold text-blue-300">{subService.title}</h4>
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                        </div>
                        <p className="text-gray-400 text-base sm:text-lg mb-3">
                          {subService.description}
                        </p>
                        
                        {/* Display landing page subcategories if they exist */}
                        {subService.id === "landing-pages" && subService.subCategories && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4 mb-5 sm:mb-6">
                            {subService.subCategories.map((subCategory) => (
                              <div 
                                key={subCategory.id}
                                className="p-3 sm:p-4 bg-gray-800/30 border border-gray-700 rounded-md hover:border-blue-600/50 transition-colors"
                              >
                                <h5 className="text-base sm:text-lg font-medium text-blue-200 mb-1 sm:mb-2">{subCategory.title}</h5>
                                <p className="text-gray-400 text-xs sm:text-sm">{subCategory.description}</p>
                                
                                {/* Add View button specifically for the gym landing page subcategory */}
                                {subCategory.id === "gym-landing" && (
                                  <div className="flex justify-end mt-3">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="group bg-purple-900/20 border-purple-500/30 hover:bg-purple-900/40 hover:border-purple-400 text-purple-300"
                                      onClick={handleOpenGymLandingGallery}
                                    >
                                      <span className="mr-1 text-xs">View Examples</span>
                                      <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Button>
                                  </div>
                                )}
                                
                                {/* Add View button specifically for the lawyer landing page subcategory */}
                                {subCategory.id === "lawyer-landing" && (
                                  <div className="flex justify-end mt-3">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="group bg-amber-900/20 border-amber-500/30 hover:bg-amber-900/40 hover:border-amber-400 text-amber-300"
                                      onClick={handleOpenLawyerLandingGallery}
                                    >
                                      <span className="mr-1 text-xs">View Examples</span>
                                      <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Button>
                                  </div>
                                )}
                                
                                {/* Add View button specifically for the doctor landing page subcategory */}
                                {subCategory.id === "doctor-landing" && (
                                  <div className="flex justify-end mt-3">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="group bg-cyan-900/20 border-cyan-500/30 hover:bg-cyan-900/40 hover:border-cyan-400 text-cyan-300"
                                      onClick={handleOpenDoctorLandingGallery}
                                    >
                                      <span className="mr-1 text-xs">View Examples</span>
                                      <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Button>
                                  </div>
                                )}
                                
                                {/* Add View button specifically for the real estate landing page subcategory */}
                                {subCategory.id === "realestate-landing" && (
                                  <div className="flex justify-end mt-3">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="group bg-pink-900/20 border-pink-500/30 hover:bg-pink-900/40 hover:border-pink-400 text-pink-300"
                                      onClick={handleOpenRealEstateLandingGallery}
                                    >
                                      <span className="mr-1 text-xs">View Examples</span>
                                      <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex justify-end mt-2">
                          {subService.id === "mockups" && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="group bg-blue-900/20 border-blue-500/30 hover:bg-blue-900/40 hover:border-blue-400 text-blue-300"
                              onClick={handleOpenMockupGallery}
                            >
                              <span className="mr-2">View</span>
                              <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Button>
                          )}
                          {subService.id === "thumbnail-design" && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="group bg-blue-900/20 border-blue-500/30 hover:bg-blue-900/40 hover:border-blue-400 text-blue-300"
                              onClick={handleOpenThumbnailGallery}
                            >
                              <span className="mr-2">View</span>
                              <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Button>
                          )}
                          {subService.id === "custom-ui-design" && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="group bg-blue-900/20 border-blue-500/30 hover:bg-blue-900/40 hover:border-blue-400 text-blue-300"
                              onClick={handleOpenUIDesignGallery}
                            >
                              <span className="mr-2">View</span>
                              <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Button>
                          )}
                        </div>
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
