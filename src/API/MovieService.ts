import axios from "axios"
import {
    POPULAR_MOVIES_BASIC_URL,
    SEARCH_BASIC_URL,
    API_KEY_URL_PART,
    API_URL,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
    API_KEY,
} from "./config"

export type Movie = {
    backdrop_path: string
    id: number
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    title: string
    vote_average: number
    vote_count: number
    budget: number
    runtime: number
    revenue: number
}

export type Movies = {
    page: number
    results: Movie[]
    total_pages: number
}

export type Cast = {
    character: string
    credit_id: number
    name: string
    profile_path: string
}

export type Crew = {
    job: string
    name: string
    credit_id: number
}

export type Credits = {
    id: number
    cast: Cast[]
    crew: Crew[]
}

export type Token = {
    request_token: string
}

export type RateResponse = {
    status_code: number
    status_message: string
}

export default class MovieService {
    static async getPopularMovies(searchTerm: string, page: number): Promise<Movies> {
        const endpoint: string = searchTerm
            ? `${SEARCH_BASIC_URL}${searchTerm}&page=${page}`
            : `${POPULAR_MOVIES_BASIC_URL}&page=${page}`
        const movies = await axios.get(endpoint)
        return movies.data
    }

    static async getMovieById(movieId: number): Promise<Movie> {
        const endpoint: string = `${API_URL}movie/${movieId}${API_KEY_URL_PART}`
        const response = await axios.get(endpoint)
        return response.data
    }

    static async getMovieCredits(movieId: number): Promise<Credits> {
        const endpoint: string = `${API_URL}/movie/${movieId}/credits${API_KEY_URL_PART}`
        const response = await axios.get(endpoint)
        return response.data
    }

    static async getRequestToken(): Promise<Token> {
        const reqToken = await axios.get(REQUEST_TOKEN_URL)
        return reqToken.data
    }

    static async authenticate(request_token: string, username: string, password: string) {
        const bodyData = { username, password, request_token }
        const response = await axios.post(LOGIN_URL, bodyData)
        if (response.data.success) {
            const sessionId = await axios.post(SESSION_ID_URL, { request_token: request_token })
            return sessionId.data
        }
    }

    static async rateMovie(sessionID: number, movieId: number, value: string): Promise<RateResponse> {
        const endpoint: string = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionID}`
        const rating = await axios.post(endpoint, { value: Number(value) })
        return rating.data
    }
}
