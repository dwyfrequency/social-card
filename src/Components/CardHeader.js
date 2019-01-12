import React from "react";

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
        <img src={userAvatar} alt="User's Avatar" className="Avatar" />
        <p>
          <strong>{userFullName}</strong> <span>@{userHandle} - Date</span>
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
