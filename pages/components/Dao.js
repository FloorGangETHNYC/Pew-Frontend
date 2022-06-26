import React from "react";

export default function Dao(props) {
  let active;
  if (props.item.active === 1) {
    active = "Active";
  } else {
    active = "Inactive";
  }

  return (
    <div className="dao">
      <img
        src={`${props.item.logo}`}
        alt="logo"
        className="dao--logos"
        width="100"
      />
      <h3>{props.item.name}</h3>
      <div className="dao--stats">
        <div className="dao--rating">{props.item.rating} ⭐️ | </div>
        <span className="dao--badge">{active} | </span>
        <span className="dao--reviews">{props.item.reviews} reviews</span>
      </div>
    </div>
  );
}
