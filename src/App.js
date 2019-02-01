import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2> _This is a <sub>level 2</sub> header_</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span title="div1">
            <p> where does this end up?</p>
            <span title="div2">
              <p>
                and what does this do?
              </p>
            </span>
          </span>

        </header>
      </div>
    );
  }
}

export default App;
