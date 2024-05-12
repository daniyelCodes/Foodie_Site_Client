/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'


const Profile = ({ user }) => {
  const { logout } = useContext(AuthContext)


  //logout user

  const handleLogout = () => {
    logout().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
   
  }


  return (
    <div>
      
        
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          
            <div className="w-10 rounded-full">
              {
                user?.photoURL ? <img src={user.photoURL} alt="profile" className="rounded-full" /> : <img src="https://via.placeholder.com/150" alt="profile" className="rounded-full"
                />
              }
            </div> 
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-slate-950 rounded-box w-52">
          <li>
            <a href='/update-profile' className="justify-between" >
              Profile
            </a>
          </li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
      

    </div>

  )
}

export default Profile