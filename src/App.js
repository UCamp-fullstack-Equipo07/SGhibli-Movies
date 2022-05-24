import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Movies from './components/Movies/Movies'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='/:moviesId' element={<Detail />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
