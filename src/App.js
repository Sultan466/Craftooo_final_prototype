import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainHeader from "./components/pages/MainHeader";
import HomePage from "./HomePage.jsx/HomePage";
import ExplorOffer from "./components/Offers/ExplorOffer";
import IndustrySection from "./components/IndustrySection/IndustrySection";
import MainImagesComponent from "./components/technologies/MainImagesComponent"
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import ContactUs from "./components/Contact/ContactUs"
import ShowComponent from "./components/ShowComponent/ShowComponent";
const App = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />}
        />
        <Route path="/slider" element={<Slider />}
        />
        <Route path="/about" element={<About />}
        />
        <Route path="/contact" element={<ContactUs />}
        />
        <Route path="/offer" element={<ExplorOffer />}
        />
        <Route path="/industry" element={<IndustrySection />}
        />
        <Route path="/technology" element={<MainImagesComponent />}
        />
      </Routes>
      <ShowComponent condition={currentRoute !== "/"}>
        <Footer />
      </ShowComponent>
    </>
  );
};

export default App;
