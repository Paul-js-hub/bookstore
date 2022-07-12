const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';

const initialState = {
  books: [],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state };
    case REMOVE_BOOK:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});
