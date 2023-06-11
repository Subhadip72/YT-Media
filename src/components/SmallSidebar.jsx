import React from "react";
import styled from "styled-components";
import { categories } from "../utils/constants";
import CategoryBtn from "./CategoryBtn";

const SmallSidebar = ({ category, setCategory }) => {
  return (
    <SidebarWrapper>
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
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  /* width: 90vw;
  margin: 0 auto; */
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: scroll;
  margin-top: 2rem;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export default SmallSidebar;
