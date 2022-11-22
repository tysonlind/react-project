import React, { useState, useEffect } from 'react';
import './filmsList.css';

function FilmsList (props){

    const [list, setList] = useState([]);

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

    
        return (
        <ul>
            {list.map((ele) => {
               return <li key={ele.id}><h2>{ele.title}</h2> <br /> <img src={ele.image} alt="Movie Poster" className="filmsList-img" /> <br /> <span className='light-text'><i>{ele.description}</i></span> </li>  
            })};
            
        </ul>
        ); 
}
export default FilmsList;