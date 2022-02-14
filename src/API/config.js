export const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

export const POPULAR_MOVIES_BASIC_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
export const SEARCH_BASIC_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const API_KEY_URL_PART = `?api_key=${API_KEY}&language=en-US`;
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = 'w780';
