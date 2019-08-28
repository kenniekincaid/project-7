import React, { Component } from 'react';
import Photo from './Photo';

class Gallery extends Component {
    render() { 
        const photos = this.props.photos.map(photo => {
            return (<Photo url={photo} />);
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