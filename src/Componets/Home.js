import React from 'react';
import Product from './Product';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Headimg from './/Headimg.jpg';

export default function Home() {
    return (
        <>
            {/* img home page */}
            <figure className="text-center my-2">
                <img src={Headimg} className="figure-img img-fluid rounded" alt="..." />
                <figcaption className="figure-caption">Lorem Ipsum Dolor</figcaption>
            </figure>
       {/*  */}
           <Product/>
           <Services />
           <Portfolio />
           <About />
        </>
    )
}
