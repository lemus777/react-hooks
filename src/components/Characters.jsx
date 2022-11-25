import { useState, useEffect, useReducer } from "react";
import '../styles/characters.css';

const initialState = { // estado inicial que usará el reducer para agregar a favoritos
  favorites: []
}

const favoriteReducer = (state, action) => { // reducer que agregará a favoritos
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []) // el array vacío hace que solo se ejecute la primera vez

  const handleClick = favorite => { // lógica para agregar a favoritos
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  return (
    <div className="container">

        <div className="favorites">
          <h3>Favorites: </h3>
          {favorites.favorites.map(favorite => ( // mostrará los favoritos
            <li key={favorite.id}>
              <img src={favorite.image} alt={favorite.name} />
            </li>
          ))}
        </div>

      <div className="Characters">

        {characters.map(character => (
          <div className="character-container" key={character.id}>
            <img src={character.image} alt={character.name} />
            <div className="character-text">
              <p>{character.name}</p>
              <p>{character.status}</p>
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <button type="button" onClick={() => handleClick(character)} >Agregar a favoritos</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export { Characters };