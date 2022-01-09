import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';

export default function Navbar(props) {
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand ml-5 px-5" to="/"><img src={logo} style={{width:"250px", height:"30px"}} alt="Assignment logo"></img>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active px-3" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                    <Link className="nav-link px-3" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="/services">Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="/portfolio">Portfolio</Link>
                                </li>
                        </ul>
                        <div className="nav-item">
                                <button className="btn btn-outline-primary rounded-pill" type="submit">Contact Us</button>
                            </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.defaultProps = {
    title: 'Set title here'
  };