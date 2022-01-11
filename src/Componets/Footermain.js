import React from 'react'
import {Link} from 'react-router-dom';

export default function Footermain() {
    return (
        <>
            <footer className=" bg-secondary pt-5 pb-4 footermain">
                <div className="container text-center text-md-left">

                    <div className="row text-center text-md-left">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-black">company name</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elitrepellat ipsum facere voluptate dicta obcaecati.</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold ">Links</h5>
                            <p>
                                <Link to="/">Our Client</Link> 
                            </p>
                            <p>
                                <Link to="/">Privacy Policy</Link> 
                            </p>
                            <p>
                                <Link to="/">Our Benifit</Link> 
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold">Information</h5>
                            <p>
                                <Link to="/">Our Client</Link> 
                            </p>
                            <p>
                                <Link to="/">Privacy Policy</Link> 
                            </p>
                            <p>
                                <Link to="/">Our Benefit</Link> 
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold ">Contact us</h5>
                            <p>
                                <Link to="/" >+91 00000000, +91 000-000-0000</Link> 
                            </p>
                            <p>
                                <Link to="/" >loremipsum@gmail.com</Link> 
                            </p>
                            <p>
                                <Link to="/" >B Block, Sector-4, Noida(up)</Link> 
                            </p>
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p>Copyright &#9400;2020 All right reserved: <Link to="/" >
                                <strong>  The providers</strong></Link> </p>
                        </div>                       
                    </div>
                </div>
            </footer>
        </>
    )
}
