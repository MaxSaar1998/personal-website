import React from 'react';
import { Link } from 'react-router-dom';
//import './navbar.css'; // Make sure to create and style this CSS file

// TODO: make the navbar responsive for mobile
const Navbar = () => {
    return (
        <nav
            className="border shadow-lg overflow-hidden p-2 bg-white
                shadow-stone-950/5 sticky top-0 w-full"
        >
            <div className="max-w-4xl mx-auto w-full flex flex-row justify-between">
                <h1 className='font-ssans3bold'>
                    Max Saar
                </h1>
                <ul className="flex flex-row ">
                    <li className='mx-2'>
                        <Link to="/" className=''>Home</Link>
                    </li>
                    <li className='mx-2'><Link to="/about">About</Link></li>
                    <li className='mx-2'><Link to="/portfolio">Portfolio</Link></li>
                    <li className='mx-2'><Link to="/contact">Contact</Link></li>
                </ul>
            </div>


        </nav>
    );
};

export default Navbar;