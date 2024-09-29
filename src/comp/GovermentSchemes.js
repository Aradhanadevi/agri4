import React, { useEffect, useState } from 'react';
import './Css/Schemes.css';

export const GovermentSchemes = () => {
  const forward = (url) => {
    window.open(url, '_blank');
  };

  const [schemes, setSchemes] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/schemes.json')
      .then((response) => response.json())
      .then((data) => setSchemes(data))
      .catch((error) => console.error('Error fetching schemes:', error));
  }, []);

  const filteredSchemes = schemes.filter((scheme) => {
    if (filter !== 'All' && scheme.type !== filter) {
      return false;
    }
    if (searchTerm) {
      return scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (scheme.type && scheme.type.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return true;
  });

  return (
    <div className="schemes-container">
      <h1>Government Schemes and Subsidies</h1>

      <div className="filter-container">
        <label>
          Filter Schemes:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Central">Central Schemes</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
        </label>
      </div>

      <div className="search-container">
        <label>
          Search Schemes:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter keyword..."
          />
        </label>
      </div>

      <div className="scheme-list">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme, index) => (
            <div key={index} className="scheme-card" onClick={() => forward(scheme.url)}>
              <h2>{scheme.name}</h2>
              <p>{scheme.description}</p>
            </div>
          ))
        ) : (
          <p>No schemes found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};
