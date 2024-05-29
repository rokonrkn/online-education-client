import React from 'react';
import img1 from '../../../public/images/a-1.jpg'
import img2 from '../../../public/images/a-2.jpg'
import img3 from '../../../public/images/2.png'
import bg from '../../../public/images/bg.jpg'

const AboutEduan = () => {
    return (
        <>
        <div className='mx-16 mt-20'>
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-10">
                <div className="grid xl:grid-cols-2 gap-10">
                    <div className="">
                        <div className="bg-red-800 py-5 px-8 rounded-2xl ">
                            <h3 className='text-3xl font-bold  text-white'>24 Years Of</h3>
                            <p className='text-xl text-white'>Experiences</p>
                        </div>
                        <div className="mt-10 ">
                            <img className='rounded-2xl' src={img1} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <img className='rounded-2xl' src={img2} alt="" />
                        <div className=''>
                            <div className="flex shadow-2xl mt-8 p-5">
                                <div className=""><img src={img3} alt="" /></div>
                                <div className="ml-4">
                                    <h3 className='text-black text-3xl font-bold'>32K+</h3>
                                    <p>Positive Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <p className='text-red-900 font-bold'>ABOUT EDUAN</p>
                        <h3 className='text-4xl  font-bold mt-3 text-gray-900 '>A New Different Way To <br />
                            Improve Your Skills.</h3>
                        <p className='text-gray-500 mt-5'>Education is one of the most essential and valuable assets that an individual can possess, It plays a pivotal role in shaping.</p>
                    </div>
                    <div className="grid xl:grid-cols-2 gap-9 mt-11 ">
                        <div className="shadow-2xl p-5 rounded-2xl">
                            <h4 className='text-2xl text-gray-900'>Build Your Career</h4>
                            <p className='mt-4 text-gray-500'>Online Course Quickly From Anywhere & anytime.</p>
                        </div>
                        <div className="shadow-2xl p-5 rounded-2xl">
                            <h4 className='text-2xl text-gray-900'>Grow Your Skills</h4>
                            <p className='mt-4 text-gray-500'>Online Course Quickly From Anywhere & anytime.</p>
                        </div>
                        <button className="group mt-6 relative flex w-44 items-center rounded-lg border-2 border-blue-900 p-4 text-blue-900"><span>Explore More</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-blue-900 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutEduan;