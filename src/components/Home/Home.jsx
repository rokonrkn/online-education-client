import React from 'react';
import img1 from '../../../public/images/1.png'
import Catagoriey from '../Catagoriey/Catagoriey';
import AboutEduan from '../AboutEduan/AboutEduan';
import CounterPage from '../CounterPage/CounterPage';
import Accodin from '../Accodin/Accodin';
import ChooseCareer from '../ChooseCareer/ChooseCareer';
import OurTechers from '../OurTechers/OurTechers';
import Feedback from '../Feedback/Feedback';
import Massge from '../Massge/Massge';
import 'animate.css';
// import OurTechers from '../OurTechers/OurTechers';

const Home = () => {

    return (
        <div className='mt-16'>
            <div className="bg-[#F4F7FF]">
                <div className=" lg:mx-16">
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 py-16">
                        <div className="items-center mt-24 animate__lightSpeedInLeft animate__animated">
                            <p className='text-[#F14D5D] text-md font-bold '>ALL THE BEST PLATFORM</p>
                            <h2 className='text-5xl mt-3 font-bold'>Best Online <span className='text-blue-900'>Courses & <br /> Upgrade</span> Your Skills</h2>
                            <p className='mt-6 text-xl text-gray-500'>Choose from 85,000 online video courses additions published Every month & upgrade your skills. Get started with us.</p>

                            <button className="group mt-16 relative h-8 flex w-52 items-center rounded-lg border-2 border-blue-900 p-4 text-blue-900"><span>Explore All Classes</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-blue-900 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                        </div>
                        <div className="animate__lightSpeedInRight animate__animated">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ********** */}
            <div className="">
                <Catagoriey></Catagoriey>
                <AboutEduan></AboutEduan>
                <CounterPage></CounterPage>
                <Accodin></Accodin>
                <ChooseCareer></ChooseCareer>
                <OurTechers></OurTechers>
                <Feedback></Feedback>
                <Massge></Massge>
            </div>
        </div>
    );
};

export default Home;