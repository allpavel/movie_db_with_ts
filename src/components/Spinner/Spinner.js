import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    :after {
        content: '';
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid black;
        border-color: black transparent black transparent;
        animation: loader 1.2s linear infinite;

        @keyframes loader {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;

export const Spinner = () => {
    return (
        <Wrapper>
            <h1>Loading...</h1>
            <div></div>
        </Wrapper>
    )
}