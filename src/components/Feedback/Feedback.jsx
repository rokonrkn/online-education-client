import React, { useEffect, useState } from 'react';
import FeedbackDetails from './FeedbackDetails';

const Feedback = () => {

    const [reveiw, setReveiw] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReveiw(data))
    }, [])

    return (
        <div className="bg-[#F4F7FF]">
            <div className='mx-16 pb-16'>
                <div className="text-center py-12">
                    <p className='text-sm text-red-500  font-bold'>EDUCATION FOR EVERYONE</p>
                    <h3 className='text-4xl font-bold mt-2'>Our Student's Feedback</h3>
                </div>
                <div className="grid xl:grid-cols-3 sm:grid-cols-1 gap-11">
                    {
                        reveiw.map(rev => <FeedbackDetails
                            key={rev.id}
                            review={rev}
                        >

                        </FeedbackDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;