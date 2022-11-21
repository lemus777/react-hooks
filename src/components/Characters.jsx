import { useState, useEffect } from "react";
import '../styles/characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []) // el array vacío hace que solo se ejecute la primera vez

  return (
    <div className="Characters">
      {characters.map(character => (
        <div className="character-container" key={character.id}>
          <img src={character.image} />
          <div className="character-text">
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export { Characters };