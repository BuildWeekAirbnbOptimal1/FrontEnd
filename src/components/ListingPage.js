import React, { useState, useEffect, useContext } from "react";
import { LegitContext } from "../contexts/LegitContext";
import ListingCard from "./ListingCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../styles/ListingPage.scss";
import ListingForm from "./ListingForm";
import { separateMessageFromStack } from "jest-message-util";

const ListingPage = () => {
  const { id, setId } = useContext(LegitContext);
  const [editCard, setEditCard] = useState(null);
  const [listings, setListings] = useState([]);
  const [message, setMessage] = useState("");
  const getUsers = () => {
    axiosWithAuth()
      .get(`/host/${id}/properties`)
      .then(res => {
        setListings(res.data.user_properties);
        setMessage(res.data.message);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    setId(localStorage.getItem("memberId"));
    getUsers();
  }, []);

  const setValuesToListings = (newValue, id) => {
    setEditCard(null);
    setListings(listings => {
      let newListings = [...listings];
      if (id) {
        newListings = newListings.map(item =>
          item.id === id ? newValue : item
        );
      } else {
        newListings.push(newValue);
      }
      return newListings;
    });
  };

  return (
    <div className="listingPage">
      <div className="form-wrapper">
        {editCard ? <h1> Edit a Property</h1> : <h1> Add A Property</h1>}

        <ListingForm
          hostId={id}
          setValuesToListings={setValuesToListings}
          editCard={editCard}
        />
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
                setEditCard={setEditCard}
                editCard={editCard}
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
