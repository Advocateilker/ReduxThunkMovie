import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { baseImageUrl } from '../constants/apiOptions'

const Hero = () => {

  const { movieList, isLoading } = useSelector((store) => ({
    movieList: store.movieReducer.popularMovies,
    isLoading: store.movieReducer.isLoading
  }))
  //console.log(movieList, isLoading)
  function getRandomIndexBetween0And20() {
    return Math.floor(Math.random() * movieList.length);
  }
  const randomIndex = getRandomIndexBetween0And20();
  // console.log(randomIndex);

  const randomMovie = movieList[randomIndex]

  /*
  What will we use:
  title, overview, vote_average, backdrop_path, id
  */

  return (


    <div className=''>
      {isLoading && <Loading />}
      {!isLoading && (


        <div className='row d-flex align-items-center justify-content-center p-5'>
          <div className='col-md-6 d-flex flex-column align-items-center justify-content-center gap-1'>
            <h1>{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <p className='text-warning font-bold'>IMDB : {randomMovie.vote_average}</p>
            <div className='btn-group'>

              <Link className='btn btn-warning' to={`movie/${randomMovie.id}`}>Watch Film</Link>
              <Link className='btn btn-info'>Add To List</Link>

            </div>

          </div>


          <div className='col-md-6'>
            <img className='img-fluid' src={`${baseImageUrl}${randomMovie.backdrop_path}`} alt="" />
          </div>



        </div>

      )}
    </div>
  )
}

export default Hero