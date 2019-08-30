import React, { Component } from 'react';
import Photo from './Photo';

class Gallery extends Component {
    render() { 
        const photos = this.props.photos.map((photo) => { 
            // console.log(photo);
            return (<Photo key={photo.key} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />);
        });
        
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