import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const apiKey = '92c1e33f015755d27a231793c44ecfed';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),

  endpoints: (builder) => ({


    getTrendingMovie: builder.query({
      query: (q) => ({
        url: '/trending/all/day',
        params: {
          api_key: apiKey
        }
      }),
    }),


    getMovieByCategory: builder.query({
      query: (q) => ({
        url: `/movie/${q}`,
        params: {
          api_key: apiKey
        }
      }),
    }),


    getMovieByPage: builder.query({
      query: (q) => ({
        url: `/movie/${q.category}`,
        params: {
          api_key: apiKey,
          page: q.page
        }
      }),
    }),



    getSearchMovie: builder.query({
      query: (searchText) => ({
        url: '/search/movie',
        params: {
          api_key: apiKey,
          query: searchText
        },
      }),
    }),

    getVideoMovie: builder.query({
      query: (movieId) => ({
        url: `/movie/${movieId}/videos`,
        params: {
          api_key: apiKey,
        },
      }),
    })






  })
});


export const { useGetMovieByCategoryQuery, useGetSearchMovieQuery, useGetTrendingMovieQuery, useGetVideoMovieQuery, useGetMovieByPageQuery } = movieApi;