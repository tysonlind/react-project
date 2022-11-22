import React, { Component } from "react";
import './App.css';

import { eventWrapper } from '@testing-library/user-event/dist/utils';

class App extends Component {
  
  constructor(props){

    super(props);

    this.state = {
      list: [],
      text: ""
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

onSubmit(event){
event.preventDefault();
this.setState({list: [...this.state.list, this.state.text]})
}

  render(){
  return (
    <div className="App">
      <h1>Get to know <span className="subtle">Ghibli Studios</span></h1>
      <h3>Enter your favorites below to make a list:</h3>
      <form onSubmit={this.onSubmit}>
      <input
            type="text"
            value={this.state.text}
            onChange={(event) =>
              this.setState({ text: event.target.value })
            } />
            <button type="submit">Add</button>
      </form>
      <ul>
        {this.state.list.map((ele, index) => 
          <li key={index}>{ele}</li>
        )}
      </ul>
          
    </div>
  );
}
}

export default App;
