import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bt from './Bgimg/signuppag.png';
import './Css/Signup.css';

export const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, confirmPassword } = user;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, phone, password })
        });

        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
        } else {
            window.alert("Registration successful!");
            navigate('/');
        }
    };

    return (
        <section className="signup-section">
            <div className="signup-container">
                <div className="signup-card">
                    <div className="signup-form">
                        <h2>Create Account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={user.name}
                                    onChange={handleInput}
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    value={user.email}
                                    onChange={handleInput}
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={user.phone}
                                    onChange={handleInput}
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    value={user.password}
                                    onChange={handleInput}
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    value={user.confirmPassword}
                                    onChange={handleInput}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-signup">Register</button>
                            <p>Already have an account? <a href="/">Login</a></p>
                        </form>
                    </div>
                    <div className="signup-image">
                        <img src={bt} alt="Signup Visual" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;