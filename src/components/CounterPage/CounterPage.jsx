import React, { useState } from 'react';
import bg from '../../../public/images/bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCloudArrowDown, faTrophy } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counter.css'

const CounterPage = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <div className='mt-24 bg pb-14'>
            <div className="mx-14 relative">
                <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-7">
                    <div className="mt-14">
                        <div className="text-center">
                            <FontAwesomeIcon className='bg-gray-300 p-4 rounded-full text-2xl' icon={faUser} />
                            <div className="mt-3 text-white ">
                               <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                  <h3 className='text-4xl font-bold '>
                                    {counterOn && <CountUp
                                        start={1}
                                        end={15256}
                                        duration={2.75}
                                    >
                                    </CountUp>}+
                                </h3>
                               </ScrollTrigger>
                                <p className='mt-2'>HAPPY STUDENT</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="text-center">
                            <FontAwesomeIcon className='bg-gray-300 p-4 rounded-full text-2xl' icon={faStar} />
                            <div className="mt-3 text-white">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                  <h3 className='text-4xl font-bold '>
                                    {counterOn && <CountUp
                                        start={1}
                                        end={5065}
                                        duration={2.75}
                                    >
                                    </CountUp>}+
                                </h3>
                               </ScrollTrigger>
                                <p  className='mt-2'>GOOD COMMENT</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="text-center">
                            <FontAwesomeIcon className='bg-gray-300 p-4 rounded-full text-2xl' icon={faCloudArrowDown} />
                            <div className="mt-3 text-white ">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                  <h3 className='text-4xl font-bold '>
                                    {counterOn && <CountUp
                                        start={1}
                                        end={1524}
                                        duration={2.75}
                                    >
                                    </CountUp>}+
                                </h3>
                               </ScrollTrigger>
                                <p  className='mt-2'>SERVICES DOWNLOAD</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="text-center">
                            <FontAwesomeIcon className='bg-gray-300 p-4 rounded-full text-2xl' icon={faTrophy} />
                            <div className="mt-3 text-white ">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                  <h3 className='text-4xl font-bold '>
                                    {counterOn && <CountUp
                                        start={1}
                                        end={506}
                                        duration={2.75}
                                    >
                                    </CountUp>}+
                                </h3>
                               </ScrollTrigger>
                                <p  className='mt-2'>BEST AWARDS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterPage;