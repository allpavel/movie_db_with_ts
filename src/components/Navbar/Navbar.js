import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarWrapper } from './Navbar.styles';

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <ul>
                <li>
                    <NavLink to='movie'>Movies</NavLink>
                </li>
                <li>
                    <NavLink to='tvshows'>TV Shows</NavLink>
                </li>
                <li>
                    <NavLink to='trailers'>Trailers</NavLink>
                </li>
                <li>
                    <NavLink to='lists'>Lists</NavLink>
                </li>
            </ul>
        </NavbarWrapper>
    )
}