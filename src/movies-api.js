import axios from "axios";

// const API_KEY = '5c73b03351f76484f1f4dec39d78553d';

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzczYjAzMzUxZjc2NDg0ZjFmNGRlYzM5ZDc4NTUzZCIsInN1YiI6IjY2MzE5MGJlMmEwOWJjMDEyNjU4MDczYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9j43XuNr4BEQmQ7HXlgAZ20tYSqNresKS6c47fMaCNU",
  },
};

// Популярні фільми на головній сторінці
export async function getTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const responce = await axios.get(url, options);

  return responce.data.results;
}

// Пошук фільму за ключовим словом на сторінці фільмів
export async function getSearchMovie(movie) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
  const responce = await axios.get(url, options);

  return responce.data.results;
}

// запит повної інформації про фільм для сторінки кінофільму
export async function getMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const responce = await axios.get(url, options);

  return responce.data;
}

// запит інформації про акторський склад для сторінки кінофільму

export async function getMovieCredits(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const responce = await axios.get(url, options);

  return responce.data.cast;
}

// запит оглядів для сторінки кінофільму

export async function getMovieReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const responce = await axios.get(url, options);

  return responce.data.results;
}
