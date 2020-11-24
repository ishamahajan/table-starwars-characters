const initialState = {
    results: [],
    isLoading: false,
    hasErrored: false,
    prev: '',
    next:'',
    films: [],
    fetchFilmErrored: false,
    fetchFilmLoading: true
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return {...state, hasErrored: action.hasErrored};
        case 'ITEMS_IS_LOADING':
            return  {...state, isLoading: action.isLoading};
        case 'ITEMS_FETCH_DATA_SUCCESS':
                return {...state, results: action.results, next: action.next, prev: action.prev}
        case 'FILMS_HAS_ERRORED':
            return {...state, fetchFilmErrored: action.fetchFilmErrored};
        case 'FILMS_IS_LOADING':
                return  {...state, fetchFilmLoading: action.fetchFilmLoading};
        case 'FILMS_FETCH_DATA_SUCCESS':
                    return  {...state, films: action.films};
        default:
            return state;
    }   
  }
  
  export default rootReducer;