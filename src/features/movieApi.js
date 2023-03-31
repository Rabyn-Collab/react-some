import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),

  endpoints: (builder) => ({



    getMovieByCategory: builder.query({
      query: (q) => ({
        url: q,
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        }
      }),
    }),

    getSearcMovie: builder.query({
      query: (searchText) => ({
        url: '/search/movie',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed',
          query: searchText
        }
      }),
    })







  })
});


export const { useGetMovieByCategoryQuery, useGetSearcMovieQuery } = movieApi;