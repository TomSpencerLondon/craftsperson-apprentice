import React from "react";
import "./Card.css";
import { getChannelInfo } from "../../channelProvider";
import classNames from "classnames";

const tagsList = tags =>
  tags.map((tag, index) => {
    return (
      <div className="tag" key={index}>
        {tag}
      </div>
    );
  });

const channelsList = channels =>
  channels.map(channel => {
    const { icon, url } = getChannelInfo(channel);
    return (
      <a
        key={channel.type}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">
          <i className={`fa fa-${icon}`} />
        </div>
        <div className="type">{channel.type}</div>
      </a>
    );
  });

const Avatar = ({ mentor }) => {
  return (
    <div className="avatar">
      <i className="fa fa-user-circle" />
      <img src={mentor.avatar} aria-labelledby={`${mentor.name}-name`} alt="" />
    </div>
  );
};

const LikeButton = ({ onClick, liked }) => (
  <button onClick={onClick} className="like-button">
    <i
      className={classNames([
        "fa",
        { "liked fa-heart": liked, "fa-heart-o": !liked }
      ])}
    />
  </button>
);

const Card = ({ mentor, onToggleFav, isFav }) => {
  const toggleFav = () => {
    isFav = !isFav;
    onToggleFav(mentor);
  };

  return (
    <div className="card">
      <LikeButton onClick={toggleFav} liked={isFav} />
      <Avatar mentor={mentor} />
      <div className="name" id={`${mentor.name}-name`}>
        {mentor.name}
      </div>
      <div className="title">{mentor.title}</div>
      <div className="description">"{mentor.description}"</div>
      <div className="tags">{tagsList(mentor.tags)}</div>
      <div className="channels">
        <div className="channel-inner">{channelsList(mentor.channels)}</div>
      </div>
    </div>
  );
};

export default Card;
