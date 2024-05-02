import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ data }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {data.map((el) => (
        <li key={el.id}>
          <Link
            to={`/movies/${el.id}`}
            state={location}>
            <div>{el.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
