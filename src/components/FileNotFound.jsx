import React, { Component } from 'react';

class FileNotFound extends Component {
    state = {  }
    render() { 
        return ( 
        <li className="not-found">
            <h3>Error! Page Not Found.</h3>
                <img src="http://saifumak.com/wp-content/uploads/2014/12/404-error-page.jpg"></img>
            <p>Please double-check the Web address and try again.</p>
        </li>
    // console.log(FileNotFound);
        );
    }
}

export default FileNotFound;