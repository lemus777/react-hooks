import { useState, useEffect } from "react";

const useCharacters = url => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, [url]) // se volverá a ejecutar con los cambios de url
  return characters;
};

export { useCharacters };