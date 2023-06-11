import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SmallSidebar, Sidebar, Video } from "../components";
import { getMovies } from "../utils/fetchData";

const Home = () => {
  const [category, setCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMovies(`search?part=snippet&q=${category}`).then((data) =>
      setVideos(data.items)
    );
  }, [category]);
  console.log(videos);
  return (
    <Wrapper className="section-center">
      <SmallSidebar category={category} setCategory={setCategory} />
      <Sidebar category={category} setCategory={setCategory} />
      <section className="feeds">
        {videos.map((item, index) => {
          return <Video key={index} {...item} />;
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  gap: 2rem;
  .feeds {
    display: grid;
    gap: 1rem;
  }

  @media screen and (min-width: 800px) {
    margin-top: 2rem;
    grid-template-columns: auto 1fr;
    .feeds {
      width: auto;
      margin-inline: auto;
      grid-template-columns: 25rem;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: auto 1fr;
    .feeds {
      width: auto;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Home;
