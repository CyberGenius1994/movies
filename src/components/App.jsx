import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FilmsComponent from './FilmsComponent/FilmsComponent';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <a
              className="App-link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Movies
            </a>
          </header>
          <main>
            <FilmsComponent/>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;