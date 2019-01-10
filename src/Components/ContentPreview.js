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
        <img src={userAvatar} alt="User's Avatar" />
        <h1>{contentTitle}</h1>
        <div className="CreditsInfo">
          <p>{authorAvatar}</p> <img src="" alt="Author's Avatar" />
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
