import React from "react";
import "./imageList.scss";
// import logo from "../NavBar/logoAmelie.png";

const ImageList = () => {
  return (
    <div className="imageList">
      <div className="title">
        {/* <img src={logo} alt="" srcset="" className="logo" /> */}
      </div>
      <div className="gallery">
        <img
          src="https://images.pexels.com/photos/851219/pexels-photo-851219.jpeg?cs=srgb&dl=pexels-lisa-fotios-851219.jpg&fm=jpg?random=1"
          alt=""
          srcset=""
          className="oneImage"
        />
        <img
          src="https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1600?random=2"
          alt=""
          srcset=""
          className="twoImage"
        />
        <img
          src="https://images.pexels.com/photos/2878375/pexels-photo-2878375.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          srcset=""
          className="threeImage"
        />
        <h2>Amelie Nail Studio</h2>
      </div>
    </div>
  );
};

export default ImageList;
