import React from "react";

const CardHeader = params => {
  return (
    <div className="CardHeader">
      <img src="" alt="User's Avatar" className="Avatar" />
      <p>
        <strong>User's Full Name</strong> <span>User's Handle - Date</span>
      </p>
      <p>Message</p>
      <p>author: @Credits</p>
    </div>
  );
};

export default CardHeader;
