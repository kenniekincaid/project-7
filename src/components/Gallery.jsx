import React, { Component } from 'react';
import Photo from './Photo';


export default class Gallery extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       searchWord: '', // searchWord from the last search
    //     };
    //   }
   
    handleHeader(){
        const title= this.props.location.pathname.split('/')[2]
        return title; //to search based on second path; Ex: search=1, art=2 (/search/art)...
    }

    render() { 
        let title = this.handleHeader()
        let results = this.props.photos.map(photo => { 
            let photos = (<Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />); //jpg|gif|png
            //photos: making a bunch of li's
            // console.log(results);
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
                    <h2>No search results.</h2>
                </div>
            );
        }
    }
}