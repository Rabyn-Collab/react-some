import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const DataShow = ({ data, isLoading, category, isPage }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const nav = useNavigate();



  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  if (data?.results.length === 0) {
    return <h1 className='max-w-2xl mx-auto mt-16 text-pink-500 font-bold'>Try using another keyword</h1>
  }

  return (
    <div>
      <div className='p-7 grid grid-cols-4 gap-7'>
        {data && data.results.map((dat) => {
          return <div onClick={() => {
            nav(`/movie/detail/${dat.id}`, { state: dat });
          }} key={dat.id} className="shadow-xl rounded-lg hover:scale-105 ease-in duration-300 cursor-pointer">
            <img className='h-[375px] w-full object-cover ' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${dat.poster_path}`} alt="" />

            <div className='p-3'>
              <h1 className='text-2xl font-bold'>{dat.title}</h1>
              <p>{dat.overview.substring(0, 60) + '....'}</p>
            </div>

          </div>
        })}


      </div>

      {isPage && <div className='flex justify-center space-x-5 py-4'>
        <button onClick={data.page === 1 ? null : () => nav(-1)} className=''>Prev</button>
        <h1>{data.page}</h1>
        <button onClick={() => nav(`/movie/page/${data.page + 1}`, {
          state: {
            category,
            page: data.page + 1
          }
        })} className=''>Next</button>
      </div>}

    </div>
  )
}


export default DataShow