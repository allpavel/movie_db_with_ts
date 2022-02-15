import React from "react";
import styled from "styled-components";

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

type Props = {
    header: string;
};

export const Grid: React.FC<Props> = ({ header, children }) => {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children}</Content>
        </Wrapper>
    );
};
