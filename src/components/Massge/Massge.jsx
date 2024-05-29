import React from 'react';
import img from '../../../public/images/1 (3).png'
import './Massge.css'

const Massge = () => {
    return (
        <div className='mt-20'>
            <div className='bgimage xl:mx-16 sm-10 flex'>
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="items-center flex xl:ml-16">
                    <h3 className='xl:text-5xl text-white font-bold '>Are you ready to take <br /> the next step?</h3>
                </div>
            </div>
        </div>
    );
};

export default Massge;