import React from 'react';
//import './navbar.css'; // Make sure to create and style this CSS file

const Navbar = () => {
    return (
        <nav
            className="border shadow-lg overflow-hidden p-2 bg-white
                border-stone-200 shadow-stone-950/5 sticky top-0 mx-auto w-full max-w-screen-xl"
        >


            <ul className="flex flex-row ">
                <li className='mx-2'>
                    <a href="/">MyWebsite</a>
                </li>
                <li className='mx-2'><a href="/about">About</a></li>
                <li className='mx-2'><a href="/services">Services</a></li>
                <li className='mx-2'><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;