import React from "react";
import Footer from "../components/footer/Footer";
import ImageList from "../components/imageList/ImageList";
import NavBar from "../components/navBar/NavBar";

const Accueil = () => {
  return (
    <div>
      <NavBar />
      <ImageList />
      <Footer />
    </div>
  );
};

export default Accueil;
