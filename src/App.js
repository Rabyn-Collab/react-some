import React from 'react'
import { Route, Routes } from 'react-router'
import Add from './component/Add'
import Header from './component/Header'
import Update from './component/Update'
import Home from './pages/Home'


const App = () => {

  // let data = [{ id: 1, title: 'hello' }, { id: 2, title: 'lio' }];

  // data = data.map((d) => {
  //   return d.id == 1 ? { id: 1, title: 'see you' } : d
  // });

  // console.log(data);
  return (
    <div>

      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Add />} />
        <Route path='update' element={<Update />} />

      </Routes>


    </div>
  )
}

export default App