import { Rating } from '@mui/material';
import React from 'react';


const FeedbackDetails = ({review}) => {
    const {name, image, id, title, data, rating} = review;
    return (
        <div>
            <div className="shadow-2xl rounded-2xl px-6 py-10 bg-white">
                <p>{data}</p>
                <div style={{display : 'grid' , gridTemplateColumns: '1fr 3fr'}} className='mt-4'>
                    <div className="">
                        <img src={image} alt="" />
                    </div>
                    <div className="">
                        <h2 className='text-2xl font-bold'>{name}</h2>
                        <p>{title}</p>
                        
                    </div>
                </div>
                <Rating className='mt-4' name="read-only" value={rating} readOnly />
            </div>
        </div>
    );
};

export default FeedbackDetails;