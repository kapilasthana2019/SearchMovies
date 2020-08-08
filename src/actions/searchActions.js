import { SEARCH_MOVIE ,FETCH_MOVIE} from './types'
import axios from 'axios'
import {APIKey} from '../ApIKey'
export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {

    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`).then((response)=>dispatch({
        type:FETCH_MOVIE,
        payload:response.data.Search
    })).catch((error)=>{
        console.log("getting error while fetching movie",error);
    })
}