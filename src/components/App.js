import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import FilmsComponent from './FilmsGrid/FilmsComponent/FilmsComponent';
import 'antd/dist/antd.css';
import FilmPageComponent from './Film/FilmPageComponent/FilmPageComponent';

function App() {
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
          <Switch>
            <Route exact path="/">
              <FilmsComponent />
            </Route>
            <Route path="/film/:id">
              <FilmPageComponent />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
