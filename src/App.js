// App.js
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/footer';
import './App.css';
import Home from './Components/home';

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
