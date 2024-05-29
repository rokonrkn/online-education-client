import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='background min-h-72 mt-20'>
                <div className='xl:mx-16'>
                    <div className="">
                        <h3 className=' text-center pt-28  text-4xl text-black'>About Us</h3>
                        <p className='text-center text-xl '><Link className='no-underline text-black' to={`/`}><span>Home</span></Link> / <span className='text-blue-600'>About</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;