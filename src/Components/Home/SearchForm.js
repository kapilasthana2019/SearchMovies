import React, { Component } from 'react'
import '../../CssFiles/HomePage.css'

import {connect} from 'react-redux'

import {searchMovie,fetchMovies} from '../../actions/searchActions'

export class SearchForm extends Component {

    inputHandle = e => {
        this.props.searchMovie(e.target.value)
    }

    onSubmit = e => {

        e.preventDefault()
        this.props.fetchMovies(this.props.text)
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-10 text-center bg-dark border border-warning">
                <div className="container">
                    <h4 className="display-4 mb-3 text-warning">
                        <i className="fa fa-search" /> search for a movie, TV series, Web Series...
                </h4>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <form id="searchForm"
                         style={{ width: "50%", alignItems: "center" }}
                         onSubmit={this.onSubmit}
                         >
                            <input
                                id="searchBox"
                                type="text"
                                className="form-control"
                                name="searchText"
                                placeholder="Search Movies,TV and webSeries..."
                                onChange={this.inputHandle}
                            />
                            <button type="submit" className="btn btn-primary mt-3">Search</button>
                        </form>

                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = state =>({
    text: state.movies.text,
    movies:state.movies.movies
})

export default connect(
    mapStateToProps,
    {searchMovie,fetchMovies}
    )(SearchForm)
