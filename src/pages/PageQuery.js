import React from 'react'
import { useLocation } from 'react-router';
import { useGetMovieByPageQuery } from '../features/movieApi';
import DataShow from '../component/DataShow';

const PageQuery = () => {

  const { state } = useLocation();
  const { data, isLoading, isError, error } = useGetMovieByPageQuery({
    category: state.category,
    page: state.page
  });

  return (
    <div>
      <DataShow data={data} isLoading={isLoading} category={state.category} isPage={true} />
    </div>
  )
}

export default PageQuery