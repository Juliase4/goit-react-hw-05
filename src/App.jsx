import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MoviesDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/movies"
          element={<MoviesPage />}
        />
        <Route
          path="/movies/:movieId"
          element={<MoviesDetailsPage />}>
          <Route
            path="/movies/:movieId/cast"
            element={<MovieCast />}
          />
          <Route
            path="/movies/:movieId/reviews"
            element={<MovieReviews />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </Layout>
  );
}
