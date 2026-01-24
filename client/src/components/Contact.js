import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = ({ data }) => {
  const contactItems = [
    { icon: <FaEnvelope />, label: "Email", value: "sumanvernekarvernekar@gmail.com", link: "mailto:sumanvernekarvernekar@gmail.com" },
    { icon: <FaGithub />, label: "GitHub", value: "suman-vernekar", link: data.github },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "suman-vernekar", link: data.linkedin }
  ];

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
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-navy-dark text-text-main py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">Feel free to reach out for collaborations or opportunities</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
      >
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            href={item.link}
            target={item.label === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="bg-card-bg rounded-2xl p-6 flex items-center gap-4 hover:bg-accent-blue transition-all duration-300 hover:-translate-y-1 border border-border-color cursor-pointer"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-3xl text-text-main">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-text-muted text-sm">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center pt-8 border-t border-border-color"
      >
        <p className="text-text-muted">Made with ❤️ using MERN Stack</p>
      </motion.div>
    </section>
  );
};

export default Contact;