import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import store from './Store';
import { Provider } from 'react-redux'
import Navbar from './components/core/navbar'
import Footer from './components/core/footer'
import Content from './components/core/content'
import { BrowserRouter as Router, } from 'react-router-dom';
import TransactionContent from './components/contents/transaction-content'
import StorageContent from './components/contents/storage-content'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <header style={{ marginBottom: '4rem' }}>
            <Navbar />
          </header>
          <body style={{ margin: '1rem' }}>
            <Content />
          </body>
          <footer>
            <Footer />
          </footer>
        </Router>
      </Provider>
    )
  }
}

export default App;
