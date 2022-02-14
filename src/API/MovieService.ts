import axios from "axios";
import {
    POPULAR_MOVIES_BASIC_URL,
    SEARCH_BASIC_URL,
    API_KEY_URL_PART,
    API_URL,
} from "./config";

export type Movie = {
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    title: string;
    vote_average: number;
    vote_count: number;
    budget: number;
    runtime: number;
    revenue: number;
};

export type Movies = {
    page: number;
    results: Movie[];
    total_pages: number;
};

export type Cast = {
    character: string;
    credit_id: number;
    name: string;
    profile_path: string;
};

export type Crew = {
    job: string;
    name: string;
    credit_id: number;
};

export type Credits = {
    id: number;
    cast: Cast[];
    crew: Crew[];
};

export default class MovieService {
    static async getPopularMovies(
        searchTerm: string,
        page: number
    ): Promise<Movies> {
        const endpoint: string = searchTerm
            ? `${SEARCH_BASIC_URL}${searchTerm}&page=${page}`
            : `${POPULAR_MOVIES_BASIC_URL}&page=${page}`;
        const movies = await axios.get(endpoint);
        return movies.data;
    }

    static async getMovieById(movieId: number): Promise<Movie> {
        const endpoint: string = `${API_URL}movie/${movieId}${API_KEY_URL_PART}`;
        const response = await axios.get(endpoint);
        return response.data;
    }

    static async getMovieCredits(movieId: number): Promise<Credits> {
        const endpoint: string = `${API_URL}/movie/${movieId}/credits${API_KEY_URL_PART}`;
        const response = await axios.get(endpoint);
        return response.data;
    }
}
