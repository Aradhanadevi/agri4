import React, { useState } from 'react';
import './Css/FAQPage.css'; // Import CSS file for styling

const FAQPage = () => {
  // State to track the visibility of each answer
  const [answersVisible, setAnswersVisible] = useState({});

  // Function to toggle the visibility of an answer
  const toggleAnswer = (question) => {
    setAnswersVisible((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-item">
        <h2 className="question" onClick={() => toggleAnswer('q1')}>
          Question 1: How can I access crop advisory services?
        </h2>
        {answersVisible['q1'] && (
          <p className="answer">
            Answer: You can access our crop advisory services by visiting the "Crop Advisory" section on our website. There, you’ll find tailored recommendations for various crops, based on your region, soil type, and seasonal factors.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 className="question" onClick={() => toggleAnswer('q2')}>
          Question 2: What are the latest government schemes available for farmers?
        </h2>
        {answersVisible['q2'] && (
          <p className="answer">
            Answer: We regularly update our "Government Schemes" section with the latest schemes for farmers. These include subsidies, loan programs, and grants provided by the government to support agriculture. You can visit that section for more information.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 className="question" onClick={() => toggleAnswer('q3')}>
          Question 3: How do I check current market prices for crops?
        </h2>
        {answersVisible['q3'] && (
          <p className="answer">
            Answer: You can check real-time market prices by visiting the "Market Information" section. We provide updated rates for various crops across different regions to help you make informed decisions.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 className="question" onClick={() => toggleAnswer('q4')}>
          Question 4: Does the platform provide weather forecasts for farming?
        </h2>
        {answersVisible['q4'] && (
          <p className="answer">
            Answer: Yes, we offer detailed weather forecasts in the "Weather Forecasting" section, including rain predictions, temperature trends, and alerts, to help farmers plan their activities efficiently.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 className="question" onClick={() => toggleAnswer('q5')}>
          Question 5: How can I maximize my crop yield?
        </h2>
        {answersVisible['q5'] && (
          <p className="answer">
            Answer: Our "Yield Maximization" section provides strategies on improving crop yield through proper irrigation, pest control, soil management, and optimal planting schedules.
          </p>
        )}
      </div>

      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQPage;