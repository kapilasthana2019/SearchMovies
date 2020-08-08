import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

export class MoviesContainer extends Component {
    render() {

        const { movies, text } = this.props
        let Content = ""
        Content = (movies !== undefined && movies.length > 0) ? movies.map((movie, key) => <MovieCard key={key} movie={movie} />)
            : (movies === undefined && text !=="") ? <div className="bg-dark container-fluid text-center text-warning">result not found for {text}</div> : null
        return (
            <div className="row">
                {Content}
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    movies: state.movies.movies,
    text: state.movies.text
})
export default connect(mapStatesToProps)(MoviesContainer)
