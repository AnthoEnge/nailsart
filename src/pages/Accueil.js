import React from "react";
import Footer from "../components/footer/Footer";
import ImageList from "../components/imageList/ImageList";
import NavBar from "../components/navBar/NavBar";

const Accueil = () => {
  return (
    <div className="viewHeight">
      <NavBar />
      <ImageList />
      <Footer />
    </div>
  );
};

export default Accueil;
