import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
    flex: 1 1 auto;

    .active {
        border-bottom: 2px solid black;
    }

    ul {
        padding-left: 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        list-style: none;
    }

    li {
        transition: all 300ms ease-in-out;
    }

    a {
        font-family: "Josefin Sans";
        font-size: var(--fontBig);
        text-transform: uppercase;
        color: black;
        text-decoration: none;
        transition: all 300ms ease-in-out;
    }

    li:hover {
        transform: scale(1.2, 1.2);
    }

    a:hover {
        border-bottom: 2px solid black;
    }
`;

export const Navbar: React.FC = () => {
    return (
        <NavbarWrapper>
            <ul>
                <li>
                    <NavLink to="movie">Movies</NavLink>
                </li>
                <li>
                    <NavLink to="tvshows">TV Shows</NavLink>
                </li>
                <li>
                    <NavLink to="trailers">Trailers</NavLink>
                </li>
                <li>
                    <NavLink to="lists">Lists</NavLink>
                </li>
            </ul>
        </NavbarWrapper>
    );
};
