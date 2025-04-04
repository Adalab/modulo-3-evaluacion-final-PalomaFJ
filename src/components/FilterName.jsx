function FilterName({ searchName, onChangeSearch }) {
    const handleInput = (ev) => {
      onChangeSearch(ev.target.value);
    };
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Buscar tu personaje por nombre:</label>
        <input
          type="text"
          id="search"
          value={searchName}
          onChange={handleInput}
        />
      </form>
    );
  }
  
  export default FilterName;