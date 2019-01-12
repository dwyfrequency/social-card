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
      <img src={userAvatar} alt="User's Avatar" className="Avatar" />
      <p>
        <strong>{userFullName}</strong> <span>{userHandle} - Date</span>
      </p>
      <p>{contentTitle}</p>
      <p>
        {author}: @{authorHandle}
      </p>
    </div>
  );
};

export default CardHeader;
