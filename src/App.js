import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './Store';
import { Provider } from 'react-redux'
import SearchToolComponent from './components/searchToolComponent'
import ProductCard from './components/productCard'

// import {BarcodeComponent} from './components/barcode'

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <header className="App-header"> */}
      <div style={{marginLeft: "2rem"}}>
        <header>
          <p>DEMO SCANER</p>
          <SearchToolComponent />
          <ProductCard />
        </header>
      </div>
    </Provider>
  );
}

export default App;
