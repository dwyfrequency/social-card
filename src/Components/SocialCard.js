import React from "react";
import CardHeader from "./CardHeader";
import ContentPreview from "./ContentPreview";

const SocialCard = ({
  author,
  authorHandle,
  userAvatar,
  authorAvatar,
  contentTitle,
  userFullName,
  userHandle,
  url,
  contentDescr
}) => {
  return (
    <div className="SocialCard">
      <CardHeader
        author={author}
        authorHandle={authorHandle}
        userAvatar={userAvatar}
        contentTitle={contentTitle}
        userFullName={userFullName}
        userHandle={userHandle}
      />
      <ContentPreview
        author={author}
        userAvatar={userAvatar}
        authorAvatar={authorAvatar}
        url={url}
        contentDescr={contentDescr}
        contentTitle={contentTitle}
      />
    </div>
  );
};

export default SocialCard;
