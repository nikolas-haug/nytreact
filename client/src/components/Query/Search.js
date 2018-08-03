import React, { Component } from "react";

class Search extends Component {

    state = {
        search: "",
        start: "",
        end: ""
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
        this.props.updateSearch(this.state.search, this.state.start, this.state.end);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                Search Parameters
                </div>
                <div className="card-body">
                <form>
                    <div className="form-group">
                        <label for="search">Seach Term</label>
                        {/* <input type="text" className="form-control" id="search" placeholder="search" /> */}
                        <input
                            type="text"
                            value={this.state.search}
                            className="form-control"
                            id="search"
                            placeholder="search"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="start">Start Date</label>
                        {/* <input type="text" className="form-control" id="start" placeholder="start" /> */}
                        <input
                            type="number"
                            value={this.state.start}
                            className="form-control"
                            id="start"
                            placeholder="start date"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="end">End Date</label>
                        {/* <input type="text" className="form-control" id="end" placeholder="search" /> */}
                        <input
                            type="number"
                            value={this.state.end}
                            className="form-control"
                            id="end"
                            placeholder="end date"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="submit" className="btn btn-warning ml-2">Clear Table</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Search;