import React from 'react';
/* import logo from './logo.svg';
import './App.css'; */
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Post from './components/pages/Post';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      
      <Link to="/">Home</Link>
      <br/>
      <Link to="/contact">Contact</Link>
      <br/>
      <Link to="/post">Post</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/post">
          <Post />
        </Route>           
      </Switch>

      <Footer/>
      </div>
    </Router>
  );
}

export default App;
