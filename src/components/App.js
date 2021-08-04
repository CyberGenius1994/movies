import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from '../services/routes';
import 'antd/dist/antd.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
