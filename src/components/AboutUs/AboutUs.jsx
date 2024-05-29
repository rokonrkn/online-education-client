import React from 'react';
import './About.css'
import { Link } from 'react-router-dom';
import img from '../../../public/images/1 (5).png'
import img2 from '../../../public/images/techers.jpg'
import img3 from '../../../public/images/t.jpg'
import img4 from '../../../public/images/3 (2).jpg'
import img5 from '../../../public/images/4 (1).jpg'
import img6 from '../../../public/images/5.jpg'
import img7 from '../../../public/images/6.jpg'

const AboutUs = () => {
    return (
        <div className="">
            <div className='background min-h-72 mt-20'>
                <div className='xl:mx-16'>
                    <div className="">
                        <h3 className=' text-center pt-28  text-4xl text-black'>About Us</h3>
                        <p className='text-center text-xl '><Link className='no-underline text-black' to={`/`}><span>Home</span></Link> / <span className='text-blue-600'>About</span></p>
                    </div>
                </div>
            </div>
            <div className="xl:mx-16 content3 ">
                <div className="grid xl:grid-cols-2 gap-20  mt-20 ">
                    <div className="">
                        <img src={img} alt="" />
                    </div>
                    <div className="mt-24 ">
                        <p className='py-1 px-5 bg-red-100 text-red-600 w-60 font-bold border-l-4 border-red-700' >Start learning fee</p>
                        <h2 className='text-4xl'>Online Course can be Tailored to Need of learners</h2>
                        <p className='text-gray-600 mt-4' >Through a combination of lectures, readings, discussions, students will gain a solid foundation in educational psychology.</p>
                        <li>International course collection in 14 languages</li>
                        <li>Top certifications in tech and business</li>
                        <li>Access to 35,000+ top Eduan courses, anytime, anywhere</li>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 gap-10 mt-12">
                    <div className="image min-h-60">
                        <h2 className='text-4xl p-8'>Our Most Experience <br /> Professor</h2>
                        <button className="group ml-8 relative h-8 flex w-60 items-center rounded-lg border-2 border-blue-900 p-4 text-blue-900"><span>Become An Instructor</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-blue-900 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                    </div>
                    <div className="grid xl:grid-cols-2">
                        <div className="gridfr">
                            <div className="container">
                                {/* <h3 className="title">Text fadeIn bottom right</h3> */}
                                <div className="content">
                                    <div className="content-overlay"></div>
                                    <img className='content-image w-52' src={img2} alt="" />
                                    <div className="content-details fadeIn-bottom fadeIn-right">
                                        <h3 className='text-xl'>Persle Montana</h3>
                                        <p>Lead Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gridfr">
                            <div className="container">
                                <div className="content">
                                    <div className="content-overlay"></div>
                                    <img className='content-image w-52' src={img3} alt="" />
                                    <div className="content-details fadeIn-bottom fadeIn-right">
                                        <h3 className='text-xl'>Persle Montana</h3>
                                        <p>Lead Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 mt-12">
                    <div className="">
                        <div className="container">
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img className='content-image w-52' src={img4} alt="" />
                                <div className="content-details fadeIn-bottom fadeIn-right">
                                    <h3 className='text-xl'>Persle Montana</h3>
                                    <p>Lead Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gridfr">
                        <div className="container">
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img className='content-image' src={img5} alt="" />
                                <div className="content-details fadeIn-bottom fadeIn-right">
                                    <h3 className='text-xl'>Persle Montana</h3>
                                    <p>Lead Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gridfr">
                        <div className="container">
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img className='content-image w-52' src={img6} alt="" />
                                <div className="content-details fadeIn-bottom fadeIn-right">
                                    <h3 className='text-xl'>Persle Montana</h3>
                                    <p>Lead Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gridfr">
                        <div className="container">
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img className='content-image w-52' src={img7} alt="" />
                                <div className="content-details fadeIn-bottom fadeIn-right">
                                    <h3 className='text-xl'>Persle Montana</h3>
                                    <p>Lead Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;