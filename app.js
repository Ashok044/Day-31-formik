import React, { useState } from 'react';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  return (
    <div className="App">
      <Dashboard books={books} setBooks={setBooks} authors={authors} setAuthors={setAuthors} />
    </div>
  );
};

export default App;
