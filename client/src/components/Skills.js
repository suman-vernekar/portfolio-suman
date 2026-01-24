import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaLanguage, FaLightbulb } from 'react-icons/fa';

const Skills = ({ data, languages, interests }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillCategoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const renderSkillList = (skills) => (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-accent-blue text-text-main px-4 py-2 rounded-full text-sm font-medium shadow-md"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );

  return (
    <section className="bg-navy-dark py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <FaLaptopCode className="text-5xl text-accent-blue mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-text-main mb-4">Technical Skills & Interests</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <motion.div variants={skillCategoryVariants} className="bg-card-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-color cursor-pointer"
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <h3 className="text-xl font-bold text-text-main mb-4">Languages</h3>
          {renderSkillList(data.languages)}
        </motion.div>

        <motion.div variants={skillCategoryVariants} className="bg-card-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-color cursor-pointer"
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <h3 className="text-xl font-bold text-text-main mb-4">Developer Tools</h3>
          {renderSkillList(data.tools)}
        </motion.div>

        <motion.div variants={skillCategoryVariants} className="bg-card-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-color cursor-pointer"
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <h3 className="text-xl font-bold text-text-main mb-4">Frameworks</h3>
          {renderSkillList(data.frameworks)}
        </motion.div>

        <motion.div variants={skillCategoryVariants} className="bg-card-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-color cursor-pointer"
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <h3 className="text-xl font-bold text-text-main mb-4">Soft Skills</h3>
          {renderSkillList(data.softSkills)}
        </motion.div>

        <motion.div 
          variants={skillCategoryVariants} 
          className="bg-card-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-color border-l-4 border-accent-blue cursor-pointer"
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
            <FaLightbulb className="text-accent-blue" /> Areas of Interest
          </h3>
          {renderSkillList(interests)}
        </motion.div>

        <motion.div 
          variants={skillCategoryVariants} 
          className="bg-card-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-color border-l-4 border-accent-blue cursor-pointer"
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
            <FaLanguage className="text-accent-blue" /> Communication Languages
          </h3>
          {renderSkillList(languages)}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;