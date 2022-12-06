import React, { useState, useEffect } from 'react';
import '../components/filmsList.css';
import { filterFilmsByDirector, getListOf, getFilmStats } from '../helpers/film.helpers.js';
import { Link } from 'react-router-dom';

export default function FilmsPage (props){

    const [list, setList] = useState([]);
    const [searchDirector, setSearchDirector] = useState([""]);

async function getFilms (){
    try{
        let res = await fetch('https://studioghibliapi-d6fc8.web.app/films/');
        let films = await res.json();
        setList(films);
    } catch (e){
        console.error(e);
    }
}


//pseudo componentDidMount because of the empty dependency array
useEffect(() => {
    getFilms();
}, []);


function onSubmit(event){
    event.preventDefault();
    }
    
    //Derived states
   const filmsByDirector = filterFilmsByDirector(list,searchDirector);
   const directors = getListOf(list, "director");
   const {avg_score, total, latest} = getFilmStats(list);


        return (
        <>
            <span className="center"><h1>Studio Ghibli Films by Director</h1></span><div>
            <form className="form-group" onSubmit={onSubmit}>
                <label htmlFor="searchDirector">Select a director: </label>
                 <select
                    name="searchDirector"
                    id="searchDirector"
                    value={searchDirector}
                    onChange={(event) => {
                    setSearchDirector(event.target.value);
                    }}>
                    <option value="">All</option>
                    {directors.map((ele, idx) => {
                        return (<option key={ele + idx} value={ele}>{ele}</option>)
                    })}
                    </select>
      </form>
      <div>
  <div>
    <span># Of Films: </span>
    <span>{total}</span>
  </div>
  <div>
    <span>Average Rating: </span>
    <span>{avg_score.toFixed(2)}</span>
  </div>
  <div>
    <span>Latest Film: </span>
    <span>{latest}</span>
  </div>
</div>
                <ul>
                    {filmsByDirector.length > 0 ?
                    filmsByDirector.map((ele) => {
                        return (
                        <li key={ele.id}>
                            <h2><Link to={`film/${ele.id}`}>{ele.title}</Link></h2> <br />
                            <img src={ele.image} alt="Movie Poster" className="filmsList-img" /> <br /> 
                            <span className='light-text'><i>{ele.description}</i></span> </li>
                        )
                    })
                    :
                    list.map((ele) => {
                        return (
                            <li key={ele.id}>
                                <h2><Link to={`film/${ele.id}`}>{ele.title}</Link></h2> <br />
                                <img src={ele.image} alt="Movie Poster" className="filmsList-img" /> <br /> 
                                <span className='light-text'><i>{ele.description}</i></span> </li>
                            )})
                }
                </ul>
            </div>
        </>
        ); 
}