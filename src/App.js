import React from 'react'
import { Route, Routes } from 'react-router'
import Add from './component/Add'
import Header from './component/Header'
import Update from './component/Update'
import Detail from './pages/Detail'
import Home from './pages/Home'


const App = () => {


  return (
    <div>



      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Add />} />
        <Route path='update' element={<Update />} />
        <Route path='detail/:id' element={<Detail />} />

      </Routes>


    </div>
  )
}

export default App