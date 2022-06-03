import React,{createContext} from 'react'

interface TypeMovieObject {
    title:string,
    review:string,
    voteAverage:number,
    posterPath:string
}

interface TypeMoviesContext {
    getMovie:()=>void
    movieObject : any
}

export const moviesContext = createContext({} as any)

export function moviesContextProvider() {

}
