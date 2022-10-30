import React from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import DemoApp from "../components/calendar/DemoApp.tsx";

const Reservation = () => {
  return (
    <div className="viewHeight">
      <NavBar />
      <DemoApp />
      <Footer />
    </div>
  );
};

export default Reservation;
