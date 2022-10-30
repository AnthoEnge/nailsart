import React from "react";
import GalerieContent from "../components/galerie/GalerieContent";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Galerie = () => {
  return (
    <div className="viewHeight">
      <NavBar />
      <GalerieContent />
      <Footer />
    </div>
  );
};

export default Galerie;
