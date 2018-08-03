// Include React as a dependency
import React, { Component } from 'react'

// Include the Search and Results components
import Search from "../Search/Search";
import Results from "../Results/Results";

// Include the API for making API calls
import API from "../../utils/API";

// Create the Search component
class Main extends Component {
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  state = { 
    search: "",
    start: "",
    end: "",
    results: []
  }

  // function to detect any change 
  handleChange = (event) => {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
}

  // This code handles the sending of the search terms to the parent Search component
  handleSubmit = (event) => {
      event.preventDefault();
      this.setQuery(this.state.search, this.state.start, this.state.end);

      this.setState({
        search: "",
        start: "",
        end: ""
      });
  }

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  setQuery = (newQuery, newStart, newEnd) => {
    API.runQuery(newQuery, newStart, newEnd)
    .then((data) => {
      this.setState({ results: data.docs});
    });
  }

  renderArticles = () => {
    return this.state.results.docs.map((article, index) => {
      <h1>{article.headline.main}</h1>
    });
  }

  // Render the component. Note how we deploy both the Query and the Results Components
  render() {
    return (
      <div className="container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Search 
          search={this.state.search}
          start={this.state.start}
          end={this.state.end}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        /> 
          
          <Results 
            results={this.state.results}  
          />
         
        {/* Note how we pass in the results into this component */}
        {/* <Results results={this.state.results.map((article, index) =>

        )} /> */}
      </div>
    );
  }
};

// Export the module for rendering in app.js
export default Main;