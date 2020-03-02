import React, { useState } from "react";
import ListingCard from "./ListingCard";
import "../styles/ListingPage.scss";
// import ListingForm from "./ListingForm";

const ListingPage = () => {
  const [listings, setListings] = useState([
    {
      houseType: "Apartment",
      price: "$8,000,000",
      region: "Haagen-Dasz Region",
      beds: 2,
      baths: 2,
      rooms: 3
    },
    {
      houseType: "2-Room",
      price: "$800",
      region: "Ze Old Towne Region",
      beds: 2,
      baths: 12,
      rooms: 44445
    },
    {
      houseType: "Private Room",
      price: "$1,200",
      region: "Lichsteiner Region",
      beds: 1,
      baths: 1,
      rooms: 1
    }
  ]);
  return (
    <div className="listingPage">
      <div className="form-wrapper">
        <h1> Listing form here</h1>
        {/* <ListingForm /> */}
      </div>
      <div className="grid-wrapper">
        <div className="grid">
          {listings.map(item => (
            <ListingCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
