import React from 'react';
import './Css/AdvisoryCard.css';

const AdvisoryCard = ({ title, description, image, link }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>Learn More</a>
            </div>
        </div>
    );
};

export default AdvisoryCard;
