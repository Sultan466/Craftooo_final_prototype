import React, { useState } from "react";
import "./ExplorOffer.css";

import offeringsData from "./OffersData"

const ExplorOffer = () => {
  const [activeOffering, setActiveOffering] = useState(null);

  const toggleOffering = (index) => {
    setActiveOffering(index);
  };

  return (
    <div className="main-container">
      <h1 className="heading">Explore Our Offering</h1>
      <section className="offerings">
        <div className="titles-column">
          {offeringsData.map((offering, index) => (
            <div
              key={index}
              className={`offering-title ${
                index === activeOffering ? "active" : ""
              }`}
              onClick={() => toggleOffering(index)}
            >
              {offering.title}
            </div>
          ))}
        </div>
        <div className="info-column">
          {activeOffering !== null && (
            <div className="offering-info">
              <h2>{offeringsData[activeOffering].title}</h2>
              {offeringsData[activeOffering].description && (
                <p className="description">
                  {offeringsData[activeOffering].description}
                </p>
              )}
              {offeringsData[activeOffering].services && (
                <ul className="services-list">
                  {offeringsData[activeOffering].services.map(
                    (service, serviceIndex) => (
                      <li key={serviceIndex}>{service}</li>
                    )
                  )}
                </ul>
              )}
              <a className="explore-link" href="/">
                Explore Further
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExplorOffer;
