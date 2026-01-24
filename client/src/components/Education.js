import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-navy-dark py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <FaGraduationCap className="text-5xl text-accent-blue mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-text-main mb-4">Education</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-blue"></div>
        
        {data.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative mb-12 pl-20"
          >
            {/* Timeline marker */}
            <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-accent-blue border-4 border-card-bg shadow-lg"></div>
            
            <motion.div 
              className="bg-card-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-color cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <h3 className="text-xl font-bold text-text-main mb-2">{edu.degree}</h3>
              <h4 className="text-lg text-accent-blue font-medium mb-2">{edu.institution}</h4>
              <p className="text-text-muted font-medium mb-1">{edu.year}</p>
              {edu.percentage && (
                <p className="text-text-main font-semibold">Percentage: {edu.percentage}</p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;