import { useParams } from "react-router-dom";

function CharacterDetail({ characters }) {
    //uso el useParams pra recoger el id de la url 
    const { id } = useParams();

    // busco el persnaje que tenga ese id
    // convierto su id a numero xq viene como un string y me devuelve false 
    const character = characters.find(
        (char) => String(char.id) === id //asi los dosson texto y el find puede funcionar bien a la hora de comparar
    );

    // Si no se encuentra el personaje muestro un mensaje
    if (!character) {
        return <p>Personaje no encontrado</p>;
    }

    // Si si se encuenra el personaje lo muestro
    return (
        <section className="character-detail">
            <h2 className="detail-name">{character.name}</h2>
            <img className="detail-img" src={character.image} alt={character.name} />
            <p className="detail-info">Especie: {character.species}</p>
            <p className="detail-info">
                Estado:{" "}
                {character.status === "Alive"
                    ? "🟢 Vivo"
                    : character.status === "Dead"
                        ? "🔴 Muerto"
                        : "⚪ Desconocido"}
            </p>
            <p className="detail-info">Origen: {character.origin.name}</p>
        </section>
    );
}

export default CharacterDetail;
