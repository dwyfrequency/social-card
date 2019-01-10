import React from "react";
import CardHeader from "./CardHeader";
import ContentPreview from "./ContentPreview";

const SocialCard = ({
  author,
  authorHandle,
  avatar,
  contentTitle,
  userFullName,
  userHandle,
  url,
  contentDescr,
  ontentTitle
}) => {
  return (
    <div className="SocialCard">
      <CardHeader
        author={author}
        authorHandle={authorHandle}
        avatar={avatar}
        contentTitle={contentTitle}
        userFullName={userFullName}
        userHandle={userHandle}
      />
      <ContentPreview
        author={author}
        avatar={avatar}
        url={url}
        contentDescr={contentDescr}
        contentTitle={contentTitle}
      />
    </div>
  );
};

export default SocialCard;
