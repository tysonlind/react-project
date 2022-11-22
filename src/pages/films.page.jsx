import React, { useState, useEffect } from 'react';
import '../components/filmsList.css';
import { filterFilmsByDirector } from '../helpers/film.helpers.js';
import { getListOf } from '../helpers/film.helpers.js';

export default function FilmsPage (props){

    const [list, setList] = useState([]);
    const [searchDirector, setSearchDirector] = useState([""]);

async function getFilms (){
    try{
        let res = await fetch('https://ghibliapi.herokuapp.com/films');
        let films = await res.json();
        setList(films);
    } catch (e){
        console.error(e);
    }
}

useEffect(() => {
    getFilms();
}, []);


function onSubmit(event){
    event.preventDefault();
    }
    

   const filmsByDirector = filterFilmsByDirector(list,searchDirector);
   const directors = getListOf(list, "director");


        return (
        <>
            <h1>Studio Ghibli Films</h1><div>
            <form className="form-group" onSubmit={onSubmit}>
                <label htmlFor="searchDirector">Select a director:</label>
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
                <ul>
                    {filmsByDirector.length > 0 ?
                    filmsByDirector.map((ele) => {
                        return (
                        <li key={ele.id}>
                            <h2>{ele.title}</h2> <br />
                            <img src={ele.image} alt="Movie Poster" className="filmsList-img" /> <br /> 
                            <span className='light-text'><i>{ele.description}</i></span> </li>
                        )
                    })
                    :
                    list.map((ele) => {
                        return (
                            <li key={ele.id}>
                                <h2>{ele.title}</h2> <br />
                                <img src={ele.image} alt="Movie Poster" className="filmsList-img" /> <br /> 
                                <span className='light-text'><i>{ele.description}</i></span> </li>
                            )})
                }
                </ul>
            </div>
        </>
        ); 
}