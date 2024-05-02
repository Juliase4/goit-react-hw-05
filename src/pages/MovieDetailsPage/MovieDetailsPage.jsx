import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { Suspense, useState, useEffect, useRef } from "react";
import { getMovieDetails } from "../../movies-api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div>
      <Link
        to={backLinkURLRef.current}
        className={css.backLink}>
        Go back
      </Link>
      {loading && <b>Loading information about movie</b>}
      {error && <b>Sorry, we have some troubles</b>}
      {movie && (
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="movie poster"
          />
          <div>
            <h2>{movie.original_title}</h2>
            <p>User score: {movie.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>

            <h2>Genres</h2>
            <ul>
              {movie.genres.map((el) => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<b>Loading nested route...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
