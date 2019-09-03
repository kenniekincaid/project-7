import React, { Component } from 'react';
import Photo from './Photo';
import FileNotFound from './FileNotFound';

export default class Gallery extends Component {
    handleHeader(){
        return this.props.location.pathname.split('/')[2] //to search based on second path; Ex: search=1, art=2 (/search/art)...
    }

    componentDidMount(){ //before compenent mounts, it will search for the topic and splice it
                                // and will have app call the performSearch function and render pictures. 
        this.props.search(this.handleHeader()) //app gets new photos and replaces the default search with new photos
        //refer to this as the Second Render of photos... not the orange flowers but the topic.
    } 
//>>>>>>>>>>>>ASK A COACH if the above is creating the infinite loop in the console!!!<<<<<<<<<<<<<<<<

    render() { 
        let title = this.handleHeader()
        let results = this.props.photos.map((photo) => { 
            let photos = (<Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg|png`} />); //jpg|gif|png
            //photos: making a bunch of li's
        return (photos);
        });
            
        if(results.length > 0){ //conditional return of either photos or no results message
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