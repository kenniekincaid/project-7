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
import apiKey from './config.js';


//APP STARTS
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      images: [],
      isloading: true,
      searchWord: '',
      // searchArt: [],
      // searchNature: [],
      // searchUniverse: [],
      // searchTechnology: [],
      // searchFood: [],
      // searchCulture: [],
      // searchLiberty: []
    };
  }

  /**APP RENDERS SEARCH, NAVIGATION, and GALLERY */
  render(){
      return(
        <Router>
          <div className="container">
          {/*Header*/}
            <Search onSearch={this.performSearch} />
            <Navigation onClick={this.performSearch} />
            <Switch>
                <Route exact path="/" render={ (props) => <Redirect to="/search/art" />} />
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
                      
                      <Gallery photos={this.state.images} {...props}/>
                    </React.Fragment> 
                  )
                }}/>
                <Route component={ FileNotFound } />
                <Route exact path="search/art" render={() =>
                  this.state.loading
                  ? <p>Loading...</p>
                  : <Gallery photos={this.state.images}/>
                }/>
                {/* )}/>*/}
            </Switch>
          </div>
        </Router>
    );
  }

  // componentDidMount() {
    // this.performSearch(); //this will call performSearch
    // this.performSearch("art");
    // this.performSearch("nature");
    // this.performSearch("Universe");
    // this.performSearch("Technology");
    // this.performSearch("Food");
    // this.performSearch("Culture");
    // this.performSearch("Liberty");
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
          isloading: true
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
