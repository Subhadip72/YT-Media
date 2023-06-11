import React from "react";
import styled from "styled-components";

const CategoryBtn = ({ name, icon, category, setCategory }) => {
  return (
    <Container
      className={`${name === category ? "selected" : "null"}`}
      onClick={() => setCategory(name)}
    >
      <span className={`${name === category ? "selected-icon" : "icon"}`}>
        {icon}
      </span>
      <span className="name">{name}</span>
    </Container>
  );
};

const Container = styled.button`
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: transparent;
  transition: all 0.2s linear;
  cursor: pointer;
  .icon {
    color: red;
  }
  .selected-icon {
    color: #fff;
  }
  .name {
    font-weight: bold;
  }

  &:hover {
    background-color: red;
    .icon {
      color: #fff;
    }
  }
`;

export default CategoryBtn;
