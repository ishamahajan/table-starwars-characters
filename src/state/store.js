import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducer";


const initialState = {
    results: [],
    isLoading: true,
    hasErrored: false,
    prev: '',
    next: '',
    films: [],
    fetchFilmErrored: false,
    fetchFilmLoading: true
  };
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;