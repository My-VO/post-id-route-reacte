import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Nav/>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
