import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.section`
    color: black;
    font-family: "Josefin Sans";
    border: 2px solid black;
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    h3 {
        margin: 10px 0 0 0;
    }

    p {
        margin: 5px 0;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
`;

export const Actor = ({ name, character, imageUrl }) => {
    return (
        <Wrapper>
            <Image src={imageUrl} alt="actor-thumb" />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    );
};

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
};
