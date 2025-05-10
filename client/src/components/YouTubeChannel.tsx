import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Play } from 'lucide-react';

// Import the YouTube assets
import YouTubeLogoPath from '@assets/NEXAGEN.png';
import IPLThumbnail1 from '@assets/IPL 1.png';
import IPLThumbnail2 from '@assets/IPL 2.png';
import RCBThumbnail from '@assets/RCB.jpeg';

const YouTubeChannel: React.FC = () => {
  // Animation variants
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
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const videoItems = [
    {
      id: 'vid1',
      thumbnail: IPLThumbnail1,
      title: 'Designing Next-Gen Web Experiences',
      views: '12K views',
      date: '2 weeks ago',
      duration: '10:22',
      url: 'https://www.youtube.com/@NEXAGENDESIGNS'
    },
    {
      id: 'vid2',
      thumbnail: IPLThumbnail2,
      title: 'Digital Design Trends 2025',
      views: '8.5K views',
      date: '3 weeks ago',
      duration: '15:48',
      url: 'https://www.youtube.com/@NEXAGENDESIGNS'
    },
    {
      id: 'vid3',
      thumbnail: RCBThumbnail,
      title: 'Creating Modern UI/UX Interfaces',
      views: '21K views',
      date: '1 week ago',
      duration: '12:35',
      url: 'https://www.youtube.com/@NEXAGENDESIGNS'
    }
  ];

  return (
    <section id="youtube" className="py-16 md:py-24 relative bg-gray-900 overflow-hidden">
      {/* Animated background effects */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[100px] z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">NEXAGEN DESIGNS</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Check out our latest design and development tutorials. Subscribe for cutting-edge UI/UX insights, creative digital solutions, and tech innovations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Channel Info - Left Side */}
          <motion.div 
            className="lg:col-span-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="h-full bg-gray-900/70 border border-gray-800 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-full mb-6 overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={YouTubeLogoPath} 
                      alt="Neev Patel YouTube Channel" 
                      className="w-full h-auto object-cover" 
                    />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">NEXAGEN DESIGNS</h3>
                  <p className="text-gray-400 mb-4 text-center">Creative design & development solutions for the next generation</p>
                  
                  <div className="flex flex-col space-y-4 w-full">
                    <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                      <span className="text-gray-300">Subscribers</span>
                      <span className="font-semibold text-white">144</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                      <span className="text-gray-300">Videos</span>
                      <span className="font-semibold text-white">18</span>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                      <span className="text-gray-300">Total Views</span>
                      <span className="font-semibold text-white">4.2K</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-6 w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open('https://www.youtube.com/@NEXAGENDESIGNS', '_blank')}
                    >
                      <span className="mr-2">Subscribe</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Videos - Right Side */}
          <motion.div 
            className="lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {videoItems.map((video) => (
                <motion.div 
                  key={video.id}
                  variants={fadeInUpVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <Card className="h-full bg-gray-900/70 border border-gray-800 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <motion.div 
                            className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => window.open(video.url, '_blank')}
                          >
                            <Play className="h-6 w-6 text-white" />
                          </motion.div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium py-1 px-2 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 
                          className="text-lg font-semibold text-white mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors cursor-pointer"
                          onClick={() => window.open(video.url, '_blank')}
                        >
                          {video.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>{video.views}</span>
                          <span className="mx-2">•</span>
                          <span>{video.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              {/* View All Videos Button */}
              <motion.div 
                className="md:col-span-2 lg:col-span-1 xl:col-span-2 flex justify-center mt-4"
                variants={fadeInUpVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 8px rgba(59, 130, 246, 0.5)", "0 0 0 rgba(59, 130, 246, 0)"] 
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Button 
                    variant="outline" 
                    className="border-2 border-blue-500/30 text-blue-400 hover:bg-blue-900/20 hover:border-blue-400"
                    onClick={() => window.open('https://www.youtube.com/@NEXAGENDESIGNS', '_blank')}
                  >
                    <span className="mr-2">View All Videos</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeChannel;