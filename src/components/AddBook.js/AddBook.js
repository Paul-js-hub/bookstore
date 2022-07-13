import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addBook(state.title, state.author));
    state.title = '';
    state.author = '';
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={state.title}
          type="text"
          placeholder="Addbook tile"
          onChange={handleChange}
        />
        <input
          name="author"
          value={state.author}
          type="text"
          placeholder="Author"
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
