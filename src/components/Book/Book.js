import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const deleteBook = () => dispatch(removeBook(id));
  const percentage = 66;
  return (
    <div className="book-container">
      <div className="left-content">
        <h5>Category</h5>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="buttons-container">
          <button type="button" className="action-btn">Comments</button>
          <hr className="line" />
          <button type="button" className="action-btn" onClick={deleteBook}>Remove</button>
          <hr className="line" />
          <button type="button" className="action-btn">Edit</button>
        </div>
      </div>
      <div className="center-content">
        <CircularProgressbar value={percentage} style={{ width: 50, height: 50 }} />
        <div className="completed-container">
          <p>{`${percentage}%`}</p>
          <h4>Completed</h4>
        </div>
      </div>
      <div className="right-content">
        <h5>CURRENT CHAPTER</h5>
        <p>CHAPTER 17</p>
        <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
      </div>
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
