import React from 'react'
import { useLocation, useParams } from 'react-router'
import { useGetVideoMovieQuery } from '../features/movieApi';

const Detail = () => {

  const { state } = useLocation();
  const { isError, error, isLoading, data } = useGetVideoMovieQuery(state.id);



  return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${state.backdrop_path})`, backgroundRepeat: 'no-repeat' }} className='relative h-screen w-full'>

      {/* <img className='w-full max-h-screen' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${state.backdrop_path}`} alt="" /> */}


      <div className='absolute top-0'>
        <h1>{state.title}</h1>
        <p>{state.overview}</p>
      </div>

    </div >
  )
}

export default Detail