import React from "react";

const CardHeader = ({
  author,
  authorHandle,
  contentTitle,
  userFullName,
  userHandle
}) => {
  return (
    <div className="CardHeader">
      <img src="" alt="User's Avatar" className="Avatar" />
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
