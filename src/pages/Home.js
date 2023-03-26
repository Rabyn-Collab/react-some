import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { removeUser } from '../features/userSlice';

const Home = () => {

  const { userInfo: user } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className='p-10 grid grid-cols-3'>
      {user.map((u, i) => {
        return <div key={u.id}>
          <img src={u.imageUrl} alt="userImage" />
          <h1>{u.username}</h1>
          <h2>{u.email}</h2>
          <p>{u.gender}</p>
          <p>{u.country}</p>
          <p>{u.msg}</p>


          <h1>Skills</h1>
          <ul className='flex space-x-5'>
            {u.program.map((p) => {
              return <li key={p}>
                <h1>{p}</h1>
              </li>
            })}
          </ul>

          <div className='flex justify-end space-x-5'>
            <button onClick={() => {
              nav('/update', {
                state: u
              });
            }}><i className="fa-solid fa-pen-to-square fa-xl"></i></button>

            <button onClick={() => {
              dispatch(removeUser(i));
            }} className='text-orange-400'>
              <i className="fa-solid fa-trash fa-xl"></i>
            </button>
          </div>

        </div>
      })}
    </div>
  )
}

export default Home