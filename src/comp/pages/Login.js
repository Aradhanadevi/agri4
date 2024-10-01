import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSeedling } from "react-icons/fa";
import "../Css/Pages/Login.css";

const tips = [
  "Organic farming helps maintain healthy soil by increasing the organic matter in the ground.",
  "Composting is a great way to reduce waste and create nutrient-rich fertilizer for your garden.",
  "Planting cover crops can help suppress weeds, improve soil fertility, and prevent erosion.",
];

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
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
      localStorage.setItem("name", credentials.email.split("@")[0]);
      navigate("/agriportal");
    } else {
      setError("Please fill in both fields.");
    }
  };

  return (
    <motion.section className="login-section">
      <div className="gradient-background" /> {/* Add the gradient background */}
      
      {/* Create fireflies directly */}
      <div className="fireflies">
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={index}
            className="firefly"
            animate={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 2 + 1, // Random duration between 1s and 3s
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="login-container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">
            <FaSeedling /> Welcome Back to AgriWorld
          </h2>
          <div className="decorative-divider"></div>
          <motion.div
            className="agriculture-tip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3>Did You Know?</h3>
            <p>{tips[currentTip]}</p>
          </motion.div>
          <div className="form-outline">
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
          </div>
          <div className="form-outline">
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
          </div>
          <motion.button
            type="submit"
            className="btn login-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#2c6e49" }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          {error && <div className="alert">{error}</div>}
          <div className="signup-link">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
};
