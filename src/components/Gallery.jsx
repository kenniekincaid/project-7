import React, { Component } from 'react';
import Photo from './Photo';
import FileNotFound from './FileNotFound';

//ISSUE: Unable to make make the conditional rendering of NotFound work if no results found.
//WHAT WORKS: Default Gallery shows and Search field works when enter key pressed after input. Button not working.

class Gallery extends Component {
    render() { 
        let results = this.props.photos.map((photo) => { 
            let photos = (<Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />); //jpg|gif|png

            // console.log(photo);
            return (photos);
            // console.log(photos);
        //HOW TO MAKE THE FOLLOWING WORK? It will render NO RESULTS FOUND to the DOM.
            // if(photos < 0) {
            //     photos= <FileNotFound />
            // }
        });
        let photos;
        if(photos === 0) {
            photos= <FileNotFound />
        }
        
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {results}
                </ul>
            </div>
         );
    }
}
 
export default Gallery;