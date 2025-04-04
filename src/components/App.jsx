import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import "../scss/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <main>
      <h1>Rick and Morty</h1>
      <CharacterList characters={characters} />
    </main>
  );
}

export default App;