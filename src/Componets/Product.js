import React from 'react'
import Sample from './/Sample.jpg';
export default function Product() {
    return (
        // home product
        <div>
            <div className="container">
                <h1 className="text-center my-3">Product</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={Sample} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Sample} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Sample} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Sample} className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
                <figure className="text-center my-2">Lorem Ipsum Dolor</figure>
            </div>


        </div>
    )
}
