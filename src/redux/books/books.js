// import { v4 as uuidv4 } from 'uuid';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_BOOKS = 'bookstore/books/fetchBooks';
const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const BASEURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ezRrPDXt6LZKLi0HXhfb/books';

const initialState = {
  books: [],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const newBooks = [
        ...state.books, action.payload,
      ];
      return { ...state.books, books: newBooks };
    }
    case FETCH_BOOKS:
      return action.payload;
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export const addBook = ({title, author, item_id, category}) => async (dispatch) => {
  try {
    const result = await axios.post(BASEURL, { title, author, item_id, category});
    dispatch({
      type: ADD_BOOK,
      payload: result.data,
    });
    return Promise.resolve(result.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios.get(BASEURL);
    dispatch({
      type: FETCH_BOOKS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
