import React, { useState, useEffect } from "react";
import AdvisoryCard from './AdvisoryCard';
import './Css/AgriculturePortal.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/1.jpg';
import image5 from './images/2.jpg';

const AgriculturePortal = () => {
    const images = [image1, image2, image3, image4, image5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="agrimain">
        <div className="portal-container">
            {/* Image Rotator with Heading */}
            <div className="image-rotator">
                <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="rotator-image" />
                <h1 className="rotator-heading">Agricultural Information & Resource Portal</h1>
            </div>

            {/* Key Features Section */}
            <section className="key-features">
                <h2>Key Features</h2>
                <p>Explore various features to assist your farming practices.</p>
            </section>

            {/* Advisory Cards Section */}
            <section className="advisory-cards">
                <div className="card-container">
                    <AdvisoryCard
                        title="Crop Advisory"
                        description="Get timely crop-related advice and insights."
                        image={images[0]}
                        link="#"
                    />
                    <AdvisoryCard
                        title="Pest Management"
                        description="Learn best practices to manage pests."
                        image={images[1]}
                        link="#"
                    />
                    <AdvisoryCard
                        title="Farming Techniques"
                        description="Advanced techniques to improve your yields."
                        image={images[2]}
                        link="#"
                    />
                </div>
            </section>
            </div>
            </div>
    );
};

export default AgriculturePortal;
