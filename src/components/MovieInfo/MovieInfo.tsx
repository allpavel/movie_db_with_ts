import React from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../API/config";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import { MovieState } from "../../hooks/useGetMovie";

type StyleProps = {
    backdrop: string;
};

const Wrapper = styled.section<StyleProps>`
    background: ${({ backdrop }) =>
        backdrop
            ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
            : "#000"};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Content = styled.div`
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    img {
        max-width: 39%;
    }

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;

        img {
            max-width: 720px;
        }
    }
`;

const Text = styled.div`
    color: white;
    font-family: "Josefin Sans";
    padding: 20px 40px;
    max-width: 600px;
    overflow: auto;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: black;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
    }

    .director {
        margin: 0 0 0 40px;

        p {
            margin: 0;
        }
    }

    h1 {
        @media screen and (max-width: 768px) {
            font-size: 1.2rem;
        }
    }
`;

type Props = {
    movie: MovieState;
};

export const MovieInfo: React.FC<Props> = ({ movie }) => {
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumbnail
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : ""
                    }
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>
                                DIRECTOR{movie.directors.length > 1 ? "S" : ""}
                            </h3>
                            {movie.directors.map((director) => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    );
};
