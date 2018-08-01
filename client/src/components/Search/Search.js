import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
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
                        <input type="text" className="form-control" id="search" placeholder="search" />
                    </div>
                    <div className="form-group">
                        <label for="startDate">Start Date</label>
                        <input type="text" className="form-control" id="startDate" placeholder="start" />
                    </div>
                    <div className="form-group">
                        <label for="endDate">End Date</label>
                        <input type="text" className="form-control" id="endDate" placeholder="search" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="submit" className="btn btn-primary ml-2">Clear Table</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Search;