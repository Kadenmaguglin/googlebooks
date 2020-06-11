import React from 'react';
import logo from './logo.svg';
import './App.css';
import BooksSearch from './components/BooksSearch';

function App() {
  return (
    <div className="App">
      <h1>Google Books Search</h1>
      <BooksSearch></BooksSearch>
    </div>
  );
}

export default App;
