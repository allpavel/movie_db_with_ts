import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import searchIcon from "../../images/search_icon.svg";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  height: 80px;
  background: #617487;
  padding: 0 20px;
`;

const Content = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  height: 45px;
  margin: 0 auto;
  background: #b0b9c3;
  border-radius: 40px;
  color: white;

  img {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 40px;
  }

  input {
    font-size: 28px;
    position: absolute;
    left: 0;
    margin: 4px 0;
    padding: 0 0 0 45px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: black;

    :focus {
      outline: none;
    }
  }
`;

export const SearchBar = ({ setSearchTerm }) => {
  const [search, setSearch] = useState("");
  const initial = useRef(true);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, search]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
};
