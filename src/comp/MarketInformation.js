import React, { useState, useEffect } from "react";
import './Css/MarketInformation.css';

const MarketInformation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [marketData, setMarketData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Fetch market data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/marketData.json"); // Update this path as needed
      const data = await response.json();
      setMarketData(data);
    };
    fetchData();
  }, []);

  // Filter market data based on search term
  const filteredData = marketData.filter(item => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      item.crop.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.price.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.demand.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.state.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="marketmain">
    <div className="market-information">
      <h2>Market Information</h2>
      <input
        type="text"
        placeholder="Search by crop, price, demand, or state..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="market-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Price</th>
            <th>Demand</th>
            <th>Export</th>
            <th>Import</th>
            <th>State</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.crop}</td>
                <td>{item.price}</td>
                <td>{item.demand}</td>
                <td>{item.export}</td>
                <td>{item.import}</td>
                <td>{item.state}</td>
                <td>{item.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      </div>
      </div>
  );
};

export default MarketInformation;
