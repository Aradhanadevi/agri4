import React, { useState } from 'react';
import AdvisoryCard from './AdvisoryCard';
import advisoryData from './AdvisoryData';
import './Css/CropAdvisory.css';

const CropAdvisory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAdvisoryData = advisoryData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='cropmain'>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Crop Advisory and Best Practices</h2>

      {/* Search bar */}
      <div className="search-bar mb-4 text-center">
        <input
          type="text"
          placeholder="Search advisory..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control w-50 mx-auto"
        />
      </div>

      {/* Advisory cards */}
      <div className="row">
        {filteredAdvisoryData.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <AdvisoryCard
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          </div>
        ))}
      </div>
      </div>
      </div>
  );
};

export default CropAdvisory;
