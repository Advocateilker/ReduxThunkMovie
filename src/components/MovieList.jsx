import React, { useEffect, useState } from 'react'
import { popularOptions, baseImageUrl } from '../constants/apiOptions'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';




const MovieList = ({ genre }) => {

    const [movies, setMovies] = useState(null)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${genre.id}`, popularOptions)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err))
    }, [])

    //console.log(movies)

    return (
        <div>
            <h2 className='mb-3 mt-3'>{genre.name}</h2> <hr />
            <Splide
                options={
                    {
                        gap: '10px',
                        autoWidth: true,
                        pagination: false

                    }

                }
                aria-label="My Favorite Images">
                {movies?.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img className='movie' src={baseImageUrl.concat(movie.poster_path)} alt="Image 1" />
                        </Link>

                    </SplideSlide>

                ))}
            </Splide>
        </div>
    )
}

export default MovieList