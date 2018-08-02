// Include the Axios library for HTTP requests
import axios from "axios";

// NYT API Key
const APIKey = "169fab141c324b17a7119dc49caf6b92";

// API helper functions
const helpers = {

  //function for the nyt news query
  runQuery: function(keyword, startDate, endDate) {

    // Adjust to get search terms in proper format
    let formattedTerm = keyword.trim();
    let formattedStart = startDate.trim() + "0101";
    let formattedEnd = endDate.trim() + "1231";

    console.log("query started!");

    // Run a query using Axios. Then return the results as an object with an array.
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": formattedTerm,
        "begin_date": formattedStart,
        "end_date": formattedEnd
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  },

  // function to return saved articles from the database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  // function to post new 'saved' articles to the database
  postSaved: function(title, url, date) {
    let newArticle = { title: title, url: url, date: date };
    console.log('postSaved', title)
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

  // function to delete 'saved' articles from the database
  deleteSaved: function(title, url, date) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "url": url,
        "date": date
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
  
}


