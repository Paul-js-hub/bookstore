import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: 'Movies',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { title, author, category } = state;
    if (title.length > 0 && author.length > 0) {
      dispatch(
        addBook({
          title,
          author,
          item_id: uuidv4(),
          category,
        }),
      );
    }
    state.title = '';
    state.author = '';
  };
  return (
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form className="">
        <input
          type="text"
          className="form-control input-title"
          id="title"
          placeholder="Book title"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control input-author"
          id="author"
          placeholder="author"
          name="author"
          value={state.author}
          onChange={handleChange}
        />
        <button type="button" className="btn btn-primary submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </div>

  );
};

export default AddBook;
