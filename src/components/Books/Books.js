import React, { useState } from 'react';
import Book from '../Book/Book';
import AddBook from '../AddBook.js/AddBook';

const Books = () => {
  // eslint-disable-next-line
  const [books, setBooks] = useState([{ title: 'React Testing', author: 'Harry Winks' }, { title: 'JavaScript made simple', author: 'Paul Onchera' }]);
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.title}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
