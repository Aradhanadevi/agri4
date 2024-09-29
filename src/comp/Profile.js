import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import './Profile.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user information from local storage
    localStorage.removeItem('userInfo');
    localStorage.removeItem('name');
    // Redirect to the login page
    navigate('/');
  };

  const data = {
    labels: ['Income', 'Profit', 'Loss'],
    datasets: [
      {
        label: 'Amount in ₹',
        data: [120000, 80000, 40000],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income, Profit & Loss Summary',
      },
    },
  };

  return (
    <div className='mainprofile'>
    <div className='profile-container animate-container'>
      <h1 className='profile-header'>Farmer Profile</h1>
      <div className='profile-info animate-fade'>
        <p>Name: Ram Singh</p>
        <p>Email: ramsingh@example.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Work: Farmer</p>

        {/* Static farmer profile details */}
        <div className='farmer-info animate-slide'>
          <h2>Farmer Details</h2>
          <p>Income: ₹1,20,000 per year</p>
          <p>Schemes Used: PM-Kisan Yojana, Soil Health Card Scheme</p>
          <p>Land Size: 2.5 Acres</p>
          <p>Crop Grown: Wheat, Mustard</p>
          <p>Water Source: Borewell</p>
        </div>

        {/* Graph for Income, Profit, and Loss */}
        <div className='graph-container'>
          <Bar data={data} options={options} />
        </div>

        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
      </div>
      </div>
  );
};
