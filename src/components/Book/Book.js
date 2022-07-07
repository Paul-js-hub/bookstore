import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <h3>{title}</h3>
    <p>{author}</p>
  </div>
);

export default Book;

Book.defaultProps = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
