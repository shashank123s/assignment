import React from 'react'
import {Link} from 'react-router-dom';

export default function Footertop() {
    return (
        <div className="container-fluid discuss-area">
            <div className="row discuss-area">
                <div className="col-md-7">
                    <div className="p-5 discuss-area-left">
                        <h2>Let's Discuss</h2>
                        <p>This card has supporting text below as a natural lead-in to.</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="discuss-area-right my-5">
                        <Link to="/" ><button>Sign up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
