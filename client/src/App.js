import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StarField from './components/StarField';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfileData(data))
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  if (!profileData) {
    return (
      <div className="loading-container bg-navy-dark flex items-center justify-center min-h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-border-color border-t-accent-blue rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="App relative overflow-hidden">
      <StarField />
      <div className="relative z-10">
        <Header data={profileData} />
        <Education data={profileData.education} />
        <Experience data={profileData.experience} />
        <Projects data={profileData.projects} />
        <Skills data={profileData.skills} languages={profileData.languages} interests={profileData.interests} />
        <Contact data={profileData.contact} />
      </div>
    </div>
  );
}

export default App;
