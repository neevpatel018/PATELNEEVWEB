import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { User, Cpu, Cloud, Shield, Code } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  const skills = [
    { name: "Microsoft Certified", icon: <Shield className="w-4 h-4 mr-2" /> },
    { name: "Cloud Computing", icon: <Cloud className="w-4 h-4 mr-2" /> },
    { name: "Artificial Intelligence", icon: <Cpu className="w-4 h-4 mr-2" /> },
    { name: "Information Security", icon: <Shield className="w-4 h-4 mr-2" /> }
  ];

  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
          >
            {/* Profile image */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <img 
                src="/images/profile-picture.png" 
                alt="Neev Patel" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
          
          <div className="md:w-1/2">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={2}
            >
              I am a seasoned professional specializing in AI solutions, cloud computing, and information security. With a strong background in Microsoft technologies and a passion for innovative solutions, I help organizations leverage cutting-edge technologies to solve complex problems.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={3}
            >
              My expertise spans across Microsoft Azure, generative AI implementation, coaching and mentoring, and information security compliance frameworks.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={4}
            >
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-gray-800 border border-gray-700 text-blue-400 hover:bg-gray-700 px-4 py-2 text-sm font-medium flex items-center"
                >
                  {skill.icon} {skill.name}
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
