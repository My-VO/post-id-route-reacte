import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Post from './pages/Post';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Nav() {
    return(
        <Router>
            <div className="Nav">
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
            </div>
        </Router>
    );
}

export default Nav;

