import React from 'react';
import logo from '../../../public/images/logo-violet.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="flex flex-col text-black mx-16">
                <div className='footer-container'>
                    <div className="">
                        <img src={logo} alt="" />
                        <p className='py-4 text-gray-500'>Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi.</p>
                        <div className="">
                            <Link><FontAwesomeIcon className='bg-slate-300 p-3 rounded-full mr-3 hover:bg-red-500 t hover:text-white' icon={faTwitter} /></Link>
                            <Link><FontAwesomeIcon className='bg-slate-300 p-3 rounded-full mr-3 hover:bg-red-500 t hover:text-white' icon={faFacebook} /></Link>
                            <Link><FontAwesomeIcon className='bg-slate-300 p-3 rounded-full hover:bg-red-500 t hover:text-white' icon={faLinkedin} /></Link>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-4 gap-8">
                        <div className="ml-7">
                            <h3 className='text-2xl font-bold'>Our Link</h3>
                            <ul className=' text-gray-500'>
                                <Link><li className='mt-3'>About Us</li></Link>
                                <Link><li className='mt-3'>Course</li></Link>
                                <Link><li className='mt-3'>Help Center</li></Link>
                                <Link><li className='mt-3'>News</li></Link>
                                <Link><li className='mt-3'>Contact</li></Link>
                            </ul>
                        </div>
                        <div className="ml-7">
                            <h3 className='text-2xl font-bold'>Class</h3>
                            <ul className=' text-gray-500'>
                                <Link><li className='mt-3'>Programming</li></Link>
                                <Link><li className='mt-3'>Art & Design</li></Link>
                                <Link><li className='mt-3'>Bussiness Development</li></Link>
                                <Link><li className='mt-3'>Engineering</li></Link>
                                <Link><li className='mt-3'>Photography</li></Link>
                            </ul>
                        </div>
                        <div className="ml-7">
                            <h3 className='text-2xl font-bold'>Support</h3>
                            <ul className=' text-gray-500'>
                                <Link><li className='mt-3'>FAQ</li></Link>
                                <Link><li className='mt-3'>Contact</li></Link>
                                <Link><li className='mt-3'>Help Center</li></Link>
                                <Link><li className='mt-3'>Security</li></Link>
                                <Link><li className='mt-3'>Privacy Policy</li></Link>
                            </ul>
                        </div>
                        <div className="ml-7">
                            <h3 className='text-2xl font-bold'>News Letter</h3>
                            <p className='text-gray-500 mt-3'>Sign up foe our newsletter and get 34%
                                off your next course.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <aside className=" text-center text-sm">
                    <p>&copy; 2024 online education course. All Rights Reserved.</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;