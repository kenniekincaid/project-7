import React, { Component } from 'react';

class Navigation extends Component {
    // state = {  }
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><a href='https://www.flickr.com/search/?text=art' target='_self'>Art</a></li>
                    <li><a href='https://www.flickr.com/search/?text=nature' target='_self'>Nature</a></li>
                    <li><a href='https://www.flickr.com/search/?text=universe' target='_self'>Universe</a></li>
                    {/* <li><a href='https://www.flickr.com/search/?text=technology' target='_self'>Technology</a></li>
                    <li><a href='https://www.flickr.com/search/?text=food' target='_self'>Food</a></li>
                    <li><a href='https://www.flickr.com/search/?text=culture' target='_self'>Culture</a></li>
                    <li><a href='https://www.flickr.com/search/?text=liberty' target='_self'>Liberty</a></li> */}
                </ul>
            </nav>
        );
    }
}

export default Navigation;