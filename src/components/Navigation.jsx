import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

class Navigation extends Component {
    // state = {  }
    render() {
        return (
            <Router>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/search/art">Art</NavLink></li>
                    <li><NavLink to="/search/nature">Nature</NavLink></li>
                    <li><NavLink to="/search/universe">Universe</NavLink></li>
                    {/* <li><a href='https://www.flickr.com/search/?text=technology' target='_self'>Technology</a></li>
                    <li><a href='https://www.flickr.com/search/?text=food' target='_self'>Food</a></li>
                    <li><a href='https://www.flickr.com/search/?text=culture' target='_self'>Culture</a></li>
                    <li><a href='https://www.flickr.com/search/?text=liberty' target='_self'>Liberty</a></li> */}
                </ul>
            </nav>
            </Router>
        );
    }
}

export default Navigation;