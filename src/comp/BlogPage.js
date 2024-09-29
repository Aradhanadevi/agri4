import React from 'react';

const BlogPage = () => {
  // Dummy blog post data for agriculture-related topics
  const blogPosts = [
    {
      id: 1,
      title: "Latest Government Schemes for Farmers in 2024",
      content: "The government has introduced several new schemes to support farmers in 2024. These include subsidies for drip irrigation, low-interest loans for farm equipment, and grants for sustainable farming practices. Stay updated to take full advantage of these opportunities.",
      date: "September 20, 2024"
    },
    {
      id: 2,
      title: "Maximizing Crop Yield: Tips for the Upcoming Season",
      content: "With the new planting season approaching, it's essential to focus on maximizing crop yields. This blog explores strategies such as soil testing, effective irrigation management, and using high-quality seeds to ensure a productive season.",
      date: "September 15, 2024"
    },
    {
      id: 3,
      title: "How to Check Real-time Market Prices for Crops",
      content: "Tracking the latest market prices for your crops can help you make better selling decisions. Learn how to use our platform to access real-time market data across different regions, helping you maximize profits.",
      date: "September 10, 2024"
    },
    {
      id: 4,
      title: "Weather Forecasting: Preparing Your Farm for the Monsoon",
      content: "The monsoon season is unpredictable, but with proper planning, you can minimize risks. Our blog discusses how to use weather forecasting tools to plan your farm activities and protect your crops during the rainy season.",
      date: "September 5, 2024"
    },
    // Add more agriculture-related blog posts here
  ];

  return (
    <div className="container mt-4">
      <h1>Blog / News</h1>
      {blogPosts.map(post => (
        <div key={post.id} className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><small className="text-muted">Published on {post.date}</small></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;