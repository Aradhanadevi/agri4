/* General Styles */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f0f2f5;
  }
  
  /* Image Rotator Section */
  .image-rotator {
    position: relative;
    width: 100%;
    max-height: 600px;
    overflow: hidden;
  }
  
  .rotator-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }
  
  .rotator-heading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  
  /* Key Features Section */
  .key-features {
    margin: 40px 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .key-features h2 {
    text-align: center;
    font-size: 2rem;
    color: #333;
  }
  
  /* Advisory Cards Section */
  .advisory-cards {
    margin-top: 40px;
    padding: 20px;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    flex: 1;
    min-width: 300px;
    max-width: calc(33.333% - 20px);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  }
  
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }
  
  .card-content {
    padding: 15px;
    text-align: left;
  }
  
  .card-content h3 {
    margin: 0;
    color: #333;
    font-size: 1.5rem;
  }
  
  .card-content p {
    color: #555;
    font-size: 1rem;
    margin: 10px 0;
  }
  
  .card-content a {
    display: inline-block;
    margin-top: 10px;
    color: #5a67d8;
    text-decoration: none;
    font-weight: bold;
  }
  
  .card-content a:hover {
    text-decoration: underline;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .card {
        max-width: calc(50% - 20px);
    }
  
    .rotator-heading {
        font-size: 2.5rem;
    }
  }
  .agrimain{
    background-color: #b5d1a7;
  }
  @media (max-width: 480px) {
    .card {
        max-width: 100%;
    }
  
    .rotator-heading {
        font-size: 2rem;
    }
  }
  