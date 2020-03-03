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
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ListingCard = ({ item, listings, setListings }) => {
  const [open, setOpen] = useState(false);
  const deleteListing = () => {
    console.log("Clicked this");
    axiosWithAuth()
      .delete(`https://buildweek-airbnb.herokuapp.com/api/property/${item.id}`)
      .then(res => {
        console.log(res);
        // console.log("listings in card", listings);
        setListings(listings.filter(listing => listing.id !== item.id));
      })
      .catch(err => console.log(err));
  };

  const editListing = () => {
    console.log("Edit this Listing");
  };

  const openCard = () => {
    setOpen(!open);
  };

  return (
    <div className="card">
      <div className="panel-wrapper">
        <div className="controlpanel">
          <div onClick={editListing}>
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </div>
          <div onClick={deleteListing}>
            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
          </div>
        </div>
      </div>
      <div className="imgContainer">{/* <img src={img} alt="image" /> */}</div>
      <div className="cardHeader">
        <div className="hometype">
          <FontAwesomeIcon icon={faHome} size="lg" />
          {item.room_type ? <h2>{item.room_type}</h2> : <h2>Not Specified</h2>}
        </div>

        <h1>${item.estimated_price}/day</h1>
      </div>
      <div className="content">
        {item.neighbourhood_group_cleansed ? (
          <h3>{item.neighbourhood_group_cleansed}</h3>
        ) : (
          <h3>No Neighborhood Specified</h3>
        )}
        <div className="attributes">
          <div>
            <FontAwesomeIcon icon={faBed} size="2x" />
            <h3>{item.beds} Beds</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faBath} size="2x" />
            <h3>{item.bathrooms} Baths</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faDoorClosed} size="2x" />
            <h3>{item.bedrooms} Rooms</h3>
          </div>
        </div>
        <div className="arrow">
          {" "}
          {!open ? (
            <FontAwesomeIcon icon={faAngleDown} size="lg" onClick={openCard} />
          ) : (
            <FontAwesomeIcon
              icon={faAngleUp}
              size="lg"
              onClick={openCard}
              className="upArrow"
            />
          )}
        </div>
      </div>
      {open ? <h1>Render a ton of content here please</h1> : null}
    </div>
  );
};

export default ListingCard;
