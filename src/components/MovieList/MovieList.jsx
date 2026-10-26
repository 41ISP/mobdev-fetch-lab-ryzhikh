import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((item) => (
        <li key={item.imdbID}>
          <MovieCard movie={item} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;