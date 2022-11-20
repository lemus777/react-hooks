import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type='button' onClick={handleClick}>{darkMode ? 'Dark mode' : 'Light mode'}</button>
      <button type='button' onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark mode 2' : 'Light mode 2'}</button>
    </div>
  );
}

export { Header };