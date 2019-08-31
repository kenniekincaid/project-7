import React, { Component } from 'react';
import Photo from './Photo';
import Navigation from './Navigation';

class Gallery extends Component {
    render() { 
        const photos = this.props.photos.map((photo) => { 
            // console.log(photo);
            return (<Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />); //jpg|gif|png
        })
        
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {photos}
                </ul>
            </div>
         );
    }
}
 
export default Gallery;