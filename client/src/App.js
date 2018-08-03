import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Title from "./components/Title";
// import Search from "./components/Search";
// import Results from "./components/Results";

import Main from "./components/Main/Main";

class App extends Component {

  render() {
    return (
      <Router>
            <div>
            <Route exact path="/" render={props => 
              <div className="container">
              <Title 
                title="Title!"
              />
              <Main />
              {/* <Search />
              <Results /> */}
              </div>
          } />

          {/* <Route exact path="/home" render={} /> */}

          </div>
      </Router>
    );
  }
}

export default App;
