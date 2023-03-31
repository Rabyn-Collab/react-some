import React from 'react'
import { useParams } from 'react-router';
import { useGetSearcMovieQuery } from '../features/movieApi'

const Search = () => {
  const { search } = useParams();
  const { isError, error, isLoading, data } = useGetSearcMovieQuery(search);
  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  return (
    <div className='p-7 grid grid-cols-4 gap-7'>
      {data && data.results.map((dat) => {
        return <div key={dat.id} className="shadow-xl rounded-lg hover:scale-105 ease-in duration-300 cursor-pointer">
          <img className='h-[375px] w-full object-cover ' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${dat.poster_path}`} alt="" />

          <div className='p-3'>
            <h1 className='text-2xl font-bold'>{dat.title}</h1>
            <p>{dat.overview.substring(0, 60) + '....'}</p>
          </div>

        </div>
      })}


    </div>
  )
}

export default Search