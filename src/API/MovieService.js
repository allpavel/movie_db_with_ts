import axios from "axios";
import {
  POPULAR_MOVIES_BASIC_URL,
  SEARCH_BASIC_URL,
  API_KEY_URL_PART,
  API_URL,
} from "./config";

export default class MovieService {
  static async getPopularMovies(searchTerm, page) {
    const endpoint = searchTerm
      ? `${SEARCH_BASIC_URL}${searchTerm}&page=${page}`
      : `${POPULAR_MOVIES_BASIC_URL}&page=${page}`;
    const movies = await axios.get(endpoint);
    return movies.data;
  }

  static async getMovieById(movieId) {
    const endpoint = `${API_URL}movie/${movieId}${API_KEY_URL_PART}`;
    const response = await axios.get(endpoint);
    return response.data;
  }

  static async getMovieCredits(movieId) {
    const endpoint = `${API_URL}/movie/${movieId}/credits${API_KEY_URL_PART}`;
    const response = await axios.get(endpoint);
    return response.data;
  }
}
