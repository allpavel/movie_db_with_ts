export const API_URL: string = "https://api.themoviedb.org/3/";
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

export const POPULAR_MOVIES_BASIC_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
export const SEARCH_BASIC_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const API_KEY_URL_PART: string = `?api_key=${API_KEY}&language=en-US`;
export const IMAGE_BASE_URL: string = "https://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = "w1280";
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = "w780";
