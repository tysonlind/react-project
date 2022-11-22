import React, { useState } from "react";
import '../App.css';

export default function HomePage (props){

  const [list, setList] = useState([""]);
  const [text,setText] = useState([""]);

function onSubmit(event){
event.preventDefault();
setList([...list, text]);
}

  return (
    <div className="App">
      <h1>Get to know <span className="subtle">Ghibli Studios</span></h1>
      <h3>Enter your favorites below to make a list:</h3>
      <form onSubmit={onSubmit}>
      <input
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }} />
            <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((ele, index) => 
          <li key={index}>{ele}</li>
        )}
      </ul>
          
    </div>
  );
};