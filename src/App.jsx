import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Search from './components/Search.jsx';
import Navigation from './components/Navigation.jsx';
import Gallery from './components/Gallery.jsx';
import FileNotFound from './components/FileNotFound.jsx';
import axios from 'axios';
import apiKey from './config.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      isloading: true
    };
  }

  render() {
    // const hardCodedUrls = [
    //   "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    //   "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
    //   "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
    //   "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
    // ];

    return (
      <div className="container">
        <Search onSearch={this.performSearch}/>
        <Navigation />
        { 
          (this.state.loading)
          ? <p>Loading...</p>
          : <Gallery photos={this.state.images} />
        }
      </div>
    );
  }

  //Use AXIOS to make a GET request to an API (Application Programming Interface)...(apps communicate through a URL.)
  //NOTE: API's alow apps to retrieve or send data to and from databses or web services.

  performSearch = (query = 'orangeflowers') => {
    //fetch data from flickr
    // console.log('Executing query');
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    // console.log(url);
    axios.get(url)
      .then(response => {
        // console.log(response.data);//output the API data response to the browser's console.
        this.setState({
          images: response.data.photos.photo, //pictures equal to data array
          //initializes a loading state to display a loading message
          loading: false
        }); 
        console.log(response.data.photos.photo);//returns the default perform search for orange flowers
      })
      .catch(error => { //outputs a message to the consoleif axios fails to retrieve data
        console.log('Error fetching and parsing data', error);
          if(error.response === 404) {
            return({ FileNotFound }) //error message to show in the browser
          } else if (error.repsonse === 500) {
            console.log('Error 500 - Internal Server Error');
          }
      });
  }

  componentDidMount() {
    this.performSearch();
  }
}

// //Extra Credit Button loader... Needs to be tested.
// class ButtonLoader extends Component {
//   state = {
//     loading : false
//   }

//   fetchData = () =>{
//     this.setState({ loading : true});
//     setTimeout(() => {
//       this.setState({loading : false});
//     }, 2000)
//   }

//   render() {
//     const {loading} = this.state;
//     return (
//       <div style={{marginTop : '60px'}}>
//         <button className="button" onClick={this.fetchData} disabled={loading}>
//           { loading && <img className="fa fa-refresh fa-spin"></img> }
//           { loading && <span>Loading Data from Server</span> }
//           { loading && <span>Fetching Data from Server</span>}
//         </button>
//       </div>
//     );
//   }
// }

// function Routes(){
//   return(
//     <Router>
//       <div className="container">
//         <Switch>
//           <Route path="/search" component={Search} />
//           <Route path="/navigation" component={Navigation} />
//           <Route path="/gallery" component={Gallery} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   )
// }

export default App;
