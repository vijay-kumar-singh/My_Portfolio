import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import StockDetails from './StockDetails';
import BasicCard from './components/BasicCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BasicCard />
        <StockDetails />
      </header>
    </div>
  );
}

export default App;
