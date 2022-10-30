import React from "react";
import "./galerieContent.scss";

const GalerieContent = () => {
  let imageGaleries = [
    "https://images.pexels.com/photos/851219/pexels-photo-851219.jpeg?cs=srgb&dl=pexels-lisa-fotios-851219.jpg&fm=jpg?random=1",
    "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1600?random=2",
    "https://images.pexels.com/photos/851219/pexels-photo-851219.jpeg?cs=srgb&dl=pexels-lisa-fotios-851219.jpg&fm=jpg?random=1",
    "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1600?random=2",
    "https://images.pexels.com/photos/851219/pexels-photo-851219.jpeg?cs=srgb&dl=pexels-lisa-fotios-851219.jpg&fm=jpg?random=1",
    "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1600?random=2",
    "https://images.pexels.com/photos/851219/pexels-photo-851219.jpeg?cs=srgb&dl=pexels-lisa-fotios-851219.jpg&fm=jpg?random=1",
    "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1600?random=2",
  ];
  const listItems = imageGaleries.map((imageGalerie) => (
    <img src={imageGalerie} alt="test" className="imgGalerie filter" />
  ));

  return (
    <div className="content">
      <div className="galerieContent">{listItems}</div>
    </div>
  );
};

export default GalerieContent;
