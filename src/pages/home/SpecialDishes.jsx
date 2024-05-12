/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../../components/Card';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "gsecond" }} onClick={onClick} >
            next
        </div>

    );

}
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "gsecond" }} onClick={onClick} >
            prev
        </div>
    );
}

const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([]);
    const slider = useRef(null);

    useEffect(() => {
        fetch("https://foodie-server-lnwg.onrender.com/menu").then((res) => res.json()).then((data) => {
            const special = data.filter((item) => item.category === "popular");
            setRecipes(special);
        });
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='section-container my-20 relative'>
            <div className="text-left">
                <h2 className='title md:w-96'>Featured Dishes</h2>
            </div>

            <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
                <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5 bg-gsecond border-none hover:bg-gmain '><FaAngleLeft className='w-8 h-8 p-1 text-white ' /> </button>
                <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-gsecond border-none hover:bg-gmain '><FaAngleRight className='w-8 h-8 p-1 text-white' /></button>
            </div>


            <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5 '>
                {recipes.map((item, index) => (
                    <Card key={index} item={item} />
                ))
                }
            </Slider>


        </div>


    )
}

export default SpecialDishes