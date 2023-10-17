import axios from 'axios'
import React, { useEffect } from 'react'
import { popularOptions } from '../constants/apiOptions'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes } from '../redux/actions/actionstypes'
import Hero from '../components/Hero'
import { getMovies, setLoading, getGenres } from '../redux/actions/actions'
import MovieList from '../components/MovieList'

const MainPage = () => {

    const dispatch = useDispatch()
    const { genres } = useSelector((store) => store.movieReducer)


    useEffect(() => {
        dispatch(setLoading(true))

        dispatch(getMovies())

        dispatch(getGenres())

    },
        [])

    //console.log(genres)
    return (
        <>
            <Hero />
            {genres.map((genre)=>(
                <MovieList key={genre.id} genre={genre}/>
            ))}
        </>

    )
}

export default MainPage