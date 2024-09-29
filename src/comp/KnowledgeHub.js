import React, { useState } from 'react';
import '../comp/Css/KnowledgeHub.css'; // Ensure the CSS file exists

const knowledgeData = [
  {
    title: 'Soil Management for Beginners',
    type: 'Video Tutorial',
    description: 'A step-by-step guide for managing soil health.',
    link: '/SoilManagement.js',
    category: 'Video Tutorials',
    videoUrl: 'https://www.youtube.com/embed/8uZOI1152ug',
  },
  {
    title: 'Organic Farming Explained',
    type: 'Video Tutorial',
    description: 'An in-depth video on organic farming principles.',
    link: '/OrganicFarming.js',
    category: 'Video Tutorials',
    videoUrl: 'https://www.youtube.com/embed/6E9K46Up3co',
  },
  {
    title: 'Water Conservation in Agriculture',
    type: 'Video Tutorial',
    description: 'A tutorial on effective water conservation techniques for agriculture.',
    link: '/WaterConservation.js',
    category: 'Video Tutorials',
    videoUrl: 'https://www.youtube.com/embed/1H7cABbXJ74',
  },
  {
    title: 'Modern Farming Technologies',
    type: 'Article',
    description: 'Explore the latest technologies in modern farming, including precision agriculture, smart irrigation systems, and automated machinery. Learn how these advancements can optimize yield and reduce resource waste while ensuring sustainable practices are integrated into farming operations.',
    link: '/ModernFarmingTechnologies.js',
    category: 'Sustainable Practices',
    externalLinks: [
      'https://www.jstor.org/stable/24996835',
      'https://www.tandfonline.com/doi/abs/10.1080/07352689.2011.553515',
      'https://www.mdpi.com/2077-0472/10/8/362',
    ],
  },
  {
    title: 'Sustainable Practices',
    type: 'Article',
    description: 'Guidelines for sustainable farming practices that promote environmental health, improve soil quality, and ensure economic viability. This article covers crop rotation, organic farming methods, and conservation tillage, providing practical tips for farmers to implement sustainable techniques on their farms.',
    link: '/SustainablePractices.js',
    category: 'Sustainable Practices',
    externalLinks: [
      'https://www.mdpi.com/2073-4395/13/7/1709',
      'https://www.indianjournals.com/ijor.aspx?target=ijor:ar&volume=44&issue=3&article=001',
      'https://orgprints.org/id/eprint/37018/1/willer-lernoud-2019-world-of-organic-low.pdf#page=174',
    ],
  },
  {
    title: 'Innovations in Agriculture',
    type: 'Article',
    description: 'Research and findings on innovations in agriculture, including genetic modification, vertical farming, and the use of drones for crop monitoring. This article examines how these innovations are transforming the agricultural landscape, enhancing productivity, and addressing challenges such as climate change and food security.',
    link: '/InnovationsInAgriculture.js',
    category: 'Research Papers',
    externalLinks: [
      'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=latest++agriculture&btnG=',
    ],
  },
];

const KnowledgeHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredContent = knowledgeData.filter((item) => {
    const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || item.category === category;

    return matchesSearchTerm && matchesCategory;
  });

  // Filter out video tutorials separately
  const videoTutorials = filteredContent.filter(item => item.category === 'Video Tutorials');
  const otherContent = filteredContent.filter(item => item.category !== 'Video Tutorials');

  return (
    <div className='knowmain'>
    <div className="knowledge-hub-container">
      <h1>Knowledge Hub</h1>

      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All Categories</option>
          <option value="Video Tutorials">Video Tutorials</option>
          <option value="Sustainable Practices">Sustainable Practices</option>
          <option value="Research Papers">Research Papers</option>
        </select>
      </div>

      {/* Video Tutorials Row */}
      <div className="video-list">
        {videoTutorials.length > 0 ? (
          videoTutorials.map((item, index) => (
            <div key={index} className="video-item">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="video-wrapper">
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Learn More (Watch Video)</a>
            </div>
          ))
        ) : (
          <p>No video tutorials found.</p>
        )}
      </div>

      {/* Other Content Section */}
      <div className="content-list">
        {otherContent.length > 0 ? (
          otherContent.map((item, index) => (
            <div key={index} className={`content-item ${item.category === 'Research Papers' || item.category === 'Sustainable Practices' ? 'full-width-card' : ''}`}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Learn More</a>
              {item.externalLinks && item.externalLinks.length > 0 && (
                <div className="external-links">
                  <h3>Related Links:</h3>
                  <ul>
                    {item.externalLinks.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
      </div>
      </div>
  );
};

export default KnowledgeHub;
