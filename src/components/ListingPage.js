import React, { useState, useEffect, useContext } from "react";
import { LegitContext } from "../contexts/LegitContext";
import ListingCard from "./ListingCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../styles/ListingPage.scss";
// import ListingForm from "./ListingForm";

const ListingPage = () => {
  const { auth, setAuth } = useContext(LegitContext);
  const getUsers = userId => {
    console.log(userId);
    // axiosWithAuth()
    //   .get(
    //     `https://buildweek-airbnb.herokuapp.com/api/users/${userId}/property`
    //   )
    //   .then(res => setListings(res.data))
    //   .catch(err => console.log(err));
  };

  const [listings, setListings] = useState([
    {
      room_type: "Apartment",
      estimated_price: "8,000,000",
      neighbourhood_group_cleansed: "Haagen-Dasz Region",
      beds: 2,
      bathrooms: 2,
      bedrooms: 3
    },
    {
      room_type: "2-Room",
      estimated_price: "800",
      neighbourhood_group_cleansed: "Ze Old Towne Region",
      beds: 2,
      bathrooms: 12,
      bedrooms: 44445
    },
    {
      room_type: "Private Room",
      estimated_price: "1,200",
      neighbourhood_group_cleansed: "Lichsteiner Region",
      beds: 1,
      bathrooms: 1,
      bedrooms: 1
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
          {listings ? (
            listings.map(item => (
              <ListingCard
                key={item.id}
                item={item}
                setListings={setListings}
                listings={listings}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
