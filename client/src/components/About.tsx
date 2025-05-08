import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

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
    "Microsoft Certified",
    "Cloud Computing",
    "Artificial Intelligence",
    "Information Security"
  ];

  return (
    <section id="about" className="py-16 bg-white">
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
            {/* A professional headshot placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <User className="h-32 w-32 text-gray-400" />
            </div>
          </motion.div>
          
          <div className="md:w-1/2">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={2}
            >
              I am a seasoned professional specializing in AI solutions, cloud computing, and information security. With a strong background in Microsoft technologies and a passion for innovative solutions, I help organizations leverage cutting-edge technologies to solve complex problems.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
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
                  className="bg-primary-50 text-primary-700 hover:bg-primary-100 px-4 py-2 text-sm font-medium"
                >
                  {skill}
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
