import React, { Component } from 'react';
import PersonList from './PersonList';
import './App.css';

class App extends Component {
  state = { people: [] }
  render() {
    let { people } = this.state;
    return (
      <div className="App">
        <PersonList people={people}/>
      </div>
    );
  }
}

export default App;
