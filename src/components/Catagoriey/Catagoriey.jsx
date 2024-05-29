import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Cata.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faLaptop, faMusic, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Catagoriey = () => {
    return (
        <div className='mx-16 py-20'>
            <div className="text-center">
                <p className='text-md font-bold text-red-500'>TOP CATEGORIES</p>
                <h3 className='text-4xl font-bold'>Explore Our Top Categories</h3>
            </div>
            <Swiper slidesPerView={5} spaceBetween={70}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-16"
            >
                <SwiperSlide className=' bg-[#F4F7FF] xl:w-11 rounded-xl'>
                    <div className="text-center py-7 px-2">
                        <FontAwesomeIcon className='text-blue-800 text-4xl mb-3' icon={faBagShopping} />
                        <h3 className='font-bold text-xl '>Account & Business</h3>
                        <p>364+ Course Available</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' bg-[#F4F7FF] rounded-xl '>
                    <div className="text-center py-10">
                        <FontAwesomeIcon className='text-blue-800 text-4xl mb-3' icon={faMusic} />
                        <h3 className='font-bold text-xl'>Dench & Music</h3>
                        <p>364+ Course Available</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' bg-[#F4F7FF] rounded-xl '>
                    <div className="text-center py-10">
                        <FontAwesomeIcon className='text-blue-800 text-4xl mb-3' icon={faLaptop} />
                        <h3 className='font-bold text-xl'>Photography</h3>
                        <p>364+ Course Available</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' bg-[#F4F7FF] rounded-xl '>
                    <div className="text-center py-10">
                        <FontAwesomeIcon className='text-blue-800 text-4xl mb-3' icon={faPenToSquare} />
                        <h3 className='font-bold text-xl'>Web Development</h3>
                        <p>364+ Course Available</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' bg-[#F4F7FF] rounded-xl'>
                    <div className="text-center py-10">
                        <FontAwesomeIcon className='text-blue-800 text-4xl mb-3' icon={faBagShopping} />
                        <h3 className='font-bold text-xl'>Account & Business</h3>
                        <p>364+ Course Available</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' bg-[#F4F7FF] rounded-xl '>
                    <div className="text-center py-10">
                        <FontAwesomeIcon className='text-blue-800 text-4xl mb-3' icon={faMusic} />
                        <h3 className='font-bold text-xl'>Dench & Music</h3>
                        <p>364+ Course Available</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' bg-[#F4F7FF] rounded-xl '>
                    <div className="text-center py-10">
                        <FontAwesomeIcon className='text-blue-800 text-4xl mb-3' icon={faLaptop} />
                        <h3 className='font-bold text-xl'>Photography</h3>
                        <p>364+ Course Available</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' bg-[#F4F7FF] rounded-xl '>
                    <div className="text-center py-10">
                        <FontAwesomeIcon className='text-blue-800 text-4xl mb-3' icon={faPenToSquare} />
                        <h3 className='font-bold text-xl'>Web Development</h3>
                        <p>364+ Course Available</p>
                    </div>
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Catagoriey;