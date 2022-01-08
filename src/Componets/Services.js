import React from 'react'
import Sample from './/Sample.jpg';
import { Link } from 'react-router-dom';
export default function Services() {
    return (
        <div>
           {/* home service */}
           <div className="container">
                <h1 className="text-center my-3">Service</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={Sample} className="card-img-top p-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to.</p>
                            </div>
                            <div className="card-footer">
                                <Link to="/" className="link-dark d-flex justify-content-center text-center">Reade more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Sample} className="card-img-top p-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to</p>
                            </div>
                            <div className="card-footer">
                                <Link to="#" className="link-dark d-flex justify-content-center text-center">Reade more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Sample} className="card-img-top p-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to</p>
                            </div>
                            <div className="card-footer">
                                <Link to="#" className="link-dark d-flex justify-content-center text-center">Reade more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Sample} className="card-img-top p-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to.</p>
                            </div>
                            <div className="card-footer">
                                <Link to="#" className="link-dark d-flex justify-content-center text-center">Reade more</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="text-center my-3">Lorem Ipsum Dolor</figure>
            </div>

        </div>
    )
}
