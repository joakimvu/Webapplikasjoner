import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <ul>
      {movies && movies.length > 0 ? (
        movies?.map((movie) => (
          <Movie
            key={movie.imdbID}
            poster={movie.Poster}
            alt={movie.Title}
            title={movie.Title}
            year={movie.Year}
          />
        ))
      ) : (
        <p>No movies with this search</p>
      )}
    </ul>
  );
};

export default Movies;
