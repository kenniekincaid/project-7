import React, { Component } from 'react';

class Navigation extends Component {
    // state = {  }
    render() {
        return (
            <ul>
                <li><a href='#'>Art</a></li>
                <li><a href='#'>Music</a></li>
                <li><a href='#'>Technology</a></li>
                {/* <li><a href='#'>Food</a></li> */}
            </ul>
         );
    }
}
 
export default Navigation;