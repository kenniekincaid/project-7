import React, { Component } from 'react';

class Photo extends Component {
    render() {
        console.log(this.props.url); 
        return (
            <li>
                <img src={ this.props.url } alt="" />
            </li>
         );
    }
}
 
export default Photo;