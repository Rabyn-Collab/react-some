import React from 'react'
import { useParams } from 'react-router';
import { useGetMovieByCategoryQuery } from '../features/movieApi'
import DataShow from '../component/DataShow';

const MovieByCategory = () => {
  const { category } = useParams();

  const { data, isLoading, isError, error } = useGetMovieByCategoryQuery(category);

  return (
    <div>
      <DataShow data={data} isLoading={isLoading} />
    </div>
  )
}

export default MovieByCategory