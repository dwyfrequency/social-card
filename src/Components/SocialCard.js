import React from "react";
import CardHeader from "./CardHeader";
import ContentPreview from "./ContentPreview";

const SocialCard = ({
  author,
  authorHandle,
  contentTitle,
  userFullName,
  userHandle
}) => {
  return (
    <div className="SocialCard">
      <CardHeader
        author={author}
        authorHandle={authorHandle}
        contentTitle={contentTitle}
        userFullName={userFullName}
        userHandle={userHandle}
      />
      <ContentPreview />
    </div>
  );
};

export default SocialCard;
