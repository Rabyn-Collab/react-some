import React from 'react'
import { useLocation, useParams } from 'react-router'
import { useGetVideoMovieQuery } from '../features/movieApi';

const Detail = () => {

  const { state } = useLocation();
  const { isError, error, isLoading, data } = useGetVideoMovieQuery(state.id);

  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  if (data?.results.length === 0) {
    return <h1 className='max-w-2xl mx-auto mt-16 text-pink-500 font-bold'>No videos were found here</h1>
  }



  return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${state.backdrop_path})`, backgroundRepeat: 'no-repeat' }} className='absolute top-0 h-screen w-full bg-cover'>
      <div className='absolute top-10 py-10 px-5 text-white '>
        <h1 className='text-2xl'>{state.title}</h1>
        <iframe className="w-[60%] mt-5 mb-2  h-[400px] aspect-video" src={`https://www.youtube.com/embed/${data?.results[0].key}`}></iframe>

        <p>{state.overview}</p>
      </div>

    </div >
  )
}

export default Detail