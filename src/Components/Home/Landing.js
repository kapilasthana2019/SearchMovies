import React, { Component } from 'react'
import SearchForm from './SearchForm'
import { connect } from 'react-redux'

export class Landing extends Component {
    render() {
        return (
            <div className="container mt-2 mb-5">
                <SearchForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps)(Landing)
