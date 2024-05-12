import React, { useContext, useState } from 'react'
import useCart from '../../hooks/useCart'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { AuthContext } from '../../contexts/AuthProvider'

const CartPage = () => {
    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCart()
    const [cartItems, setCartItems] = useState([])


    //calc price
    const calculatePrice = (item) => {
        return item.price * item.quantity
    }

    //handle delete
    const handleDelete = async (item) => {
        //show alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //delete from database
                fetch(`https://foodie-server-lnwg.onrender.com/carts/${item._id}`, {
                    method: 'DELETE'
                }).then(res => res.json()).then(data => {
                    if (data.deletedCount > 0) {
                        //refetch
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })

            }
        });
    }

    //handle decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            fetch(`https://foodie-server-lnwg.onrender.com/carts/${item._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ quantity: item.quantity - 1 })

            }).then(res => res.json()).then(data => {
                const updatedCart = cartItems.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 }
                    }
                    return cartItem;
                })
                refetch()
                setCartItems(updatedCart)
            })
            refetch()
        } else {
            //delete from database
            fetch(`https://foodie-server-lnwg.onrender.com/carts/${item._id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                if (data.deletedCount > 0) {
                    //refetch
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
        }
    }

    //handle increase
    const handleIncrease = (item) => {
        fetch(`https://foodie-server-lnwg.onrender.com/carts/${item._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: item.quantity + 1 })

        }).then(res => res.json()).then(data => {
            const updatedCart = cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem;
            })
            refetch()
            setCartItems(updatedCart)
        })
        refetch()
    }


    //calc total price
    const calcTotalPrice = cart.reduce((total, item) => {
        return total + calculatePrice(item)
    }, 0)


    return (
        <div className='section-container '>
            <div className='container max-w-screen-2xl mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>

                <div className="py-36 flex flex-col justify-center items-center gap-8">
                    {/* cart banner */}
                    <div className=" space-y-7">
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-[#252525]'> <span className='text-gsecond'>Items Added To Cart</span></h2>

                    </div>

                </div>
                {/* table for cart */}
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-gsecond text-white'>
                                <tr>
                                    <th>#</th>
                                    <th>Food</th>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    cart.map((item, index) => (

                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item.image} alt={item.name} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td className='font-bold'>
                                                {item.name}

                                            </td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <button className="btn btn-xs bg-gsecond border-none hover:bg-gmain  text-white " onClick={() => handleDecrease(item)}>-</button>
                                                    <input type="number" name="" id="" value={item.quantity} className='w-10 mx-2 text-center overflow-hidden appearance-none bg-white' onChange={() => console.log(item.quantity)} />
                                                    <button className="btn btn-xs  bg-gsecond border-none  hover:bg-gmain text-white " onClick={() => handleIncrease(item)}>+</button>
                                                </div>
                                            </td>
                                            <td>${calculatePrice(item).toFixed(2)}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">
                                                    <FaTrash className="text-red-500" onClick={() => handleDelete(item)} />
                                                </button>
                                            </th>
                                        </tr>
                                    )

                                    )
                                }


                            </tbody>


                        </table>
                    </div>
                </div>



            </div>

            {/* customer details  */}
            <div className='my-12 flex flex-col md:flex-row justify-between items-start ' >
                <div className="md:w-1/2 space-y-3">
                    <h3 className='text-black'>Customer Details</h3>
                    <p>Name: {user ? user.displayName : 'user'}</p>
                    <p>Email: {user ? user.email : 'user email'}</p>
                </div>
                <div className="md:w-1/2 space-y-3">
                    <h3 className='font-medium text-black'>Shopping Details</h3>
                    <p>Total items : {cart.length}</p>
                    <p className='text-xl'>Total Price: ${calcTotalPrice.toFixed(2)}</p>
                    <button className='btn bg-gsecond border-none text-white'>Proceed to Checkout</button>
                </div>
                <div className="md:w-1/2 space-y-3"></div>
            </div>

        </div>
    )
}

export default CartPage