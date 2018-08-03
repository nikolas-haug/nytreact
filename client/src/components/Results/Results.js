import React, { Component } from "react";
import "./Results.css";

// import API from "../../utils/API";

// const Results = (props) => (
//     <div className="card my-4">
//         <div className="card-header">
//             <h4>Results</h4>
//         </div>
//         <div className="card-body">
//             <h1>{props.results}</h1>
//         </div>
//     </div>
// )

const Results = (props) => {
    return (
      <div className="card mb-3 container results-box">
        <div className="card-header">
          <h4>Results</h4>
        </div>
        <div className="card-body">
          {props.results.map((article) => {
            // const image = Default || `https://www.nytimes.com/${article.multimedia[0].url}`;
            return (
              <div key={article._id}>
                <div className="article-display row">
                  {/* <a href={article.web_url} target="_blank" className="col-md-4"><img src={image} className="img-responsive" alt="thumbnail"/></a> */}
                  <div className="col-md-3">
                    <h4>Title: {article.headline.main}</h4>
                  </div>
                  <div className="col-md-3">
                    {/* <h4>Published: {article.pub_date}</h4> */}
                  </div>
                  {/* <button onClick={() => props.handleSaveButton(article.headline.main, article.web_url, article.pub_date, image)} className="btn btn-sm btn-primary col-md-2">save</button> */}
                </div>
                <hr/>
              </div>
            )
          }) || <h4>loading...</h4>}
        </div>
      </div>
    )
  };

export default Results;