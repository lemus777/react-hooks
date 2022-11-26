import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import '../styles/Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === 'bg-light' ? setTheme('bg-dark') : setTheme('bg-light');
  }

  return (
    <div className="Header">
      <div className="title">
        <h1>React Hooks</h1>
      </div>
      <div className="themeButton">
        <button type='button' onClick={handleClick} className='buttonToggle'>{darkMode ? 'Light mode' : 'Dark mode'}</button>
      </div>
    </div>
  );
}

export { Header };