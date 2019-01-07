import React from "react";
import ContentPreviewHero from "./ContentPreviewHero";
import ContentPreviewDescription from "./ContentPreviewDescription";

const ContentPreview = params => {
  return (
    <div className="ContentPreview">
      <ContentPreviewHero />
      <ContentPreviewDescription />
    </div>
  );
};

export default ContentPreview;
