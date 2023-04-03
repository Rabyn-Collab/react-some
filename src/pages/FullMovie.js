import React from 'react'
import { useNavigate } from 'react-router'

const FullMovie = () => {

  const nav = useNavigate();

  return (
    <div>
      <div className='grid grid-cols-4 p-7 gap-5'>

        <img onClick={() => nav('/movie/watch/Nightcrawler')} className='cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoe_m-6u1lo5xnHz83KdrR9OBpaASBGq3WJSfekhBzanN7I3A-" alt="" />

        <img className='cursor-pointer' onClick={() => nav('/movie/watch/mirage')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtdDU-PtrkJ4qGOWKTuvucwM8N-5HGvEK4xvtYn_4-PKmjKQo" alt="" />

      </div>

    </div>
  )
}

export default FullMovie