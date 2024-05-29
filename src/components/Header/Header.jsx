import React from 'react';
import Logo from '../../../public/logo-violet.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='xl:mx-10'>
                {['xl'].map((expand) => (
                    <Navbar key={expand} expand={expand} className=" mb-3 bg-white shadow-xl" fixed="top">
                        <Container fluid>
                            <Navbar.Brand href="#"><img src={Logo} alt="" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <img src={Logo} alt="" />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end items-center  flex-grow-1 pe-3">
                                        <Link to={`/`} className='no-underline font-serif ml-6 text-black text-xl '><Nav className='hover:text-red-700' href="#action1">Home</Nav></Link>
                                        <Link to={`/course`} className='no-underline font-serif ml-6 text-black text-xl '><Nav className='hover:text-red-700' >Course</Nav></Link>
                                        <Link to={`/about`} className='no-underline font-serif ml-6 text-black text-xl '><Nav className='hover:text-red-700' href="#action2">About Us</Nav></Link>
                                        <Link to={`/contact`} className='no-underline font-serif ml-6 text-black text-xl '><Nav className='hover:text-red-700' href="#action2">Contact</Nav></Link>
                                    </Nav>
                                    <div className=" items-center ml-10 justify-between gap-5">
                                        <Link to={`/login`}><button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button></Link>

                                    </div>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
                {/* <nav className="xl:flex items-center container mx-auto justify-between px-4 py-2 text-black">
                    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
                        <h2><img src={Logo} alt="" /></h2>
                    </div>
                    <div className="xl:flex items-center xl:justify-between sm:justify-end gap-16">
                        <ul className="xl:flex xl:items-center  xl:justify-between sm:justify-end gap-10">
                            <Link to={`/`}><li className="group flex   flex-col">
                                Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full  "></span>
                            </li></Link>
                            <Link to={`/`}><li className="group flex   flex-col">
                                Courses <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li></Link>
                            <Link to={`/`}><li className="group flex   flex-col">
                                Blog <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li></Link>
                            <Link to={`/`}><li className="group flex  flex-col">
                                Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li></Link>
                        </ul>
                        <div className=" items-center justify-between gap-5">
                            <Link to={`/login`}><button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button></Link>

                        </div>
                    </div>
                </nav> */}

            </div>
        </>
    );
};

export default Header;