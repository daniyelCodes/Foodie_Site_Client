import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2';
import useAxios from '../hooks/useAxios';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const { createUser, signInWithGmail, updateUserProfile  } = useContext(AuthContext);
    const axiosPublic =  useAxios();

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        createUser(email, password).then((result) => {
            const user = result.user;
            updateUserProfile(data.email, data.photoURL).then(() => {
                const userInfo = {
                    name: data.name,
                    email: data.email,
                }

                axiosPublic.post('/users', userInfo).then((response) => {
                    // alert 
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have successfully created an account!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    //close modal
                    document.getElementById('my_modal_5').close()
                    //redirect
                    navigate(from, { replace: true })
                })
            })
            
           
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

   //log in with google
    const handleRegister = () => {
        signInWithGmail().then((result) => {
            const user = result.user;
            const userInfo = {
                name: result?.user?.displayName,
                email: result?.user?.email,
            }
            axiosPublic.post('/users', userInfo).then((response) => {
                // alert 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully created an account!",
                    showConfirmButton: false,
                    timer: 1500
                });
                //close modal
                document.getElementById('my_modal_5').close()
                //redirect
                navigate("/")
            })
           
        }). catch((error) => console.log(error) )
    };
  return (
    <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20' >
          <div className="modal-action flex flex-col justify-center mt-0">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                  <h3 className='font-bold text-lg '>Create Account </h3>

                  {/* email */}
                  <div className="form-control">
                      <label className="label ">
                          <span className="label-text text-black ">Email</span>
                      </label>
                      <input {...register("email")} type="email" placeholder="email" className="input input-bordered bg-white" required />
                  </div>

                  {/* pass */}
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Password</span>
                      </label>
                      <input {...register("password")} type="password" placeholder="password" className="input input-bordered bg-white" required />
                      <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                  </div>

                  {/* error text */}

                  <div className="form-control mt-6">
                      <input type='submit' value="Signup" className="btn bg-gsecond text-white border-none hover:text-white hover:bg-gmain" />
                  </div>

                  <p className='text-center'>have an account? <button onClick={() => document.getElementById('my_modal_5').showModal()}  className='underline text-red-400 ml-1'>Login</button> </p>

                  <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</Link>
              </form>
              {/* socials  */}
              <div className="text-center space-x-3 mb-5">
                  <button className="btn btn-circle bg-white border-none hover:bg-gmain" onClick={ handleRegister}>
                      <FaGoogle />
                  </button>
                  
              </div>
          </div>
          <Modal />
    </div>
  )
}

export default Signup