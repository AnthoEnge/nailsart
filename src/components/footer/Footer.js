import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <p>
          Email : amelie.engels@outlook.fr
          <br />
          Numero Téléphone : 07.55.55.55.55 <br />
          Adresse : Plemet
        </p>
      </div>
      <div className="logo">
        <i class="ri-mail-send-fill"></i>
        <i class="ri-instagram-fill"></i>
      </div>
    </footer>
  );
};

export default Footer;
