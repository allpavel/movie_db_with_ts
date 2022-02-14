import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 150px;

    @media screen and (max-width: 500px) {
        width: 100px;
    }
`;
