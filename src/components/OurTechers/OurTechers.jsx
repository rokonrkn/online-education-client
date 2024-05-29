import React from 'react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Techers.css'
import Teacher1 from '../../../public/images/1.jpg'
import Teacher2 from '../../../public/images/2.jpg'
import Teacher3 from '../../../public/images/3.jpg'
import Teacher4 from '../../../public/images/4.jpg'
import { Link } from 'react-router-dom';

const OurTechers = () => {

    const svgs = [
        { svg: (<Link> <svg width={20}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </Link>) },
        { svg: (<Link><svg width={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
        </Link>) },
        { svg: (<Link><svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
        </Link>) },
        { svg: (<Link><svg width={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
        </Link> ) }
    ];

    return (
        <div className=" p-10">
            <div className='mx-14'>
                <div className="">
                    <p className='text-sm text-red-500 font-bold'>OUR PROFESSIONALS</p>
                    <h2 className='text-4xl font-bold'>Meet Our Teachers</h2>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    freeMode={true}
                    className="mySwiper mt-16  h-80 "
                >
                    <SwiperSlide className=''>
                        <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group xl:flex xl:flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <img className='rounded-xl relative' src={Teacher1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group flex flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className='rounded-xl' src={Teacher2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                    <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group flex flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className='rounded-xl' src={Teacher3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                    <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group flex flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className='rounded-xl' src={Teacher4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                    <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group flex flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className='rounded-xl' src={Teacher1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                    <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group flex flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className='rounded-xl' src={Teacher2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                    <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group flex flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className='rounded-xl' src={Teacher3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                    <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group flex flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className='rounded-xl' src={Teacher4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                    <div className="h-[300px] absolute z-40 ml-52 mt-6">
                            <div className="group flex flex-col items-center justify-center w-min mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                                {/* + icon  */}
                                <div className="flex justify-center w-12 h-12 bg-[#cbcdcf] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                </div>
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <img className='rounded-xl' src={Teacher2} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OurTechers;