import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseImageUrl, popularOptions } from '../constants/apiOptions'
import Loading from '../components/Loading'
import Badget from '../components/badget'



const DetailPage = () => {

  const [movie, setMovie] = useState(null)

  const { movie_id } = useParams()



  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, popularOptions)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err))
  }, [])

//console.log(movie)



  if (!movie) return <Loading />
  return (
    <div className='movie-detail row p-4 flex align-items-center  my-5'>

      <div className='col-md-4 d-flex align-items-center justify-content-center'>
        <div className='position-relative'>

          <img className='img-fluid rounded shadow-lg' src={baseImageUrl.concat(movie.poster_path)} alt="" />
          <span className='bg-warning px-2 py-1 rounded position-absolute vote '>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
      <div className='col-md-8'>

        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <div className='row'>
          <div className='col-6 col-md-12'>
            <p>Budget : {movie.budget + ' $'}</p>
            <p>Revenue : {movie.revenue + ' $'}</p>
            <p>Profit : {`${movie.revenue - movie.budget}  $`}</p>
          </div>
          <div className='col-6 col-md-12'>
            <Badget barTitle={'Categories'} badgetTitle={movie?.genres}/>
            <Badget barTitle={'Languages'} badgetTitle={movie?.spoken_languages}/>
            <Badget barTitle={'Companies'} badgetTitle={movie?.production_companies}/>
          </div>

        </div>


      </div>



    </div>
  )
}

export default DetailPage