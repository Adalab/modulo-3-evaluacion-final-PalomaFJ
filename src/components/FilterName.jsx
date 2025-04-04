function FilterName({ onChangeSearch, searchName }) {
    const handleInput = (ev) => {
        onChangeSearch(ev.target.value);
    };

    return (
        <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
            <label className="filter-label" htmlFor="name">Buscar por nombre</label>
            <input
                className="filter-input"
                id="name"
                type="text"
                value={searchName}
                onChange={handleInput}
            />
        </form>
    );
}

export default FilterName;