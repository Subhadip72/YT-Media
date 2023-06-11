import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovies } from "../utils/fetchData";
import { ChannelInfo, Video } from "../components";

const SingleChannel = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMovies(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );

    getMovies(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  // console.log(videos);
  return (
    <Container>
      <div className="color"></div>
      <div className="content">
        {channelDetail && <ChannelInfo channelDetail={channelDetail} />}
        <div className="video-container">
          {videos &&
            videos.map((item, index) => {
              return <Video key={index} {...item} />;
            })}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  gap: 2rem;
  .color {
    height: 270px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(44, 190, 219, 1) 0%,
      rgba(235, 0, 231, 1) 51%
    );
  }
  .video-container {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
  }

  @media screen and (min-width: 768px) {
    .video-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px) {
    .video-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default SingleChannel;
