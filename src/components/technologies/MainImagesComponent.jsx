import React, { useState } from "react";
import data from "./ImageData";
import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import TechComponent from "./TechComponent";
const MainImagesComponent = () => {
  const [selectedImage, setSelectedImage] = useState(data[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <>
    <TechComponent />
    <div className="technologies-background">
      <div className="outer-main-container">
        {data.map((item) => (
          <ImageComponent
            key={item.id}
            image={item.imageUrl}
            heading={item.heading}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="selected-image-container">
          <div className="services-offer">
            <p className="selected-image-content">{selectedImage.content}</p>
            <h4>{selectedImage.title}</h4>
          </div>
          <ul className="ul-list">
            {selectedImage.services.map(({ linkTo, title }, index) => (
              <li key={index} className="list-items">
                <span className="dot"></span>
                {linkTo ? <Link to={linkTo}>{title}</Link> : title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default MainImagesComponent;
