import React from 'react';
import logo from './logo.svg';
import './App.css';
import BooksSearch from './components/BooksSearch';
import SavedBooks from './components/SavedBooks';

function App() {
  return (
    <div className="App">
      <h1>Google Books Search</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
      <BooksSearch></BooksSearch>
          </div>
          <div className="col-md-8">
      <SavedBooks></SavedBooks>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
