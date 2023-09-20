import React, { useState } from "react";
import UserDetails from "../UserDetails/UserDetails";
import "./ContactCard.css";
const ContactCard = (props) => {
  return (
    <div className="contact-card">
      <img src={props.avatarURL} alt="profile"></img>
      <UserDetails props={props} />
    </div>
  );
};

export default ContactCard;
