import React from 'react'
import { useGetNewsQuery } from '../features/newsApi'

const NewsShow = () => {

  const { isLoading, isError, data, error } = useGetNewsQuery('hollywood');



  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  console.log(data);
  return (
    <div>

      <div className='px-7 pt-7 pb-5  grid grid-cols-4 gap-7'>
        {data && data.articles.map((a) => {
          return <div key={a._id}>
            <h1>{a.title}</h1>
            <img src={a.media} alt="" />

            <a className='text-green-600' href={a.link} target='_blank'>Go To source</a>

          </div>
        })}

      </div>
    </div>
  )
}

export default NewsShow