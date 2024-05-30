// App.js
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/footer';
import './App.css';
import Home from './Components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoRow from './Components/Cards/videoRow';

function App() {

  return (
    <div className="app">
      <Header/>
      <Home/>
      <h2 className='titulo'>Popular en Netflix</h2>
      <VideoRow className="card" jsonFilePath="https://rickandmortyapi.com/api/character" />
      <h2 className='titulo'>My list</h2>
      <VideoRow className="card" jsonFilePath="https://rickandmortyapi.com/api/character" />
      <Footer/>
    </div>
  );
}

export default App;
