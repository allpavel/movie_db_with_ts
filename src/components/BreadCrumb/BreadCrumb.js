import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4rem;
    color: black;
    font-family: "Josefin Sans";
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    padding: 0 1rem;

    span {
        font-size: 1.2rem;
        color: black;
        padding-right: 0.7rem;

        @media screen and (max-width: 768px) {
            font-size: 0.8rem;
        }
    }
`;

export const BreadCrumb = ({ movieTitle }) => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
};

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string,
};
