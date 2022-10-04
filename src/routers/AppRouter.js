import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Wrapper from "../components/Wrapper"
import GenresInDb from "../components/GenresInDb"
import LastMovieInDb from "../components/LastMovieInDb"
import ContentRowMovies from "../components/ContentRowMovies"
import SearchMovies from "../components/SearchMovies"

const AppRouter = () => {
  return (   
    <BrowserRouter >
        <Routes >
            <Route path="/" element={ <Wrapper />}  />
            <Route path="/GenresInDb" element={ <GenresInDb />}  />
            <Route path="/LastMovieInDb" element={ <LastMovieInDb/>}  />
            <Route path="/ContentRowMovies" element={ <ContentRowMovies />}  />
            <Route path="/search" element={ <SearchMovies />}  />
            <Route path='*' element={ 'Error 404' } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter