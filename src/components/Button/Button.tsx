import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: block;
    background: gray;
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: white;
    border: 0;
    font-size: 1.2rem;
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

type Props = {
    text: string;
    onClick: () => void;
};

export const Button: React.FC<Props> = ({ text, onClick }) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
