import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { VscClose, VscListFilter } from "react-icons/vsc";
import { useFormik } from 'formik';
const Header = () => {

  const [isOpen, setOpen] = useState(false);

  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val) => {
      nav(`/movie/${val}`);
    }
  });


  const navs = [
    {
      label: 'Top Rated',
      path: '/movie/top_rated'
    },
    {
      label: 'UpComing',
      path: '/movie/upcoming'
    }
  ];

  const toggle = () => {
    setOpen(!isOpen);
  }


  return (
    <div className='flex justify-between px-9   bg-black text-white py-3 items-start sticky top-0 z-50'>

      <div>

        <NavLink to='/' replace className='text-xl '>Sample Logo</NavLink>
        {isOpen && <div className='flex flex-col space-y-4 mt-5 '>
          {navs.map((n, i) => {
            return <NavLink onClick={() => toggle()} className='hover:bg-white hover:p-2 hover:text-black hidden sm:flex' to={n.path} key={i} >{n.label}</NavLink>
          })}
        </div>}

      </div>





      <div className='hidden sm:flex'>
        <button onClick={() => toggle()}> {isOpen ? <VscClose size={30} /> : <VscListFilter size={30} />} </button>
      </div>


      <div className='space-x-5 sm:hidden pt-1 flex'>
        {navs.map((n, i) => {
          return <NavLink className='hover:bg-white hover:p-2 hover:text-black ' to={n.path} key={i} >{n.label}</NavLink>
        })}
        <form onSubmit={formik.handleSubmit}>

          <label htmlFor="search"></label>
          <div className='relative'>
            <input type="text" name='search' value={formik.values.search} className='outline-none rounded-lg pl-2 py-1 text-black' />
          </div>

        </form>
      </div>



    </div>
  )
}

export default Header