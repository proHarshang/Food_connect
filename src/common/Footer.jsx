import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Footer = () => {

    const [isRegion_selection, setIsRegion_selection] = useState(false)
    const [selectedRegion, setSelectedRegion] = useState({
        Value: 'English',
        region: 'English',
    })

    const toggleRegionSelectorList = () => {
        setIsRegion_selection(!isRegion_selection);
    }

    const handleClickedRegion = (event) => {
        const selectedValue = event.target.getAttribute('data-value');
        const RegionName = event.target.textContent;
        setIsRegion_selection(false)
        setSelectedRegion({
            Value: selectedValue,
            region: RegionName.trim(),
        });
    }

    return (
        <>
            {/* <div className="cursor-pointer rounded-full h-14 aspect-square bg-green-600 flex justify-center items-center m-4 sticky bottom-0 left-full -translate-y-3 -translate-x-3 text-white text-2xl shadow-lg leading-[normal] active:scale-90"><IoChatboxEllipses /></div> */}
            <footer className='mt-9'>
                <div className="footer_interior py-16 container mx-auto flex max-sm:flex-col justify-between w-11/12 gap-y-12">
                    <div className='useful_links flex max-sm:flex-col gap-x-16 gap-y-14'>
                        <div>
                            <h6 className='mb-6 max-sm:mb-4'>Useful links</h6>
                            <ul type='none'>
                                <li><a href="/">Home</a></li>
                                <li><a href="ngo">NGOs</a></li>
                                <li><a href="/donors">Donors</a></li>
                                <li><a href="/donate">Donate</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='mb-6 max-sm:mb-4'>The Company</h6>
                            <ul type='none'>
                                <li><a href="/register">Register</a></li>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/about">Contact Us</a></li>
                                <li><a href="/about">About US</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='social_icons flex items-end max-sm:items-start flex-col justify-between max-sm:gap-y-11'>
                        <div>
                            <h6 className='mb-6 max-sm:mb-4'>Language</h6>
                            <ul>
                                <li id='region_selection'>
                                    <form>
                                        <button type='button' onClick={toggleRegionSelectorList}>{selectedRegion.region} <IoIosArrowUp className="text-base" /></button>
                                        <ul role="list" className={`countryList disclosure__list left-1/3 max-sm:left-full max-sm:shadow-lg ${isRegion_selection ? 'block' : 'hidden'}`}>
                                            <li className="disclosure__item" tabIndex={-1}>
                                                <Link to="#" onClick={handleClickedRegion} data-value="English">
                                                    English
                                                </Link>
                                            </li>
                                            <li className="disclosure__item" tabIndex={-1}>
                                                <Link to="#" onClick={handleClickedRegion} data-value="Hindi">
                                                    Hindi
                                                </Link>
                                            </li>
                                        </ul>
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <ul type="none" className='flex gap-x-5 max-sm:justify-evenly max-sm:w-full'>
                            <li><a href="#"><FaFacebookF className='w-5 max-sm:w-6 h-5 max-sm:h-6' /></a></li>
                            <li><a href="#"><FaInstagram className='w-5 max-sm:w-6 h-5 max-sm:h-6' /></a></li>
                            <li><a href="#"><FaXTwitter className='w-5 max-sm:w-6 h-5 max-sm:h-6' /></a></li>
                            <li><a href="#"><FaYoutube className='w-5 max-sm:w-6 h-5 max-sm:h-6' /></a></li>
                            <li><a href="#"><FaLinkedinIn className='w-5 max-sm:w-6 h-5 max-sm:h-6' /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer