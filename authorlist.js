import React from 'react';

const AuthorList = ({ authors, setAuthors }) => {
  const deleteAuthor = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  return (
    <div>
      {authors.map(author => (
        <div key={author.id} className="author-card">
          <h3>{author.name}</h3>
          <p>Birth Date: {author.birthDate}</p>
          <p>Biography: {author.biography}</p>
          <button onClick={() => deleteAuthor(author.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;
