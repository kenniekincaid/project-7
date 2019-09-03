import React, { Component } from 'react';
import Photo from './Photo';
import FileNotFound from './FileNotFound';

//ISSUE: Unable to make make the conditional rendering of NotFound work if no results found.
//WHAT WORKS: Default Gallery shows and Search field works when enter key pressed after input. Button not working.

class Gallery extends Component {

    handleHeader(){
        return this.props.location.pathname.split('/')[2] //Ex: search=1, art=2
    }

    componentDidMount(){
        this.props.search(this.handleHeader())
    }

    render() { 
        let title = this.handleHeader()
        let results = this.props.photos.map((photo) => { 
            let photos = (<Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg|png`} />); //jpg|gif|png

        return (photos);
        });
            
        if(results.length > 0){
            return(
                <div className="photo-container">
                    <h2>{title}</h2>
                    <ul>
                        {results}
                    </ul>
                </div>
            );
        } else {
            return(
                <div className="photo-container">
                    <h2>No Search Results</h2>
                </div>
            );
        }
    }
}
 
export default Gallery;