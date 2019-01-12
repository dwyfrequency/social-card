import React from "react";

const getDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDay();
  return `${month} ${day}`;
};

const CardHeader = ({
  author,
  authorHandle,
  userAvatar,
  contentTitle,
  userFullName,
  userHandle
}) => {
  return (
    <div className="CardHeader">
      <div className="UserDetails">
        <img
          src={userAvatar}
          alt="User's Avatar"
          className="Avatar LFSmPad"
          style={{ position: "relative", top: "27px" }}
        />
        <p>
          <strong>{userFullName}</strong>
          <span>
            @{userHandle} - {getDate()}
          </span>
        </p>
      </div>
      <div className="TextMessage">
        <p>{contentTitle}</p>
        <p>{`{${author}: @${authorHandle}}`}</p>
      </div>
    </div>
  );
};

export default CardHeader;
