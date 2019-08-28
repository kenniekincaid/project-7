import React, { Component } from 'react';

class Navigation extends Component {
    // state = {  }
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><a href='#'>Art</a></li>
                    <li><a href='#'>Music</a></li>
                    <li><a href='#'>Technology</a></li>
                    {/* <li><a href='#'>Food</a></li> */}
                </ul>
            </nav>
         );
    }
}
 
export default Navigation;