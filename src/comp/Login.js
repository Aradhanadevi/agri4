import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from './Bgimg/loginsideimage.png'; // Background image
import '../comp/Css/Login.css'; // Import the CSS file

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful login for demonstration
    if (credentials.email && credentials.password) {
      // Store name in localStorage for demo purposes
      localStorage.setItem('name', credentials.email.split('@')[0]); // Extract name from email
      navigate('/agriportal'); // Redirect to home
    } else {
      setError('Please fill in both fields.');
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={login} className="img-fluid" alt="Sample" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder=" "
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-label">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder=" "
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-label">Password</label>
              </div>

              <div>
                <div>Don't have an account? <a href={'/signup'}> Sign Up</a></div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-info btn-lg btn-block w-100">Login</button>
              </div>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
