import React from 'react';
import logo from './logo.svg';
import './App.css';

import BarcodeComponent from './components/barcode'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarcodeComponent />
      </header>
    </div>
  );
}

export default App;
