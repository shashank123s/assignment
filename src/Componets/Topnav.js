import React from 'react';
import { Link } from 'react-router-dom';
import Call from './Call.jpg';
import Email from './Email.png';
import PropTypes from 'prop-types';

export default function Topnav(props) {
    return (
        <div>
            <div>
                <ul className="nav justify-content-end top-nav">
                    <li className="nav-item mx-3">
                        <Link className="nav-link top-nav" to="/"><img src={Call} alt="Email img" style={{width:"30px",height:"18px"}}/>{props.email}</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link top-nav" to="/"><img src={Email} alt="Call img" style={{width:"32px",height:"18px"}}/>{props.phone}</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Topnav.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}
Topnav.defaultProps = {
    email: 'info@byequest.com',
    phone: '+91 97119997, +91 833-880-3355',
  };