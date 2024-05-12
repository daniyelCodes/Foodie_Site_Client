import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import useAxios from '../hooks/useAxios';
import useAuth from '../hooks/useAuth';


const Modal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signInWithGmail, login } = useAuth();
    const [errorMessage, setErrorMessage] = useState('')

    //redirect
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        // console.log(email, password)
        login(email, password).then((result) => {
            const user = result.user;
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " logged in successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            document.getElementById('my_modal_5').close()
            navigate(from, { replace: true })
        }).catch(() => {
            const errorMessage = "Invalid email or password";
            setErrorMessage(errorMessage)
        });

    }


    //google sign in 
    const handleLogin = () => {
        signInWithGmail().then((result) => {
            const user = result.user;
            Swal.fire({
                position: "center",
                icon: "success",
                title: " logged in successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            document.getElementById('my_modal_5').close()
            navigate(from, { replace: true })
        }).catch((error) => {
            console.log(error)
        });

    }
    return (

        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle ">
            <div className="modal-box bg-white ">
                <div className="modal-action flex flex-col justify-center mt-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                        <h3 className='font-bold text-lg '>Please Login!</h3>

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
                        {
                            errorMessage ? <p className='text-red-500 text-sm italic'>{errorMessage}</p> : ''
                        }

                        <div className="form-control mt-6">
                            <input type='submit' value="Login" className="btn bg-gsecond text-white border-none hover:text-white hover:bg-gmain" />
                        </div>

                        <p className='text-center'>Dont have an account? <Link to={"signup"} className='underline text-red-400 ml-1'>Sign-up Now</Link> </p>

                        <button htmlFor="my_modal_5" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_5').close()}>✕</button>
                    </form>
                    {/* socials  */}
                    <div className="text-center space-x-3 mb-5">
                        <button className="btn btn-circle bg-white border-none hover:bg-gmain" onClick={handleLogin}>
                            <FaGoogle />
                        </button>
                        
                    </div>
                </div>
            </div>
        </dialog>

    )
}

export default Modal