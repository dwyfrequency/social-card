import React from "react";
import ContentPreviewHero from "./ContentPreviewHero";

const ContentPreview = params => {
  return (
    <div className="ContentPreview">
      <ContentPreviewHero />
      <div className="ContentOverview">
        <p>Content Title</p>
        <p>Content Excerpt</p>
        <p>source website url</p>
      </div>
    </div>
  );
};

export default ContentPreview;
