import React, { useState } from 'react';
import img from '../../../public/images/1 (1).png'
import img2 from '../../../public/images/2 (1).png'
import img3 from '../../../public/images/shape.png'
import { Box, Rating } from '@mui/material';

const Accodin = () => {

    const accordionData = [
        { title: 'Web Development', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500', pragaph: 'There are many variations of passages of Lorem Ips um available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.Many variations of passages of Lorem Ipsum one available, but the majority have suffered alteration in Sketch, Adobe XD or Figma.' },
        { title: 'Web Development', subtitle: 'Hi!~ How are you doing? This is my new', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500', pragaph: 'There are many variations of passages of Lorem Ips um available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.Many variations of passages of Lorem Ipsum one available, but the majority have suffered alteration in Sketch, Adobe XD or Figma.' },
        { title: 'Web Development', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-red-500', colorBorder: 'border-red-500', pragaph: 'There are many variations of passages of Lorem Ips um available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.Many variations of passages of Lorem Ipsum one available, but the majority have suffered alteration in Sketch, Adobe XD or Figma.' },
        { title: 'Web Development', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500', pragaph: 'There are many variations of passages of Lorem Ips um available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.Many variations of passages of Lorem Ipsum one available, but the majority have suffered alteration in Sketch, Adobe XD or Figma.' },
        { title: 'Web Development', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500', pragaph: 'There are many variations of passages of Lorem Ips um available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.Many variations of passages of Lorem Ipsum one available, but the majority have suffered alteration in Sketch, Adobe XD or Figma.' }];
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
        <div className='mx-16 mt-24'>
            <div className="">
                <div className="flex ">
                    <div className="text-4xl font-bold">Our Featured Courses</div>
                    <div className="ml-10"><img src={img3} alt="" /></div>
                </div>
                <div className="mx-auto flex mt-10 min-h-[600px] w-fit gap-1 rotate-90 md:rotate-0">
                    {accordionData?.map((data, idx) => (
                        <div key={idx} className="flex ">
                            {/* toggle item */}
                            <button onClick={() => handleToggle(idx)} className={`flex h-full w-20 flex-col items-center justify-around ${data?.colorBg} relative rounded-lg text-white`}> {isActive === idx && <span className={`h-0 w-0 ${data?.colorBorder} absolute left-10 top-4 rotate-[225deg] border-b-[20px] border-r-[20px] border-r-transparent`}></span>}
                                <p className="-rotate-90 md:rotate-0">{idx + 1}</p>
                                <p className="rotate-[270deg] text-xl"> Courses</p>
                                <p className="rotate-[270deg] text-xl"> Popular</p>
                            </button>
                            {/* container */}
                            <div className={`grid place-content-center rounded-lg bg-gray-200 dark:bg-[#ffffff] shadow-2xl ${isActive === idx ? 'opacity-1 scale-1 h-[600px] xl:h-full sm:h-28 w-[300px] xl:w-[500px] sm:w-[200px] px-5' : 'w-0 scale-0 opacity-0'} xl:ml-2 xl:mr-2 mt-12 xl:mt-0 text-black duration-300 ease-in-out -rotate-90 md:rotate-0`}>
                                <div className="sm:ml-48 xl:ml-5">
                                    <h3 className='py-4 px-6 text-3xl bg-blue-700 w-32 rounded-2xl text-white font-bold absolute ml-[290px]'>$550</h3>
                                    <img className='relative' src={img} alt="" />
                                    <h2 className="font-black lg:text-2xl dark:text-black">{data?.title}</h2>
                                    <p className="text-black dark:text-black">{data?.pragaph}</p>
                                    <div className="flex">
                                        <div className="mt-4">
                                            <img className='mb-2' src={img2} alt="" />
                                            <Rating
                                                value={5}
                                                precision={0.5}
                                            />
                                        </div>
                                        <div className="mt-4 ml-3">
                                            <h2 className='text-5xl font-bold'>4.5 <span className='text-xl font-normal'>(10)</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accodin;