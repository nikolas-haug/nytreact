import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    // componentDidMount() {
    //     axios.get('/api/sharks')
    //       .then((response) => {
    //         this.setState({sharks: response.data});
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }

    render() {
        return (
            <div className="card my-4">
                <div className="card-header">
                    <h4>Results</h4>
                </div>
                <div className="card-body">
                    
                </div>
            </div>
        )
    }
}

export default Results;