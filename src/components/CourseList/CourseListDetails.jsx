import React from 'react';
import Card from 'react-bootstrap/Card';
import { BiSolidUser } from 'react-icons/bi';
import { FaBookOpen } from 'react-icons/fa';

const CourseListDetails = ({ courselist }) => {

    const { id, course, price, image, pepole, book, institute } = courselist;

    return (
        <div className='mt-16'>
            <div className="">
                <Card >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Text>{institute}</Card.Text>
                        <Card.Title>{course}</Card.Title>
                    </Card.Body>
                    <hr />
                    <div className="flex justify-between mx-3">
                        <div className="flex text-xl text-gray-500">
                            <FaBookOpen /><p className='mt-0 ml-3 text-sm font-bold'>{book}</p>
                            <BiSolidUser className='ml-5' /><p className='mt-0 ml-3 text-sm font-bold'>{pepole}</p>
                        </div>
                        <div className="flex">
                            <p className='mt-0 ml-3 text-sm text-blue-600 font-bold'>${price}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CourseListDetails;