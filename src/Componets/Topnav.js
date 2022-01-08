import React from 'react';
import { Link } from 'react-router-dom';
import Call from './Call.jpg';
import Email from './Email.png';

export default function Topnav() {
    return (
        <div>
            <div>
                <ul className="nav justify-content-end top-nav">
                    <li className="nav-item mx-3">
                        <Link className="nav-link top-nav" to="/"><img src={Call} alt="Email img" style={{width:"30px",height:"18px"}}/>info@byequest.com</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link top-nav" to="/"><img src={Email} alt="Call img" style={{width:"32px",height:"18px"}}/>+91 97119997, +91 833-880-3355</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
