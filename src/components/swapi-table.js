import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { resultsFetchData, resultsFetchFilms } from '../state/fetch-data';

import './swapi-table.css'

const mapStateToProps = state => {
    return { results: state.results,
            prev: state.prev,
            next: state.next,
            hasErrored: state.hasErrored,
            isLoading: state.isLoading,
            films: state.films,
            fetchFilmErrored: state.fetchFilmErrored,
            fetchFilmLoading: state.fetchFilmLoading
        };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(resultsFetchData(url)),
        fetchFilms: (urls) => dispatch(resultsFetchFilms(urls))
    }
};
  
function SwapiTable(props){
const[curPage, setPageNum] = useState(1);
const[showDetail, setShowDetail] = useState(null);

useEffect(()=>{
    props.fetchData(`https://swapi.dev/api/people/?page=${curPage}`);
},[curPage]);

if (props.hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
}
if (props.isLoading) {
    return <p>Loading…</p>;
}

if(props.results.length < 1){
    return <p>No data to display...</p>
}
return (
    <>
    <div className="table-container">
    <span style={{float:'left'}}>Table with list of people</span>
    <table className="results-table">
        <tbody>
            <tr>
                <th className="table-row">Name</th>
                <th className="table-row">Height</th>
                <th className="table-row">Mass</th>
            </tr>
            {props.results.map((item) => (
            <tr key={item.name} onClick={() => {console.log("clicked on = ", item.name); setShowDetail(item); props.fetchFilms(item.films); }}>
                <td className="table-row">{item.name}</td>
                <td className="table-row">{item.height}</td>
                <td className="table-row">{item.mass}</td>
            </tr>
            ))}
        </tbody>
        
    </table>
    <span className="button-container">
        <span>Pagination:</span>
        {props.prev && <button className="next-prev-button" onClick={()=>{setPageNum(curPage => --curPage); setShowDetail(false)}}>{"<"}Back</button>}
        {props.next && <button className="next-prev-button" onClick={()=>{setPageNum(curPage => ++curPage);  setShowDetail(false)}}>Next{">"}</button>}
    </span>
    </div>
    {showDetail && 
    <span className="details-container">
        <span style={{display:'block', fontWeight:'bold'}}>Detail Section</span>
        <span style={{display:'block'}}>Name: {showDetail.name}</span>
        <span style={{display:'block'}}>Birth year: {showDetail.birth_year}</span>
        <span style={{display:'block'}}>Gender: {showDetail.gender}</span>
        <span style={{display:'block', marginTop:'10px'}}>List of films: 
            {props.fetchFilmLoading && <p>Loading films...</p>}
            {props.fetchFilmErrored && <p></p>}
            {props.films && <ul style={{marginTop: '5px', marginLeft:'-20px'}}>{props.films.map((film)=><li>{film}</li>)}</ul>}
        </span>
    </span>
    }    
    </>
);
}

export default connect(mapStateToProps, mapDispatchToProps)(SwapiTable);
