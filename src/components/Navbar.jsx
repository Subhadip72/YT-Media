import React, { useState } from "react";
import { logo } from "../utils/constants";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("please enter a search term!!");
      return;
    }
    if (value) {
      navigate(`/search/${value}`);
    }
    setValue("");
  };

  return (
    <NavContainer>
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="main-logo" className="main-logo" />
        </Link>
        <form className="search-form">
          <div className="form-control">
            <input
              type="text"
              className="form-input"
              placeholder="search..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="search-btn" onClick={handleSubmit}>
              <FiSearch />
            </button>
          </div>
        </form>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin-top: 0.75rem;
  .main-logo {
    width: 3.5em;
    height: 3.5em;
    object-fit: cover;
  }
  .nav-header {
    width: 95vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form-control {
    display: flex;
    align-items: center;
  }
  .form-input {
    background-color: #fff;
    padding-left: 1rem;
    height: 2.5rem;
    width: 14rem;
    border: transparent;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    outline: none;
  }
  .search-btn {
    background-color: #fff;
    color: red;
    padding-right: 1rem;
    height: 2.5rem;
    border: transparent;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
  }
  .search-btn svg {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    .nav-header {
      width: 98vw;
    }
    .form-input {
      width: 20rem;
    }
  }
`;

export default Navbar;
