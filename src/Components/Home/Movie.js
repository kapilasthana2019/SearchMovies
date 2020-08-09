import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/searchActions'
import Spinner from '../Layouts/Spinner'

class Movie extends Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
    }

    render() {
        const { movie } = this.props
        console.log("getting movie detail",movie);
        return (
            <>
                <div className="row mt-5">
                    <div className="col-md-4 card card-body mb-5">
                        <img src={movie.Poster} className="thumbnail" alt="Poster" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">
                            {movie.Title}
                        </h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong> {movie.Genre}
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> {movie.Released}
                            </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong> {movie.Rated}
                            </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong> {movie.imdbRating}
                            </li>
                            <li className="list-group-item">
                                <strong>Direction:</strong> {movie.Director}
                            </li>
                            <li className="list-group-item">
                                <strong>Actors:</strong> {movie.Actors}
                            </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong> {movie.Writer}
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 mb-5 border border-warning text-warning">
                        <div className="col-mod-12">
                            <h3>About the movie</h3>
                            <hr/>
                            <a className="btn btn-primary" style={{width:"auto"}} href="#">
                                view on IMDB
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie })(Movie)
