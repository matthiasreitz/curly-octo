import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link rel="App" type="text/css" href ="App.css" />
          <h2> _This is a <sub>level 2</sub> header_</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span id="span1">
            <div title="div1" id="div1">
              <p>where does this end up?</p>
            </div>
            <div 
            title="div2" 
            id="div2"
            style="color:blue">
              <p >and what does this do?</p>
            </div>
          </span>
        </header>
      </div>
    );
  }
}

export default App;
