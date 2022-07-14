import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Book/Book';
import AddBook from '../AddBook.js/AddBook';
import { fetchBooks } from '../../redux/books/books';

const Books = () => {
  const booksData = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks);
  }, []);
  return (
    <div>
      {booksData.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
