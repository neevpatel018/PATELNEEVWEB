import { motion } from "framer-motion";
import { skillCategories, proficiencySkills } from "../data/skillsData";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, Brain, Cloud, Shield, Github, Server, Code, Database } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "brain":
      return <Brain className="text-blue-500 h-5 w-5 mr-3" />;
    case "cloud":
      return <Cloud className="text-blue-500 h-5 w-5 mr-3" />;
    case "shield":
      return <Shield className="text-blue-500 h-5 w-5 mr-3" />;
    default:
      return null;
  }
};

const getSkillIcon = (skillName: string) => {
  const iconClass = "w-8 h-8 text-blue-500";
  
  const nameToIcon: Record<string, JSX.Element> = {
    "Python Basics": <Code className={iconClass} />,
    "SQL": <Database className={iconClass} />,
    "Canva Design": <Code className={iconClass} />,
    "AI & ChatGPT Usage": <Brain className={iconClass} />,
    "Git & GitHub": <Github className={iconClass} />
  };
  
  return nameToIcon[skillName] || null;
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
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My diverse capabilities span AI tools, design, social media, and technical fundamentals for modern digital creation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={categoryIndex}
            >
              <div className="flex items-center mb-4">
                {/* Rendering the emoji as part of the title since it's already included in the title */}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <Check className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
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
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">🔧 Technical Proficiency</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {getSkillIcon(skill.name)}
                      <span className="text-sm font-medium ml-2 text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-300">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
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
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">💼 Professional Skills</h3>
            
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-300">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-indigo-500 h-2.5 rounded-full"
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
