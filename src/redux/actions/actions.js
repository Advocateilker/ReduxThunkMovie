import axios from "axios";
import { actionTypes } from "./actionstypes";
import { popularOptions } from '../../constants/apiOptions'

axios.defaults.baseURL='https://api.themoviedb.org/3'

//sync

export const setLoading=(payload)=>({
        type:actionTypes.SET_LOADING,
        payload
})

//async
export const getMovies=()=>{
    return async function(dispatch){
        
        axios
        .get('/movie/popular',popularOptions)
        .then((res)=>
        dispatch({
            type:actionTypes.SET_MOVIES,
            payload:res.data.results
        }))
        .catch((err)=>console.log(err))
    }
}

export const getGenres=()=>(dispatch)=>{

    axios.get('/genre/movie/list',popularOptions)
    .then((res)=>dispatch({
        type:actionTypes.SET_GENRES,
        payload:res.data.genres
    }))


}