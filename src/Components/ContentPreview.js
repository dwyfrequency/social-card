import React from "react";

const ContentPreview = params => {
  return (
    <React.Fragment>
      <div className="ContentPreviewHero">
        <img src="" alt="User's Avatar" />
        <h1>Content Title</h1>
        <div className="CreditsInfo">
          <p>Author's FullName</p> <img src="" alt="Author's Avatar" />
        </div>
      </div>
      <div className="ContentPreview">
        <div className="ContentPreviewDescription">
          <p>Content Title</p>
          <p>Content Excerpt</p>
          <p>source website url</p>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default ContentPreview;
