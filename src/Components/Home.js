import React, { useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import SafferonSection from "./SafferonSection";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Elevate Your Senses with the Finest Persian Saffron
          </h1>
          <p className="primary-text">
            Handpicked from the sun-kissed fields of Iran, our premium saffron delivers unmatched aroma, flavor, and purity. Experience the golden essence of luxury in every strand.
          </p>
          <button className="secondary-button" onClick={() => setIsModalOpen(true)}>
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      
      <SafferonSection />

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

export default Home;
