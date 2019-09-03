import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    state = ''
    render() {
        return (
            <React.Fragment> {/**use this in place of divs to prevent multiple divs inside of each other */}
                <nav className="main-nav">
                    <ul>
                        <li><NavLink active="active" to="/search/art">Art</NavLink></li>
                        <li><NavLink active="active" to="/search/nature">Nature</NavLink></li>
                        <li><NavLink active="active" to="/search/universe">Universe</NavLink></li>
                        <li><NavLink active="active" to="/search/technology">Technology</NavLink></li>
                        <li><NavLink active="active" to="/search/food">Food</NavLink></li>
                        <li><NavLink active="active" to="/search/culture">Culture</NavLink></li>
                        <li><NavLink active="active" to="/search/liberty">Liberty</NavLink></li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}