import React from 'react'
import { useParams } from 'react-router';
import { useGetSearchMovieQuery } from '../features/movieApi'
import DataShow from '../component/DataShow';

const Search = () => {
  const { search } = useParams();
  const { isError, error, isLoading, data } = useGetSearchMovieQuery(search);

  return (
    <div>
      <DataShow data={data} isLoading={isLoading} />
    </div>
  )
}

export default Search