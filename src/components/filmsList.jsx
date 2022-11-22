import React, { Component } from 'react';
import './filmsList.css';

export default class FilmsList extends Component  {

constructor (props){
    super(props);

    this.state = {
        list: []
    }

    this.getFilms = this.getFilms.bind(this);
}



getFilms = async function(){
    try{
        let res = await fetch('https://ghibliapi.herokuapp.com/films');
        let resJson = await res.json();
        this.setState(this.state.list = resJson);
    } catch (e){
        console.error(e);
    }
}

componentDidMount(){
    this.getFilms();
}

    render(){
        return (
        <ul>
            {this.state.list.map((ele) => {
               return <li key={ele.id}><h2>{ele.title}</h2> <br /> <img src={ele.image} alt="Movie Poster" className="filmsList-img" /> <br /> <span className='light-text'><i>{ele.description}</i></span> </li>  
            })};
            
        </ul>
        );
    };
   
}