import React from "react";
import "./Search.css";

const Search = (props) => (
            <div className="card">
                <div className="card-header">
                Search Parameters
                </div>
                <div className="card-body">
                <form onSubmit={props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="search">Seach Term</label>
                        {/* <input type="text" className="form-control" id="search" placeholder="search" /> */}
                        <input
                            type="text"
                            value={props.search}
                            className="form-control"
                            id="search"
                            placeholder="search"
                            onChange={props.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start">Start Date</label>
                        {/* <input type="text" className="form-control" id="start" placeholder="start" /> */}
                        <input
                            type="number"
                            value={props.start}
                            className="form-control"
                            id="start"
                            placeholder="start date"
                            onChange={props.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end">End Date</label>
                        {/* <input type="text" className="form-control" id="end" placeholder="search" /> */}
                        <input
                            type="number"
                            value={props.end}
                            className="form-control"
                            id="end"
                            placeholder="end date"
                            onChange={props.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="submit" className="btn btn-warning ml-2">Clear Table</button>
                </form>
                </div>
            </div>
        )

export default Search;