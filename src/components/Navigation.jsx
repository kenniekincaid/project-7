import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/search/Art">Art</NavLink></li>
                    {/* <li><NavLink to="/search/Nature">Nature</NavLink></li> */}
                    <li><NavLink to="/search/Universe">Universe</NavLink></li>
                    <li><NavLink to="/search/Technology">Technology</NavLink></li>
                    {/* <li><NavLink to="/search/Food">Food</NavLink></li> */}
                    {/* <li><NavLink to="/search/Culture">Culture</NavLink></li>
                    <li><NavLink to="/search/Liberty">Liberty</NavLink></li> */}
                </ul>
            </nav>
        );
    }
}
