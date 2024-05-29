import React, { useEffect, useState } from 'react';
import './CrouseList.css'
import { Link } from 'react-router-dom';
import CourseListDetails from './CourseListDetails';

const CouresList = () => {

    const [course, setCourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div className="">
            <div className="mt-20 backgroud min-h-72">
                <div className='xl:mx-16'>
                    <div className="">
                        <h3 className=' text-center pt-28  text-4xl text-black'>Course Archive</h3>
                        <p className='text-center text-xl '><Link className='no-underline text-black' to={`/`}><span>Home</span></Link> / <span className='text-blue-600'>Course</span></p>
                    </div>
                </div>
            </div>
            <div className="xl:mx-16 card-container">
                <div className="grid xl:grid-cols-4 gap-10">
                    {
                        course.map(cour => <CourseListDetails
                            key={cour.id}
                            courselist={cour}
                        ></CourseListDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CouresList;