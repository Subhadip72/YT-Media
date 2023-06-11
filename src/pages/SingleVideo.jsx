import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovies } from "../utils/fetchData";
import { Video } from "../components";

const SingleVideo = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getMovies(`videos?part=snippet,statistics&id=${id}&type=video`).then(
      (data) => setVideoDetail(data.items[0])
    );

    getMovies(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideo(data.items)
    );
  }, [id]);
  console.log(videoDetail);
  return (
    <Container>
      <div className="video">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width="100%"
          height="600px"
          controls
          className="player"
        />
        <div className="video-info">
          <div className="video-desc">
            <p>{videoDetail && videoDetail.snippet.title}</p>
            <p className="channel">
              {videoDetail?.snippet?.channelTitle}{" "}
              <span>
                <BsFillCheckCircleFill />
              </span>
            </p>
          </div>
          <div className="video-stats">
            <p>
              {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}{" "}
              likes
            </p>
            <p>
              {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()}{" "}
              views
            </p>
          </div>
        </div>
      </div>
      <section className="related-feeds">
        {video.map((item, index) => {
          return <Video key={index} {...item} />;
        })}
      </section>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    color: #fff;
    font-size: 1.25rem;
  }
  .channel {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .channel span {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .player {
    width: 100%;
    height: 300px;
  }
  .related-feeds {
    width: 95vw;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
  }
  .video-info {
    padding: 0.75rem;
    display: grid;
  }
  .video-desc {
    display: grid;
    gap: 1rem;
  }
  .video-stats {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 800px) {
    .related-feeds {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    margin-top: 2rem;
    width: 95vw;
    display: grid;
    grid-template-columns: 3fr 1fr;
    .related-feeds {
      grid-template-columns: 1fr;
      width: auto;
      margin: 0;
      height: 85vh;
      overflow-y: scroll;
    }
    .video-stats {
      justify-content: flex-end;
      gap: 1.5rem;
    }
  }
`;

export default SingleVideo;
