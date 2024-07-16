import React from 'react';

const BookList = ({ books, setBooks }) => {
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div>
      {books.map(book => (
        <div key={book.id} className="book-card">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Publication Date: {book.publicationDate}</p>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
