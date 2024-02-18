import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='sticky'>
            <div id="nav_interior" className='flex justify-between items-center max-sm:flex-col max-sm:gap-5'>
                <div id="logo" className="font-bold text-[30px]">Anna Purna</div>
                <ul type='none' id='nav_links' className='flex gap-8 items-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ngo">NGOs</Link></li>
                    <li><Link to="/donors">Donors</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar