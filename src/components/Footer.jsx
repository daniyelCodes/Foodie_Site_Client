import React from 'react'
import logo from "/logo.png"

const Footer = () => {
    return (
        <div className='bg-[#f8f7f7]'>
            <footer className="footer xl:p-24 py-10 px-4 text-base-content ">
                <aside>
                    <div className="flex items-center">
                        <a href='/'>
                            <img src={logo} alt="logo" className="h-10 w-10 hidden md:block" />
                        </a>
                        <a href='/' className="text-3xl font-bold text-black "> <span className='text-gsecond'>F</span>OODIE</a>
                    </div>
                    <p className="my-5 md:w-40">savor the artistry where every dish is a culinary masterpiece</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <a className="link link-hover" href='/about'>About us</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover" href='/about'>About us</a>
                    <a className="link link-hover">Events</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

                


            </footer>



        </div>
    )
}

export default Footer