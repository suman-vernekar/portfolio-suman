const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// API Routes
app.get('/api/profile', (req, res) => {
  const profileData = {
    name: "SUMAN VERNEKAR",
    title: "B.E Computer Science Engineering",
    university: "Visvesvaraya Technological University",
    education: [
      {
        degree: "Bachelor of Engineering (CSE)",
        institution: "GOVT. Engineering College, Mosalehosahalli, Hassan",
        year: "2022 - Present",
        percentage: "90.00%"
      },
      {
        degree: "Higher Secondary Education (PCMB)",
        institution: "Arvind PU College, GG Palya Gate Kunigal TQ, Tumakuru",
        year: "2020 - 2022",
        percentage: "77.92%"
      },
      {
        degree: "Secondary Education (SSLC)",
        institution: "Amar Jyothi English Med High School, Siddarpur Road, Soraba, Shivamogga",
        year: "2019 - 2020"
      }
    ],
    experience: [
      {
        role: "Student Developer",
        achievements: [
          "Built a Medical Handwritten Transcription Summarizer using OCR techniques and Python to accurately extract and summarize handwritten medical notes.",
          "Developed a Weather Forecasting Web App using HTML, CSS, and JavaScript integrated with real-time API data.",
          "Participated in a 24-hour Buildathon Hackathon to design innovative solutions under time constraints.",
          "Participated in a Prompt War to develop innovative solutions under tight time constraints, collaborating effectively and applying creative problem-solving skills."
        ]
      }
    ],
    projects: [
      {
        name: "AI-Powered Localized Weather Forecasting System for Agriculture",
        description: "Designed a frontend-only weather app using APIs to show temperature, wind, and rainfall. Provided smart crop tips based on real-time weather data to help farmers make informed decisions. Aimed at improving productivity and reducing crop failure risks in rural areas.",
        technologies: ["HTML", "CSS", "JavaScript", "API Integration"]
      },
      {
        name: "Medical Handwritten Transcription Summarizer",
        description: "Developed an AI-powered tool using OCR techniques and Python to extract handwritten medical notes and automatically generate concise summaries, improving accessibility and efficiency for healthcare professionals. Implemented text-cleaning and natural language processing techniques to enhance summary accuracy and readability.",
        technologies: ["Python", "OCR", "NLP", "Text Processing"]
      },
      {
        name: "Interior Design and Garden Blog Website",
        description: "Developed a responsive and user-friendly website using HTML, CSS, JavaScript, and React.js to showcase interior design ideas and gardening tips. Integrated blog posting, image galleries, and interactive features to enhance user engagement.",
        technologies: ["HTML", "CSS", "JavaScript", "React.js"]
      }
    ],
    skills: {
      languages: ["C", "Python", "JavaScript", "HTML", "CSS", "React (Basic)"],
      tools: ["Git", "GitHub", "VS Code"],
      frameworks: ["React.js (Basics)", "Node.js (Beginner)"],
      softSkills: ["Communication", "Leadership", "Teamwork", "Problem-Solving", "Time-Management", "Creativity"]
    },
    interests: ["Cybersecurity", "Web Development"],
    languages: ["English", "Hindi", "Kannada", "Marathi"],
    contact: {
      email: "sumanvernekarvernekar@gmail.com",
      github: "https://github.com/suman-vernekar",
      linkedin: "https://in.linkedin.com/in/suman-vernekar"
    }
  };
  
  res.json(profileData);
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
