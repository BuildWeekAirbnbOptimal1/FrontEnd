import React, { useState, useEffect, useContext } from "react";
import { LegitContext } from "../contexts/LegitContext";
import ListingCard from "./ListingCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../styles/ListingPage.scss";
import ListingForm from "./ListingForm";
import { separateMessageFromStack } from "jest-message-util";

const ListingPage = () => {
  const { id, setId } = useContext(LegitContext);
  const [message, setMessage] = useState("");
  const getUsers = () => {
    axiosWithAuth()
      .get(`/host/${id}/properties`)
      .then(res => {
        setListings(res.data.user_properties);
        setMessage(res.data.message);
        console.log("properties", res);
      })
      .catch(err => {
        console.log(err);
        console.log("this is the id", id);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  const [listings, setListings] = useState([
    // {
    //   room_type: "Apartment",
    //   estimated_price: "8,000,000",
    //   neighbourhood_group_cleansed: "Haagen-Dasz Region",
    //   beds: 2,
    //   bathrooms: 2,
    //   bedrooms: 3,
    //   bed_type: "Queen",
    //   room_type: "Single",
    //   maximum_nights: 8,
    //   minimum_nights: 1,
    //   extra_people: 5,
    //   accomodates: 10,
    //   property_type: "Apartment",
    //   cancellation_policy: "Yes",
    //   guests_included: 8
    // },
    // {
    //   room_type: "2-Room",
    //   estimated_price: "800",
    //   neighbourhood_group_cleansed: "Ze Old Towne Region",
    //   beds: 2,
    //   bathrooms: 12,
    //   bedrooms: 44445,
    //   bed_type: "King",
    //   room_type: "Single",
    //   maximum_nights: 8,
    //   minimum_nights: 1,
    //   extra_people: 5,
    //   accomodates: 10,
    //   property_type: "Apartment",
    //   cancellation_policy: "yes",
    //   guests_included: 8
    // },
    // {
    //   room_type: "Private Room",
    //   estimated_price: "1,200",
    //   neighbourhood_group_cleansed: "Lichsteiner Region",
    //   beds: 1,
    //   bathrooms: 1,
    //   bedrooms: 1,
    //   bed_type: "king",
    //   room_type: "Single",
    //   maximum_nights: 8,
    //   minimum_nights: 1,
    //   extra_people: 5,
    //   accomodates: 10,
    //   property_type: "Apartment",
    //   cancellation_policy: "yes",
    //   guests_included: 8
    // }
  ]);

  const addNewListing = x => {
    const newListing = {
      id: Date.now(),
      houseType: x.houseType,
      region: x.region,
      beds: x.beds,
      baths: x.baths,
      rooms: x.rooms
    };

    setListings([...listings, newListing]);
  };
  const postAlisting = () => {
    const dataobj = {
      name: "Test12",
      bedrooms: 2,
      bathrooms: 1,
      bed_type: "queen",
      room_type: "Entire home",
      maximum_nights: 10,
      minimum_nights: 3,
      extra_people: 3,
      accommodates: 6,
      Neighbourhood_group_cleansed: "Deep Dive initiative",
      property_type: "Beach House",
      cancellation_policy: "Mild",
      guests_included: 2,
      optimal_price: 650
    };
    axiosWithAuth()
      .post(`/host/${id}/properties`, dataobj)
      .then(res => {
        // setListings(res.data.user_properties);
        // setMessage(res.data.message);
        console.log("succesful post", res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="listingPage">
      <div className="form-wrapper">
        <h1> Add A Property</h1>
        <ListingForm addNewListing={addNewListing} />
      </div>
      <div className="grid-wrapper">
        <div className="grid">
          {message ? (
            <h1>{message}</h1>
          ) : listings ? (
            listings.map(item => (
              <ListingCard
                key={item.id}
                hostId={id}
                item={item}
                setListings={setListings}
                listings={listings}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <button onClick={postAlisting}>Post</button>
      </div>
    </div>
  );
};

export default ListingPage;
