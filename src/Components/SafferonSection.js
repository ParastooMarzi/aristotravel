import React from "react";
import saffronImage1 from "../Assets/saffron-image1.png";
import saffronImage2 from "../Assets/saffron-image2.png";

const SaffronSection = () => {
  return (
    <div className="saffron-section-container">
      <div className="saffron-content">
        <div className="saffron-card">
          <h2>Why Choose Persian Saffron?</h2>
          <p><strong>Premium Quality:</strong> Persian saffron is renowned for its intense flavor and deep red stigmas, making it the best in the world.</p>
          <p><strong>Health Benefits:</strong> Packed with antioxidants, saffron enhances mood, improves memory, and promotes overall well-being.</p>
          <img src={saffronImage1} alt="Saffron Tea" />
          <p className="authenticity-text"><strong>Authenticity & Purity:</strong> Our saffron is 100% pure, handpicked, and free from additives or artificial colorants.</p>
        </div>

        <div className="saffron-card">
          <h2>About Aristo Travel</h2>
          <p>
            Aristo Travel is dedicated to supplying the finest Persian saffron to Armenia, ensuring premium quality, rich aroma, and deep red threads. Our saffron is sourced from the best farms in Iran, where it is carefully cultivated and harvested to preserve its exceptional taste and properties.
          </p>
          <img src={saffronImage2} alt="Saffron Flower" />
        </div>
      </div>
    </div>
  );
};

export default SaffronSection;