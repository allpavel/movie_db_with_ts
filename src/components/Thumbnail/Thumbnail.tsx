import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.4s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;

    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

type Props = {
    image: string;
    movieId?: number;
};

export const Thumbnail: React.FC<Props> = ({ image, movieId }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`${movieId}`);
    };
    if (movieId)
        return <Image src={image} alt="movie-thumb" onClick={handleNavigate} />;

    return <Image src={image} alt="movie-thumb" />;
};
