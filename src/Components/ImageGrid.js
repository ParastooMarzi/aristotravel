import React from "react";
import section1 from "../Assets/section1.png";
import section2 from "../Assets/section2.png";
import section3 from "../Assets/section3.png";

const ImageGrid = () => {
  return (
    <div className="image-grid-container">
      <img src={section1} alt="Section 1" className="grid-image" />
      <img src={section2} alt="Section 2" className="grid-image" />
      <img src={section3} alt="Section 3" className="grid-image" />
    </div>
  );
};

export default ImageGrid;
