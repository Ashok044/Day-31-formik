import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import AuthorList from './AuthorList';
import AuthorForm from './AuthorForm';

const Dashboard = ({ books, setBooks, authors, setAuthors }) => {
  return (
    <div className="dashboard">
      <h1>Library Management System</h1>
      <div className="section">
        <h2>Books</h2>
        <BookForm books={books} setBooks={setBooks} />
        <BookList books={books} setBooks={setBooks} />
      </div>
      <div className="section">
        <h2>Authors</h2>
        <AuthorForm authors={authors} setAuthors={setAuthors} />
        <AuthorList authors={authors} setAuthors={setAuthors} />
      </div>
    </div>
  );
};

export default Dashboard;
