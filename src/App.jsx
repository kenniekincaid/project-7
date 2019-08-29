import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Search from './components/Search.jsx';
import Navigation from './components/Navigation.jsx';
import Gallery from './components/Gallery.jsx';
import NotFound from './components/NotFound.jsx';
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
    const hardCodedUrls = [
      "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
      "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
      "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
      "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
    ];
    return (
      <div className="container">
        <Search />
        <Navigation />
        <Gallery photos={hardCodedUrls} />
      </div>
    );
  }

//Use AXIOS to make a GET request to an API (Application Programming Interface)...(apps communicate through a URL.)
//NOTE: API's alow apps to retrieve or send data to and from databses or web services.
  componentDidMount() {
    //Create the search feature with query parameter and a default parameter
    const performSearch = (query = "hair color") => {
      //fetch data from flickr
      axios.get(`https://www.flickr.com/services/api/explore/flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          console.log(response.data);//output the API data response to the browser's console.
          this.setState({
            pics: response.data.photos.photo, //pictures equal to data array
            //initializes a loading state to display a loading message
            loading: false
          });
        })
        .catch(error => { //outputs a message to the consoleif axios fails to retrieve data
          console.log('Error fetching and parsing data', error);
            if(error.response === 404) {
              return({ NotFound })
            }
        });
    }
  }
}

//Extra Credit Button loader... Needs to be tested.
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

// export default ButtonLoader;

// const App = () => (
//   <Router>
//     <div className="container">
//       <Switch>
//         <Route path="/search" component={Search} />
//         <Route path="/navigation" component={Navigation} />
//         <Route path="/gallery" component={Gallery} />
//         <Route component={NotFound} /> //Extra Credit: Friendly user Message for no results found
//       </Switch>
//     </div>
//   </Router>
// );

// function App() {
//   return (
//     <body>
//       <div className="container">
//         <Search />
//       </div>

//       <nav className="main-nav">
//         <Navigation />
//       </nav>

//       <div className="photo-container">
//         <h2>Results</h2>
//           <ul>
//             <Gallery />
//           </ul>
//       </div>
//     </body>
//   );
// }

export default App;
