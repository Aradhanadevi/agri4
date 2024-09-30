import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSeedling } from 'react-icons/fa';
import Particles from "react-tsparticles"; // Import particles
import '../Css/Pages/Login.css';

const tips = [
  "Organic farming helps maintain healthy soil by increasing the organic matter in the ground.",
  "Composting is a great way to reduce waste and create nutrient-rich fertilizer for your garden.",
  "Planting cover crops can help suppress weeds, improve soil fertility, and prevent erosion."
];

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prevTip) => (prevTip + 1) % tips.length);
    }, 5000); // Change tip every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      localStorage.setItem('name', credentials.email.split('@')[0]);
      navigate('/agriportal');
    } else {
      setError('Please fill in both fields.');
    }
  };

  return (
    <motion.section className="login-section">
      <Particles
        params={{
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { direction: "none", random: false, speed: 0.5, straight: false },
            links: {
              enable: true,
              distance: 150,
              color: { value: "#2c6e49" }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            }
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <motion.div className="login-container">
        <motion.div className="login-content">
          <motion.div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <h2 className="login-title">
                <FaSeedling /> Welcome Back to AgriWorld
              </h2>
              <div className="decorative-divider"></div>
              <motion.div className="agriculture-tip" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3> Did You Know?</h3>
                <p>{tips[currentTip]}</p>
              </motion.div>

              <motion.div className="login-form-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ y: 20, duration: 1 }}>
                <motion.div className="form-outline">
                  <input
                    type="email"
                    className="form-control"
                    placeholder=" "
                    name="email"
                    value={credentials.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-label">Email address</label>
                </motion.div>

                <motion.div className="form-outline">
                  <input
                    type="password"
                    className="form-control"
                    placeholder=" "
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-label">Password</label>
                </motion.div>

                <motion.button type="submit" className="btn login-btn" whileHover={{ scale: 1.05, backgroundColor: '#2c6e49' }} whileTap={{ scale: 0.95 }}>
                  Login
                </motion.button>
                {error && <div className="alert">{error}</div>}
                <div className="signup-link">
                  Don't have an account? <a href={'/signup'}>Sign Up</a>
                </div>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="floating-leaves" animate={{ rotate: 360 }} transition={{ duration: 30, loop: Infinity, ease: 'linear' }} />
    </motion.section>
  );
};

export default Login;
