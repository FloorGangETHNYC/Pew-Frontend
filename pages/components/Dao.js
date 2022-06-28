import Image from "next/image";
import React from "react";

export default function Dao(props) {
  // console.log("🚀 | Dao | props", props);
  // let active;
  // if (props.item.active === 1) {
  //   active = "Active";
  // } else {
  //   active = "Inactive";
  // }

  return (
    <div className="dao">
      <Image
        src={`/${props.image}`}
        alt="logo"
        className="dao--logos"
        width={100}
        height={100}
      />
      <h3>{props.name}</h3>
      <div className="dao--stats">
        <div className="dao--rating">{props.rating} ⭐️ | </div>
        <span className="dao--badge">{"Active"} | </span>
        <span className="dao--reviews">{props.reviews} reviews</span>
      </div>
    </div>
  );
}
