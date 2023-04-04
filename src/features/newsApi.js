import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const newsApi = createApi({

  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-news.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': '89e53c72d7msh16aa8c041814a4cp1f3e79jsn333d7bcaf747',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
  }),
  endpoints: (builder) => ({

    getNews: builder.query({
      query: (query) => ({
        url: '/v1/search',
        params: {
          q: query,
          lang: 'en'
        },

      }),
    }),

  })



});




export const { useGetNewsQuery } = newsApi;