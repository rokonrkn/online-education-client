import React from 'react';
import img from '../../../public/images/1 (2).png'
import img1 from '../../../public/images/2 (2).png'

const ChooseCareer = () => {
    return (
        <div className='bg-[#F4F7FF] mt-20'>
            <div className="mx-16 py-20">
                <div className="text-center">
                    <h5 className='text-red-800 text-lg uppercase font-bold'>Choose Your Career</h5>
                    <h5 className='text-4xl font-bold'>Choose Your Career</h5>
                </div>
                <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-9 mt-10">
                        <div className="">
                            <div className="grid xl:grid-cols-2 bg-white px-6 py-10 rounded-2xl shadow-2xl">
                                <div className="">
                                    <img src={img} alt="" />
                                </div>
                                <div className="">
                                    <h4 className='text-[#395BDF]'>Build Your Career</h4>
                                    <h2 className='text-xl font-bold'>Join Our UI/UX Design Course & Build Your Skill.</h2>
                                    <button className="group mt-6 relative flex w-36 items-center rounded-lg border-2 border-blue-900 p-4 text-blue-900"><span>Join Now</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-blue-900 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="grid xl:grid-cols-2 bg-white px-6 py-10 rounded-2xl shadow-2xl">
                                <div className="">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="">
                                    <h4 className='text-[#395BDF]'>Start From Today</h4>
                                    <h2 className='text-xl font-bold'>Join Our Marketing Course & Build Your Skill.</h2>
                                    <button className="group mt-6 relative flex w-36 items-center rounded-lg border-2 border-blue-900 p-4 text-blue-900"><span>Join Now</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-blue-900 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseCareer;