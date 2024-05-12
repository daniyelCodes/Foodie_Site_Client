/* eslint-disable react/prop-types */

import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { AuthContext } from '../contexts/AuthProvider'
import Swal from 'sweetalert2'


const Card = ({ item }) => {

    const { name, image, price, recipe, _id } = item
    const [isHeartFilled, setIsHeartFilled] = useState(false)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    

    // add to cart
    const handleAddToCart = (item) => {
        // if is  logged in  add to cart if not redirect to login
        if (user && user?.email) {
            const cartItem = { menuItemID: _id, name, recipe, quantity: 1, image, price, email: user.email }
            fetch("https://foodie-server-lnwg.onrender.com/carts", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(cartItem)
            }).then(res => res.json()).then(data => {
                if (data.menuItemID) {
                    // alert user that item has been added to cart
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Item added to cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (data.message === 'Item already in cart') {
                    Swal.fire("Item already in cart", "", "warning");
                }
            })
        }
        else {
            Swal.fire({
                title: "Please Login?",
                text: "Please login to add item to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/', { state: { from: location } })
                }
            });
        }

    }

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled)
    }
    return (

        <div className="card w-96 bg-white shadow-xl relative">
            <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-gmain ${isHeartFilled ? "text-rose-500" : "text-white"}`} onClick={handleHeartClick}>
                <FaHeart className='h-5 w-5' />
            </div>
            <Link to={`/menuDetails/${item._id}`}>
                <figure><img src={item.image} alt="food" className='hover:scale-105 transition-all duration-200 md:h-72' /></figure>
            </Link>
            <div className="card-body">
                <Link to={`/menuDetails/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>
                <p>{item.recipe}</p>
                <div className="card-actions justify-end items-center mt-2">
                    <h5 className='font-semibold'><span className='text-sm'>$</span>{item.price}</h5>
                    <button className="btn text-white bg-gsecond border-none " onClick={() => handleAddToCart(item)}>ADD TO CART</button>
                </div>
            </div>
        </div>

    )
}

export default Card