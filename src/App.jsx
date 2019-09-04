import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Search from './components/Search.jsx';
import Navigation from './components/Navigation.jsx';
import Gallery from './components/Gallery.jsx';
import FileNotFound from './components/FileNotFound.jsx';
import axios from 'axios';
import apiKey from './config.js';


//APP STARTS
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      isloading: false,
      searchWord: '',
      searchArt: [],
      searchNature: [],
      searchUniverse: [],
      searchTechnology: [],
      searchFood: [],
      searchCulture: [],
      searchLiberty: []
    };
  }

  /**APP RENDERS SEARCH, NAVIGATION, and GALLERY */
  render(){
      return(
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" render={ (props) => <Redirect to="/search/art" />} />
              <Route path="search/art" render={() => this.state.loading
              ? <p>Loading...</p>
              : <Gallery photos={this.state.images}/>
              }/>

<Gallery photos={this.state.images} />
        { 
          (this.state.loading)
          ? <p>Loading...</p>
          : <Gallery photos={this.state.images} />
        }

              <Route path="/search/:searchword" exact component={(props) => {
                const searchWord = props.match.params.searchword;
                if(searchWord !== this.state.searchWord) {
                  this.setState((state)=> {
                    return {searchWord: searchWord};
                  });
                  this.performSearch(searchWord);
                }
                return(
                  <React.Fragment>
                    <Search onSearch={this.performSearch} />
                    <Navigation onClick={this.performSearch} />
                    <Gallery photos={this.state.images} {...props}/>
                  </React.Fragment> 
                )
              }}/>
              <Route component={ FileNotFound } />
              {/* )}/>*/}
            </Switch>
          </div>
        </Router>
    );
  }

  // componentDidMount() {
  //   this.performSearch(); //this will call performSearch
  // }

  performSearch = (query = 'orangeflowers') => { //arrow functions do not have '{this}'
    // debugger// console.log('Executing query');
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    // console.log(url);
    axios.get(url) //returns a promise
      .then(response => { //response stores whatever flickr sends back.
        // console.log(response.data);//output the API data response to the browser's console.
        this.setState({ //internal to react; whenever called, it triggers 'this'. When called, this.render() is app.render here.
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
