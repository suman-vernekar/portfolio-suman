import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = ({ data }) => {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-text-main bg-navy-dark"
    >
      <div className="absolute inset-0">
        {/* Animated background elements */}
        <motion.div 
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute inset-0 bg-gradient-to-br from-navy-dark via-card-bg to-navy-dark opacity-50"
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-blue rounded-full opacity-30"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 max-w-6xl px-4">
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 10 }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-accent-blue to-blue-400 flex items-center justify-center mx-auto mb-8 shadow-2xl relative overflow-hidden cursor-pointer"
          onMouseMove={(e) => {
            const el = e.currentTarget;
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            el.style.setProperty('--mouse-x', `${x}px`);
            el.style.setProperty('--mouse-y', `${y}px`);
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-20 transform -skew-y-12"
            style={{
              background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.4), transparent 80%)`
            }}
          ></div>
          <span className="text-5xl md:text-6xl font-bold text-text-main relative z-10">SV</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 text-text-main bg-gradient-to-r from-accent-blue to-blue-300 bg-clip-text text-transparent"
        >
          {data.name}
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-text-muted"
        >
          Computer Science Engineer
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          <motion.a href={data.contact.github} target="_blank" rel="noopener noreferrer" 
             className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-card-bg border border-border-color flex items-center justify-center text-2xl text-text-main transition-all duration-500 hover:bg-accent-blue hover:border-accent-blue hover:-translate-y-2 hover:scale-110 group relative overflow-hidden"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaGithub className="relative z-10" />
          </motion.a>
          <motion.a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" 
             className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-card-bg border border-border-color flex items-center justify-center text-2xl text-text-main transition-all duration-500 hover:bg-accent-blue hover:border-accent-blue hover:-translate-y-2 hover:scale-110 group relative overflow-hidden"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaLinkedin className="relative z-10" />
          </motion.a>
          <motion.a href={`mailto:sumanvernekarvernekar@gmail.com`} 
             className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-card-bg border border-border-color flex items-center justify-center text-2xl text-text-main transition-all duration-500 hover:bg-accent-blue hover:border-accent-blue hover:-translate-y-2 hover:scale-110 group relative overflow-hidden"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaEnvelope className="relative z-10" />
          </motion.a>

        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-text-muted text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-accent-blue rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;