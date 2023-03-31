import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './component/Header'
import { useGetMovieByCategoryQuery } from './features/movieApi'
import Home from './pages/Home'
import Main from './pages/Main'
import Search from './pages/Search'


const App = () => {



  return (
    <div>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:category' element={<Main />} />
        <Route path='movie/:search' element={<Search />} />
      </Routes>


    </div>
  )
}

export default App