import React from 'react'
import '../../../src/App.css'

const categoryItems = [
    { id: 1, title: "Main Dish", desc: "(86 dishes)", image: "/public/images/home/category/img1.png" },
    { id: 2, title: "Breakfast", desc: "(12 breakfast)", image: "/images/home/category/img2.png" },
    { id: 3, title: "Dessert", desc: "(86 desert)", image: "/images/home/category/img3.png" },
    { id: 4, title: "Browse All", desc: "(255 items)", image: "/images/home/category/img4.png" }
]

const Categories = () => {
    return (
        <div className='section-container py-16'>
            <div className="text-center">
                <h2 className='title'>Popular Categories</h2>
            </div>


            <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
                {categoryItems.map((item) => (
                    <div className="bg-white py-6 px-5 rounded-md shadow-lg w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all" key={item.id} >
                        <div className="flex w-full mx-auto items-center justify-center">
                            <img src={item.image} alt='' className='bg-[#c1f1c6] p-5 rounded-full w-28 h-28' />
                        </div>
                        <div className="mt-5 space-y-1">
                            <h5 className='text-lg'>{item.title}</h5>
                            <p className='text-gray-500'>{item.desc}</p>
                        </div>
                    </div>
                ))}
             </div>



        </div>


    )
}

export default Categories