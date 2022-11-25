import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Characters } from './components/Characters.jsx';
import { ThemeContext } from './context/ThemeContext.js';
import './App.css';

function App() {
  const [theme, setTheme] = useState('bg-light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={'App ' + theme}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
