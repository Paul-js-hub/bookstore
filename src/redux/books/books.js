import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';

const initialState = {
  books: [
    { id: uuidv4(), title: 'React Testing', author: 'Harry Winks' },
    { id: uuidv4(), title: 'JavaScript made simple', author: 'Paul Onchera' },
  ],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const newBooks = [
        ...state.books, action.payload,
      ];
      return { ...state.books, books: newBooks };
    }
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    default:
      return state;
  }
}

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    id: uuidv4(),
  },
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});
