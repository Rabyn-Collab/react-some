import React from 'react'
import { useGetMovieByPageQuery } from '../features/movieApi';
import { useLocation } from 'react-router';
import DataShow from '../component/DataShow';

const PageQuery = () => {

  const { state } = useLocation();


  const { data, isLoading, isError, error } = useGetMovieByPageQuery({
    category: state.category,
    page: state.page
  });

  return (
    <>
      <DataShow data={data} isLoading={isLoading} isPage={true} category={state.category} />
    </>
  )
}

export default PageQuery