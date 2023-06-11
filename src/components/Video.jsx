import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ChannelCard from "./ChannelCard";

const Video = ({
  id: { videoId, channelId },
  snippet: {
    title,
    channelTitle,
    thumbnails: {
      high: { url },
    },
  },
}) => {
  if (channelId) {
    return <ChannelCard channelId={channelId} title={title} img={url} />;
  }

  return (
    <Wrapper>
      <Link to={`/video/${videoId}`}>
        <img src={url} alt={title} />
      </Link>
      <div className="info">
        <p>{title.slice(0, 80)}</p>
        <p className="channel">
          {channelTitle} <BsFillCheckCircleFill />
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  p {
    color: #fff;
    font-size: 1.25rem;
  }
  img {
    width: 100%;
    height: 260px;
  }
  .channel {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Video;

// .channel {
//     display: flex;
//     gap: 0.5rem;
//   }
//   .channel span {
//     font-size: 1rem;
//     display: grid;
//     place-items: center;
//   }
//   img {
//     width: 100%;
//     height: 260px;
//     object-fit: cover;
//   }
//   .info {
//     display: grid;
//     color: #fff;
//     gap: 0.75rem;
//   }
