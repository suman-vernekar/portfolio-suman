import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ data }) => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200
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
        <FaCode className="text-5xl text-accent-blue mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-text-main mb-4">Personal Projects</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {data.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-card-bg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border-color cursor-pointer"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-text-main">{project.name}</h3>
              <FaExternalLinkAlt className="text-accent-blue text-lg" />
            </div>
            <div className="mb-6">
              <p className="text-text-muted leading-relaxed">{project.description}</p>
            </div>
            <div>
              <h4 className="font-semibold text-text-main mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;