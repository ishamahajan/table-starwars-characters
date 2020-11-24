
import {resultsIsLoading, resultsHasErrored, resultsFetchDataSuccess, fetchFilmLoading, filmsHasErrored, resultsFetchFilmsSuccess} from './action';

export function resultsFetchData(url) {
    return (dispatch) => {
        dispatch(resultsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(resultsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(resultsFetchDataSuccess(items)))
            .catch(() => dispatch(resultsHasErrored(true)));
    };
} 

export function resultsFetchFilms(urls) {
    console.log("get films array = ", urls);
    return (dispatch) => {  
        dispatch(resultsFetchFilmsSuccess([]));
        dispatch(fetchFilmLoading(true));
        const promises = urls.map( 
            url => { return fetch(url)
             .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(fetchFilmLoading(false));
                return response;
            })
            .then((response) => response.json()).then((response) => {return response.title})
            .catch(() => dispatch(filmsHasErrored(true)))});
        Promise.all(promises).then(results => dispatch(resultsFetchFilmsSuccess(results)));
    };
} 

