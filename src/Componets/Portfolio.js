import React from 'react';
import Sample from './/Sample.jpg';

export default function Portfolio() {
    return (
        <div>
               {/* home portfolio */}
               <div className="container">
                <h1 className="text-center my-5">Portfolio/ Case Studio</h1>
                <div className="row row-cols-1 row-cols-md-3 g-5 mx-3">
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
                <figure className="text-center my-3">Lorem Ipsum Dolor</figure>
            </div>
        </div>
    )
}
