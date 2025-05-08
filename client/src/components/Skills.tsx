import { motion } from "framer-motion";
import { skillCategories, proficiencySkills } from "../data/skillsData";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, Brain, Cloud, Shield } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "brain":
      return <Brain className="text-secondary-500 h-5 w-5 mr-3" />;
    case "cloud":
      return <Cloud className="text-secondary-500 h-5 w-5 mr-3" />;
    case "shield":
      return <Shield className="text-secondary-500 h-5 w-5 mr-3" />;
    default:
      return null;
  }
};

const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: (percent: number) => ({ 
      width: `${percent}%`,
      transition: { duration: 1, delay: 0.2, ease: "easeOut" }
    })
  };

  const technicalSkills = proficiencySkills.filter(skill => skill.category === "technical");
  const professionalSkills = proficiencySkills.filter(skill => skill.category === "professional");

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Professional Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My diverse skill set enables me to deliver comprehensive solutions across multiple technology domains.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              className="bg-gray-50 rounded-xl p-6 shadow-sm h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={categoryIndex}
            >
              <div className="flex items-center mb-4">
                {getIcon(category.icon)}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-secondary-500 h-2 rounded-full"
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={skill.percentage}
                      variants={progressVariants}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
            
            <div className="space-y-4">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-primary-500 h-2 rounded-full"
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={skill.percentage}
                      variants={progressVariants}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
