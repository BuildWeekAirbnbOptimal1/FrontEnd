import React, { useState } from "react";
import img from "../assets/houses.jpeg";
import "../styles/ListingCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBed,
  faBath,
  faDoorClosed,
  faEdit,
  faTrashAlt,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

const ListingCard = ({ item }) => {
  const [content, setContent] = useState({
    // image: { img },
    houseType: "Apartment",
    price: "$125,000",
    region: "Haagen-Dasz Region",
    beds: 2,
    baths: 2,
    rooms: 3
  });
  return (
    <div className="card">
      <div className="panel-wrapper">
        <div className="controlpanel">
          <div>
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </div>
          <div>
            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
          </div>
        </div>
      </div>
      <div className="imgContainer">{/* <img src={img} alt="image" /> */}</div>
      <div className="cardHeader">
        <div className="hometype">
          <FontAwesomeIcon icon={faHome} size="lg" />
          <h2>{item.houseType}</h2>
        </div>

        <h1>{item.price}/day</h1>
      </div>
      <div className="content">
        <h2>{item.region}</h2>
        <div className="attributes">
          <div>
            <FontAwesomeIcon icon={faBed} size="2x" />
            <h3>{item.beds} Beds</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faBath} size="2x" />
            <h3>{item.baths} Baths</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faDoorClosed} size="2x" />
            <h3>{item.rooms} Rooms</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
