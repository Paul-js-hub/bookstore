import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import AddBook from '../AddBook.js/AddBook';

const Books = () => {
  const booksData = useSelector((state) => state.books);
  return (
    <div>
      {booksData.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
