import React from "react";
import styled from "styled-components";
import { categories } from "../utils/constants";
import CategoryBtn from "./CategoryBtn";

const Sidebar = ({ category, setCategory }) => {
  return (
    <Wrapper>
      <div className="btn-container">
        {categories.map((item, index) => {
          return (
            <CategoryBtn
              key={index}
              {...item}
              category={category}
              setCategory={setCategory}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: sticky;
  top: 2rem;
  display: none;
  margin-top: 2rem;
  width: 250px;
  height: 90vh;
  overflow: scroll;
  border-right: 1px solid #e3e3e3;
  .btn-container {
    width: 7rem;
    padding-bottom: 2rem;
    display: grid;
    gap: 1.25rem;
  }

  @media screen and (min-width: 800px) {
    display: block;
  }
`;

export default Sidebar;
