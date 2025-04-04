import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import FilterName from "./FilterName";
import "../scss/App.scss";

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

      <FilterName searchName={searchName} onChangeSearch={handleSearchName} />
      <CharacterList characters={filteredCharacters} />
    </main>
  );
}

export default App;