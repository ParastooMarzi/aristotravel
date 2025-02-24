import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Discover More Exquisite Flavors </p>
        <h1 className="primary-heading">
        Beyond our world-renowned Persian Saffron, we bring you a selection of the finest spices nature has to offer.
        </h1>
        <p className="primary-text">
        Premium Black Pepper – Bold, aromatic, and full of rich flavor.
        </p>
      
        <p className="primary-text"> Pure Dried Garlic & Onion – Elevate your cooking with natural intensity.</p>
        <p className="primary-text"> Sun-Dried Chili – A perfect balance of heat and depth.</p>
        <p className="primary-text">Sourced with care. Delivered with passion. Crafted for perfection.</p>
        <p className="primary-text">Organic Cardamom – A touch of exotic sweetness for your dishes.</p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={() => setIsModalOpen(true)}>Explore Our Collection</button>
          <button className="watch-video-button">
          </button>
        </div>
      </div>
      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Contact Us</h2>
            <p><strong>WhatsApp:</strong> +98 901 682 3100 </p>
            <p><strong>Email:</strong> aristotravel@gmail.com</p>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
