import React from "react";
import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ChannelInfo = ({ channelDetail }) => {
  const {
    statistics: { subscriberCount, viewCount },
    snippet: {
      title,
      thumbnails: {
        high: { url },
      },
    },
  } = channelDetail;

  return (
    <Wrapper>
      <img src={url} alt={title} />
      <div className="info">
        <h4 className="heading">
          {title}{" "}
          <span className="icon">
            <BsFillCheckCircleFill />
          </span>
        </h4>
        <p>{parseInt(subscriberCount).toLocaleString()} subscribers</p>
        <p>{parseInt(viewCount).toLocaleString()} views</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* width: 90vw; */
  margin: 0 auto;
  display: grid;
  place-items: center;
  transform: translateY(-50%);
  h4,
  p {
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    padding-bottom: 0.75rem;
  }
  img {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .icon {
    font-size: 1rem;
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }
  .info {
    text-align: center;
    text-transform: capitalize;
    padding: 1rem;
  }
`;

export default ChannelInfo;
