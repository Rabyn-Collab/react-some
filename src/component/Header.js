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
    onSubmit: (val, { resetForm }) => {
      nav(`/movie/search/${val.search}`);
      resetForm();
    }
  });


  const navs = [
    {
      label: 'News',
      path: 'news/show'
    },
    {
      label: 'Must See',
      path: 'movie/watch-online'
    },
    {
      label: 'Popular',
      path: '/movie/popular'
    },
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
    <div className='flex justify-between px-9   bg-black text-white py-3  sticky top-0 z-50 items-center'>

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


      <div className='space-x-5 sm:hidden pt-1 flex items-center'>
        {navs.map((n, i) => {
          return <NavLink className='hover:text-pink-400' to={n.path} key={i} >{n.label}</NavLink>
        })}

        <form onSubmit={formik.handleSubmit}>

          <label htmlFor="search"></label>
          <div className='relative'>
            <input
              type="text"
              name='search'
              placeholder='search movies'
              value={formik.values.search}
              onChange={formik.handleChange}
              className='outline-none rounded-lg pl-2 py-1 text-black' />
            <button type='submit'>
              <i className="fa-solid fa-magnifying-glass absolute right-2 text-black top-2"></i>
            </button>


          </div>

        </form>
      </div>



    </div>
  )
}

export default Header