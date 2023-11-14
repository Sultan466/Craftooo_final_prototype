import React from "react";
import HeroPage from "../components/pages/HeroPage";
import Whatsapp from "../components/pages/Whatsapp";
import Slider from "../components/Slider/Slider";
import ExplorOffer from "../components/Offers/ExplorOffer";
import MainImagesComponent from "../components/technologies/MainImagesComponent";
import IndustrySection from "../components/IndustrySection/IndustrySection";
import Footer from "../components/Footer/Footer";
const HomePage = () => {
  return (
    <div className="container-fluid  Section_top">
      <HeroPage />
      <Whatsapp />
      <div
        style={{
          marginTop: "12.5rem",
        }}
      >
        <Slider />
      </div>
      <ExplorOffer />
      <IndustrySection />
      <MainImagesComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
