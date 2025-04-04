import { Link } from "react-router-dom";

function CharacterCard({ character }) {
    return (

        <Link to={`/character/${character.id}`}>
            <article className="character-card">
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p>{character.species}</p>
            </article>
        </Link>
    );
}

export default CharacterCard;
