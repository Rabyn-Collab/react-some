import React from 'react'
import { useGetTrendingMovieQuery } from '../features/movieApi'
import DataShow from '../component/DataShow';

const Home = () => {

  const { isLoading, isError, error, data } = useGetTrendingMovieQuery();

  return (
    <>
      <DataShow data={data} isLoading={isLoading} isPage={false} />
    </>
  )
}

export default Home