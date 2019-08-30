import React, { Component } from 'react';

class Photo extends Component {
    render() {
        // console.log(this.props.url); 
        return (
            <li>
                <img src={ this.props.url } alt="" />
            </li>
         );
        //  console.log(this.props.url);
    }
}

//could have also used the following...
//import React from 'react';
//
//function Photo(props){
//     return (
//         <li>
//             <img src={ props.url } alt="" />
//         </li>
//     )
// }
 
export default Photo;