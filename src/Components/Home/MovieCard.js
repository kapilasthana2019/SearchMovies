import React, { Component } from 'react'

export default class MovieCard extends Component {
    render() {
        const {movie,key} = this.props
        return (
            <div className = "col-md-3 mb-5">
                <div className ="card   text-center"></div>
                <img className="w-100 mb-2" src={movie.Poster} alt="movie-cover"/>
                <h5 className ="text-warning card-title">
                {movie.Title} - {movie.Year}
                </h5>
                <a className ="btn btn-primary" style={{width:"100%"}}>
                    click
                </a>
            </div>
        )
    }
}
