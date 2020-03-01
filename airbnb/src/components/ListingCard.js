import React, { useState } from "react";
import img from "../assets/houses.jpeg";

const ListingCard = () => {
  const [content, setContent] = useState({
    image: { img },
    houseType: "Apartment",
    price: "$125,000",
    region: "Haagen-Dasz Region",
    beds: 2,
    baths: 2,
    rooms: 3
  });
  return (
    <div style={{ "padding-top": "100px" }}>
      <img src={img} alt="image" />
      <div>
        <h2>{content.houseType}</h2>
        <h1>{content.price}</h1>
      </div>
      <div>
        <h3>{content.region}</h3>
        <div>
          <h3>{content.beds}</h3>
          <h3>{content.baths}</h3>
          <h3>{content.rooms}</h3>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
