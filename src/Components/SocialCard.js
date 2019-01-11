import React from "react";
import CardHeader from "./CardHeader";
import ContentPreview from "./ContentPreview";

const SocialCard = ({
  author,
  authorHandle,
  avatar = "",
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
        avatar={avatar}
        contentTitle={contentTitle}
        userFullName={userFullName}
        userHandle={userHandle}
      />
      <ContentPreview
        author={author}
        avatar={avatar}
        authorAvatar={authorAvatar}
        url={url}
        contentDescr={contentDescr}
        contentTitle={contentTitle}
      />
    </div>
  );
};

export default SocialCard;
