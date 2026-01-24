# Suman Vernekar - Professional Portfolio

A modern, animated portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Responsive Design**: Works perfectly on all devices
- **Animated Elements**: Smooth animations using Framer Motion
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Interactive Components**: Hover effects and smooth transitions
- **API Integration**: RESTful API serving portfolio data
- **Mobile Optimized**: Fully responsive for all screen sizes

## Sections Included

1. **Header** - Name, title, and social links with animated profile circle
2. **Education** - Timeline view of academic qualifications
3. **Experience** - Professional achievements and roles
4. **Projects** - Personal projects with technology tags
5. **Skills** - Technical skills organized by category
6. **Contact** - Professional contact information with social links

## Technologies Used

### Frontend
- React.js
- Framer Motion (Animations)
- React Icons
- CSS3 (Custom styling with gradients)

### Backend
- Node.js
- Express.js
- RESTful API

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Navigate to client directory and install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   node server.js
   ```
   Server runs on http://localhost:5000

2. In a new terminal, start the frontend:
   ```bash
   cd client
   npm start
   ```
   Frontend runs on http://localhost:3000

3. Open your browser and visit http://localhost:3000

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       │   ├── Header.js
│       │   ├── Education.js
│       │   ├── Experience.js
│       │   ├── Projects.js
│       │   ├── Skills.js
│       │   └── Contact.js
│       ├── App.js
│       ├── App.css
│       └── index.js
├── server.js              # Express backend
└── package.json           # Backend dependencies
```

## Customization

To customize the portfolio content:
1. Modify the profile data in `server.js`
2. Update styling in `client/src/App.css`
3. Add new components in `client/src/components/`

## Deployment

### Frontend Build
```bash
cd client
npm run build
```

### Backend Deployment
The backend can be deployed to platforms like:
- Heroku
- AWS EC2
- DigitalOcean
- Render

Make sure to set environment variables for production.

## Author

**Suman Vernekar**
- Email: sumanvernekar71@gmail.com
- Phone: +91-7625086715
- GitHub: https://github.com/suman-vernekar
- LinkedIn: https://in.linkedin.com/in/suman-vernekar

## License

This project is open source and available under the MIT License.