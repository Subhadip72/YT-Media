import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovies } from "../utils/fetchData";
import { Video } from "../components";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    getMovies(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setResults(data.items)
    );
  }, [searchTerm]);

  return (
    <Container className="section-center">
      <h1>
        showing results for <span>{searchTerm}</span>
      </h1>
      <div className="results">
        {results.map((item, index) => {
          return <Video key={index} {...item} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.main`
  margin-top: 2rem;
  h1 {
    color: #fff;
    text-transform: capitalize;
  }
  h1 span {
    color: red;
  }
  .results {
    display: grid;
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    .results {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .results {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
  }
`;

export default SearchResults;
