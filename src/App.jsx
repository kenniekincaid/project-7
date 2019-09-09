import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './App.css';
import Search from './components/Search.jsx';
import Navigation from './components/Navigation.jsx';
import Gallery from './components/Gallery.jsx';
import FileNotFound from './components/FileNotFound.jsx';
import axios from 'axios';
import apiKey from '../config.js';


//APP STARTS
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      images: [],
      isLoading: false,
      searchWord: '',
      error: false,
      performSearch: false
    };
  }

  /**APP RENDERS SEARCH, NAVIGATION, and GALLERY */
  render(props){

      return(
        <Router>
          <div className="container">
            <Search onSearch={this.performSearch} />
            <Navigation onClick={this.performSearch} />
            {this.state.isLoading ? (<p>Loading...</p>) : (
              <Switch>
                <Route exact path="/" render={ (props) => <Redirect to="/search/art" />} />
                <Route path="/search/:searchword" exact component={(props) => {
                  const searchWord = props.match.params.searchword;
                  if(searchWord !== this.state.searchWord) {
                    this.performSearch(searchWord);
                  }
                  return(
                    <React.Fragment>
                      <Gallery photos={this.state.images} {...props}/>
                    </React.Fragment> 
                  )
                }}/>
                <Route component={ FileNotFound } />
              </Switch>
            )}
          </div>
        </Router>
      );
  }

  performSearch = (query = 'orangeflowers') => {
    this.setState({
      isLoading: true
    });
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    
    axios.get(url)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          searchWord: query,
          isLoading: false
        }); 
        console.log(response.data.photos.photo);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
          if(error) {
            this.setState({
              error: false
            });
          } else if (error.repsonse === 500) {
            console.log('Error 500 - Internal Server Error');
          }
      });
  }
}

export default App;
