import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: #353535;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

export const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
};
