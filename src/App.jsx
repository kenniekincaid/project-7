import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import Search from './components/Search.jsx';
import Navigation from './components/Navigation.jsx';
import Gallery from './components/Gallery.jsx';
import FileNotFound from './components/FileNotFound.jsx';
import axios from 'axios';
import apiKey from './config.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      isloading: false
    };
  }

  /**RENDERING SEARCH, NAVIGATION, and GALLERY */
  render() {
      return (
      <div className="container">
        <Search onSearch={this.performSearch}/>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/search/:searchword" exact component={(props) => (
                  <Gallery photos={this.state.images} {...props} search={this.performSearch}/>
              )}/>
              <Route component={(props) => (
                  <Gallery photos={this.state.images} {...props} search={this.performSearch}/>
              )}/>
            </Switch>
        </Router>
      </div>
    );
  }


  // componentDidMount() {
  //   this.performSearch();
  // }

  performSearch = (query = 'orangeflowers') => {
    // debugger// console.log('Executing query');
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    // console.log(url);
    axios.get(url)
      .then(response => {
        // console.log(response.data);//output the API data response to the browser's console.
        this.setState({
          images: response.data.photos.photo, //pictures equal to data array
          //initializes a loading state to display a loading message
        }); 
        console.log(response.data.photos.photo);//returns the default perform search for orange flowers
        this.setState({
          isloading: false
        });
      })
      .catch(error => { //outputs a message to the consoleif axios fails to retrieve data
        console.log('Error fetching and parsing data', error);
          if(error) {
              this.setState({
                error: false
              }); //error message to show in the browser
          } else if (error.repsonse === 500) {
            console.log('Error 500 - Internal Server Error');
          }
      });
  }
}

export default App;
