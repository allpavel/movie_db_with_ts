import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.section`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image});
  background-size: 100%, cover;
  background-position: top;
  height: 700px;
  position: relative;
  color: white;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;

  h1 {
    font-size: 2rem;

    @media screen and (max-width: 720px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;

    @media screen and (max-width: 720px) {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const HeroImage = ({ image, title, description }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h2>{title}</h2>
          <p>{description}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
