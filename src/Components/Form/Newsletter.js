import React, { Component } from "react";
import { selectUser } from "../../app/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Newsletter() {
  const [offer, setoffer] = React.useState(() => {
    return (localStorage.getItem("offer") || "get 10% off your first purchase")
  });
  const [newOffer, setnewOffer] = React.useState("");
  React.useEffect(() => {
    localStorage.setItem("offer", offer);
  }, [offer]);
  const user = useSelector(selectUser);
  const handleOfferChange = (e) => {
    setnewOffer(e.target.value);
  };
  const handleUpdateOffer = (e) => {
    setoffer(newOffer);
  };
  return (
    <section className="newsletter-body">
      <img src="https://themewagon.github.io/alazea/img/core-img/leaf.png" />
      <div className="Container">
        <div className="newsletter-left">
          <h2>Join the newsletter</h2>
          <p>Subscribe to our newsletter and {offer}</p>
          {user && (
            <div className="editable">
              <input
                type="text"
                placeholder="Enter offer"
                value={newOffer}
                onChange={handleOfferChange}
                className="form-input-edit"
              />
              <button className="alazea-btn" onClick={handleUpdateOffer}>
                Update Offer
              </button>
            </div>
          )}
        </div>
        <div className="newsletter-right">
          <input type="text" placeholder="Enter your email" />
          <button className="alazea-btn">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
