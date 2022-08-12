import logo from './logo.svg';
import './App.css';
import Blog from './Blog'

import { useState, useEffect } from 'react';

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(
    getSessionStorageOrDefault(key, defaultValue)
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {

  const [darkMode, setDarkModeOn] = useSessionStorage('darkmode', false);

  return (
    <div className="App" className={darkMode ? 'App-Dark' : 'App-Light'}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      { darkMode ?  ( <button onClick={() => {
            setDarkModeOn(false);
          }}>
            Light
        </button> ) : ( <button onClick={() => {
            setDarkModeOn(true);
          }}>
            Dark
        </button> ) }

        <Blog />
    </div>
  );
}

export default App;
