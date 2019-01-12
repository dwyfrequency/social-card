import React from "react";

const ContentPreview = ({
  userAvatar = "",
  authorAvatar,
  author,
  url,
  contentDescr,
  contentTitle
}) => {
  return (
    <div className="ContentPreview">
      <div className="ContentPreviewHero">
        <img src={userAvatar} alt="User's Avatar" className="Avatar" />
        <h1>{contentTitle}</h1>
        <div className="CreditsInfo">
          <p>{author}</p>{" "}
          <img
            src={authorAvatar}
            alt="Author's Avatar"
            className="Avatar PadSm"
          />
        </div>
      </div>
      <div className="ContentPreviewDescription">
        <div className="ContentPreviewDescription">
          <p>{contentTitle}</p>
          <p>{contentDescr}</p>
          <p>{url}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
