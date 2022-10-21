import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import logo from "./logoAmelie.png";

const NavBar = () => {
  let menuClick = (event) => {
    console.log(event.target);
  };
  return (
    <div>
      <header>
        <div className="nav burger">
          <div className="logoContainer">
            <img
              src={logo}
              alt=""
              srcset=""
              className="logo"
              onClick={menuClick}
            />
          </div>
          <div className="textContainer">
            <ul>
              <NavLink to="/accueil" activeClassName="active" className={"li"}>
                <li>Accueil</li>
              </NavLink>
              <NavLink
                to="/reservation"
                className={"li"}
                activeClassName="active"
              >
                <li>Reservation</li>
              </NavLink>
              <NavLink to="/galerie" activeClassName="active" className={"li"}>
                <li>Galerie</li>
              </NavLink>
              <NavLink to="/tarifs" className={"li"} activeClassName="active">
                <li>Tarifs</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
