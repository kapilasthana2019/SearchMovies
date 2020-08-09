import React, { Component } from 'react'
import '../../CssFiles/HomePage.css'
import { Link } from 'react-router-dom'

export default class MovieCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isHover: false
        }

    }

    toggleHover = () => {

        this.setState({
            isHover: !this.state.isHover
        })
    }

    render() {
        const { movie, key } = this.props
        return (
            <div className="col-md-3 mb-5">

                <div className="card text-center">
                    <img className="w-100 " height="300px" width="100px" src={movie.Poster} alt="Movie Cover" />
                    <h6 className="text-warning p-2 text-left bg-dark card-title">
                        {movie.Title} - {movie.Year}
                    </h6>
                    <Link className="btn btn-primary"
                        style={{ width: "100%" }}
                        to={'/movie/' + movie.imdbID}
                    >
                        Get Details
                    <i className="fas fa-chevron-right ml-1" />
                    </Link>
                </div>

            </div>
        )
    }
}
