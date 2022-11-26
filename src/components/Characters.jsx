import { useState, useEffect, useReducer } from "react";
import '../styles/characters.css';

const initialState = { // estado inicial que usará el reducer para agregar a favoritos
  favorites: []
}

const favoriteReducer = (state, action) => { // reducer que agregará a favoritos
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      const isExist = state.favorites.find(item => item.id === action.payload.id)
        if (isExist) return { ...state }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case 'REMOVE_FAVORITE':
      return {
          ...state,
          favorites: state.favorites.filter(items => items.id !== action.payload)
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

  const handleClickRemove = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id })
}

  return (
    <div className="container">

        <div className="favorites">
          <h3>Favorites</h3>
          <div className="favorites-list">
            {favorites.favorites.map(favorite => ( // mostrará los favoritos
              <li key={favorite.id}>
                <img src={favorite.image} alt={favorite.name} />
              </li>
            ))}
          </div>
        </div>

      <div className="Characters">

        {characters.map(character => (
          <div className="character-container" key={character.id}>
            <img src={character.image} alt={character.name} />
            <div className="character-text">
              <h3>{character.name}</h3>
              <p className=
                {character.status === 'Alive' ? 'status-alive' : (character.status === 'Dead' ? 'status-dead' : 'status-unknown')
              }>{character.status}</p>
              <p>{character.species} {character.gender}</p>
              <button type="button" onClick={() => handleClick(character)} >Agregar a favoritos</button>
              <button type="button" onClick={() => handleClickRemove(character.id)} >Quitar de favoritos</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export { Characters };