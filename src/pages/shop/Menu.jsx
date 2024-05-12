import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import '../../App.css'
import { FaFilter } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Menu = () => {
    const [menu, setMenu] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortOption, setSortOption] = useState('default')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)



    useEffect(() => {
        //fetch data from backend
        const fetchdata = async () => {
            try {
                const response = await fetch("https://foodie-server-lnwg.onrender.com/menu");  //fetch data from backend
                const data = await response.json(); //convert response to json
                setMenu(data)
                setFilteredItems(data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchdata()

    }, [])

    //filter data based on category

    const filterItems = (category) => {
        const filtered = category === 'all' ? menu : menu.filter(item => item.category === category)

        setFilteredItems(filtered) //set filtered items to state
        setSelectedCategory(category) //set selected category to state
        setCurrentPage(1) //reset current page to 1
    }

    //show all data
    const showAll = () => {
        setFilteredItems(menu)
        setSelectedCategory('all')
        setCurrentPage(1)
    }

    // sorting based on az, za, lowtohigh, hightolow
    const handleSortChange = (option) => {
        setSortOption(option);
        let sortedItems = [...filteredItems];
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "lowtohigh":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "hightolow":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilteredItems(sortedItems);
        setCurrentPage(1);
    }



    //pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);




    return (
        <div>
            {/* menu */}
            <div className='container max-w-screen-2xl mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>

                <div className="py-48 flex flex-col  justify-center items-center gap-8">
                    {/* texts left side */}
                    <div className="text-center space-y-7">
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-[#252525]'>For the Love of Delicious <span className='text-gsecond'>Food</span></h2>
                        <p className='text-xl text-[#4A4A4A] md:w-4/5 mx-auto'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>

                    </div>



                </div>
            </div>



            {/* menu shop */}
            <div className="section-container ">
                {/* filter */}
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>

                    <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                        {/* cat btns */}
                        <button onClick={showAll} className={selectedCategory === 'all' ? "active" : ""}>All</button>
                        <button onClick={() => filterItems("salad")} className={selectedCategory === 'salad' ? "active" : ""} >Salad</button>
                        <button onClick={() => filterItems("pizza")} className={selectedCategory === 'pizza' ? "active" : ""}>Pizza</button>
                        <button onClick={() => filterItems("soup")} className={selectedCategory === 'soup' ? "active" : ""}>Soup</button>
                        <button onClick={() => filterItems("dessert")} className={selectedCategory === 'dessert' ? "active" : ""}>Dessert</button>
                        <button onClick={() => filterItems("drinks")} className={selectedCategory === 'drinks' ? "active" : ""}>Drinks</button>
                    </div>

                    <div className="flex justify-end mb-4 rounded-sm">

                        <div className="bg-black">
                            <FaFilter className="h-4 w-4 text-white" />
                        </div>

                        <select name="sort" id="sort" onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className='bg-black text-white px-2 py-1 rounded-sm'>

                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="lowtohigh"> Low to High</option>
                            <option value="hightolow"> High to Low</option>
                        </select>

                    </div>



                </div>



                {/* product card */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 '>
                    {
                        currentItems.map((item) => (
                            
                                <Card key={item._id} item={item} />
                            

                        ))
                    }


                </div>
            </div>

            {/* pagination */}
            <div className="flex justify-center py-6">

                {
                    Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
                        <button key={index + 1} onClick={() => paginate(index + 1)} className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-gsecond text-white" : "bg-gray-200"}`}>{index + 1}</button>
                    ))
                }

            </div>
        </div>
    )
}

export default Menu