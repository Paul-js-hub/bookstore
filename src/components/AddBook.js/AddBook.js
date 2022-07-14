import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [state, setState] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: 'Movies',
  });
  console.log('STATE', state);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const {
      title, author, item_id, category,
    } = state;
    dispatch(addBook({
      title, author, item_id, category,
    }))
      .then((data) => {
        console.log('DATA>>>', data);
      });
    state.title = '';
    state.author = '';
  };
  return (
    <div>
      <form>
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
