import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './component/Header'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieByCategory from './pages/MovieByCategory'
import Detail from './component/Detail'
import PageQuery from './pages/PageQuery'

// hello sample

const App = () => {



  return (
    <div>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:category' element={<MovieByCategory />} />
        <Route path='movie/search/:search' element={<Search />} />
        <Route path='movie/page/:page' element={<PageQuery />} />
        <Route path='movie/detail/:id' element={<Detail />} />
      </Routes>


    </div>
  )
}

export default App