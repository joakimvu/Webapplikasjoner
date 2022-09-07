const Movie = ({ poster, alt, title, year }) => {
  return (
    <li>
      <img src={poster} alt={alt} />
      <h2>
        Title: <span>{title}</span>
      </h2>
      <p>
        Year: <span>{year}</span>
      </p>
    </li>
  );
};

export default Movie;
