import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <section>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CharacterList;
