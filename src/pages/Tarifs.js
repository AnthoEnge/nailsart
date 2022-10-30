import React from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import TarifsContent from "../components/tarifs/TarifsContent";
const Tarifs = () => {
  return (
    <div className="viewHeight">
      <NavBar />
      <TarifsContent />
      <Footer />
    </div>
  );
};

export default Tarifs;
