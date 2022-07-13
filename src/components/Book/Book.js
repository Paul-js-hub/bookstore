import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const deleteBook = () => dispatch(removeBook(id));
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={deleteBook}>Remove</button>
    </div>
  );
};

export default Book;

Book.defaultProps = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};
