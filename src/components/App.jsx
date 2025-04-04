import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import FilterName from "./FilterName";
import "../scss/App.scss";
import { Routes, Route } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";


function App() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);
  //aqui hago la funcion para el lifting del input
  const handleSearchName = (value) => {
    setSearchName(value);
  };
  // aqui hago el filtro del nombre
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchName.toLowerCase())
  );
  return (
    <main>
      <h1>Rick and Morty</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterName searchName={searchName} onChangeSearch={handleSearchName} />
              {filteredCharacters.length === 0 ? (
                <p>No hay ningún personaje que coincida con la palabra "{searchName}"</p>
              ) : (
                <CharacterList characters={filteredCharacters} />
              )}
            </>
          }
        />
        <Route path="/character/:id" element={<CharacterDetail characters={characters} />} />
      </Routes>
    </main>


  );
}

export default App;