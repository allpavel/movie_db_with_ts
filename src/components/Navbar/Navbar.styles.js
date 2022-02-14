import styled from "styled-components";

export const NavbarWrapper = styled.nav`
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
        font-family: 'Josefin Sans';
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