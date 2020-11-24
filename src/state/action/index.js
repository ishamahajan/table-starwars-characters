export function resultsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function resultsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function resultsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        results: [...items.results],
        next: items.next, 
        prev: items.previous
    };
}

export function filmsHasErrored(bool) {
    return {
        type: 'FILMS_HAS_ERRORED',
        fetchFilmErrored: bool
    };
}
export function fetchFilmLoading(bool) {
    return {
        type: 'FILMS_IS_LOADING',
        fetchFilmLoading: bool
    };
}
export function resultsFetchFilmsSuccess(items, index) {
    return {
        type: 'FILMS_FETCH_DATA_SUCCESS',
        films: items
    };
}

  