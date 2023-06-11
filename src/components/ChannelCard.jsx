import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChannelCard = ({ channelId, title, img }) => {
  return (
    <Wrapper className="section-center">
      <Link to={`/channel/${channelId}`}>
        <img src={img} alt={title} />
      </Link>
      <div className="info">
        <p>{title}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    color: #fff;
    text-transform: capitalize;
  }

  @media screen and (min-width: 800px) {
    width: auto;
  }
`;

export default ChannelCard;
