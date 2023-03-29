import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { removeUser, toggle } from '../features/userSlice';
import {

  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


const Home = () => {

  const { userInfo: user } = useSelector((state) => state.data);

  const { isOpen } = useSelector((state) => state.data);


  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleOpen = () => {
    dispatch(toggle());
  }

  return (
    <>


      <div className='p-10 grid grid-cols-3 gap-10'>
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

              <button onClick={() => handleOpen()} className='text-orange-400'>
                <i className="fa-solid fa-trash fa-xl"></i>
              </button>

              <Dialog open={isOpen} handler={handleOpen}>
                <DialogHeader>Hold on sec</DialogHeader>
                <DialogBody divider>
                  Are you sure You want to Remove this
                </DialogBody>
                <DialogFooter>

                  <div className='space-x-5'>
                    <button onClick={() => handleOpen()}>Cancel</button>
                    <button onClick={() => {
                      dispatch(removeUser(i));

                    }}>Confirm</button>

                  </div>



                </DialogFooter>
              </Dialog>





            </div>

          </div>
        })}
      </div>
    </>
  )
}

export default Home