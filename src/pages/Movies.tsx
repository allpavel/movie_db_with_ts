import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../API/config";
import { HeroImage } from "../components/HeroImage/HeroImage";
import { Grid } from "../components/Grid/Grid";
import { Thumbnail } from "../components/Thumbnail/Thumbnail";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Button } from "../components/Button/Button";
import { Spinner } from "../components/Spinner/Spinner";
import { useGetPopularMovies } from "../hooks/useGetPopularMovies";

export const Movies = () => {
    const {
        movies,
        isLoading,
        searchTerm,
        setSearchTerm,
        setIsLoadingMoreMovies,
    } = useGetPopularMovies();

    return (
        <>
            {!searchTerm && movies.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
                    title={movies.results[0].original_title}
                    description={movies.results[0].overview}
                />
            ) : (
                ""
            )}
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
                {movies.results.map((movie) => (
                    <div key={uuidv4()}>
                        <Thumbnail
                            image={
                                movie.poster_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    : "No image"
                            }
                            movieId={movie.id}
                        />
                    </div>
                ))}
            </Grid>
            {isLoading && <Spinner />}
            {!isLoading && movies.page < movies.total_pages && (
                <Button
                    text={"Load More"}
                    onClick={() => setIsLoadingMoreMovies(true)}
                />
            )}
        </>
    );
};
