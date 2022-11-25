import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === 'bg-light' ? setTheme('bg-dark') : setTheme('bg-light');
  }

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type='button' onClick={handleClick} className='buttonToggle'>{darkMode ? 'Light mode' : 'Dark mode'}</button>
      {/*<button type='button' onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark mode 2' : 'Light mode 2'}</button>*/}
    </div>
  );
}

export { Header };