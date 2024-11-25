import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEURL = import.meta.env.VITE_APP_BASE_URL
const APIKEY = import.meta.env.VITE_APP_APIKE

export const movieApi = createApi({
    reducerPath: "movieApp",
    baseQuery: fetchBaseQuery({baseUrl: `${BASEURL}`}),
    endpoints:(builder)=>({
        getTrendingMovies:builder.query({
            query:()=>(`${BASEURL}/movie/trending?api_key=${APIKEY}`),
        }),
        getPopularMovies:builder.query({
            query:()=>(`${BASEURL}/movie/popular?api_key=${APIKEY}`),
        }),
        getNowPlayingMovies:builder.query({
            query:()=>(`${BASEURL}/movie/now_playing?api_key=${APIKEY}`),
        }),
        getTopRatedMovies:builder.query({
            query:()=>(`${BASEURL}/movie/top_rated?api_key=${APIKEY}`),
        }),
    }),
});

// `use${GetPopularMovies}Mutation`

export const  {
    useGetTrendingMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetPopularMoviesQuery
} = movieApi