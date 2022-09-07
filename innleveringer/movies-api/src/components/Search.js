const Search = ({ search, setSeach, handleInput, handleSearch }) => {
  return (
    <section className="search-section">
      <input onChange={handleInput} type="text" placeholder="Søk på filmer" />
      <button onClick={handleSearch} type="button">
        Søk
      </button>
    </section>
  );
};

export default Search;
