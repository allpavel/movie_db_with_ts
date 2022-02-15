import { useState, useEffect } from "react";
import MovieService, { Movie, Cast, Crew } from "../API/MovieService";
import { getItemFromStorage } from "../utils/utils";

export type MovieState = Movie & { actors: Cast[]; directors: Crew[] };

export const useGetMovie = (id: number) => {
    const [movie, setMovie] = useState<MovieState>({} as MovieState);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState<boolean>(false);

    const getMovies = async (id: number) => {
        try {
            const movie = await MovieService.getMovieById(id);
            const credits = await MovieService.getMovieCredits(id);
            const directors = credits.crew.filter(
                (member) => member.job.toLowerCase() === "director"
            );
            setMovie({
                ...movie,
                actors: credits.cast,
                directors,
            });
        } catch (error: any) {
            setLoadError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const sessionState = getItemFromStorage(id.toString());
        if (sessionState) {
            setMovie(sessionState);
            setIsLoading(false);
            return;
        }
        getMovies(id);
    }, [id]);

    useEffect(() => {
        sessionStorage.setItem(id.toString(), JSON.stringify(movie));
    }, [id, movie]);

    return { movie, isLoading, loadError };
};
