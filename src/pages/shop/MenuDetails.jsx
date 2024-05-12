/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

const MenuDetails = () => {
 
  const { user } = useContext(AuthContext)
  const {id} = useParams();
  const [data, setData] = useState({});


  const handleAddToCart = () => {
    // if is  logged in  add to cart if not redirect to login
    if (user && user?.email) {
      const cartItem = { menuItemID: id, name, recipe, image, price, email: user.email } = data
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
          Navigate('/', { state: { from: location } })
        }
      });
    }

  }
 
 
   //import context
  //get data from database
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://foodie-server-lnwg.onrender.com/menu` );
        const data = await response.json();
        const specific =  data.find((item) => item._id === id);
        setData(specific);
      } catch (error) {
        console.log("no data");
      }
    };
    fetchData();
  }, []);

  

  


  return (
    <div>
      
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row lg:h-[100vh] lg:w-[100rem] ">
          <img src={data.image} className="max-w-sm rounded-lg shadow-2xl lg:h-[50vh] lg:w-[100rem]" />
          <div className=''>
            <h1 className="text-5xl font-bold">{data.name}</h1>
            <p className="py-6">{data.recipe}</p>
            
            <div className = "flex justify-end gap-3 ">
              <p className="py-6">${data.price}</p>
            <button  className="btn btn-primary bg-gsecond border-none text-white hover:bg-gmain " onClick={() => handleAddToCart(data)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDetails