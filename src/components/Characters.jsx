import { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []) // el array vacío hace que solo se ejecute la primera vez

  return (
    <div className="Characters">
      {characters.map(character => (<h2>{character.name}</h2>))}
    </div>
  );
}

export { Characters };