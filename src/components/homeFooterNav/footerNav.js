import React from 'react';
import MapImg from './map.gif';
import {Link} from 'react-router-dom';

export default class FooterNav extends React.Component {
    render () {
        return(
            <>
                <div className="col-lg-2 col-md-6 footer-link  iq-rmt-40">
                  <h5 className="iq-fw-7 ">Links</h5>
                  <ul className="list-inline">
                     <li className="list-item"><Link to="/">Home</Link></li>
                     <li className="list-item"><Link to="/about-us">About us</Link></li>
                     <li className="list-item"><Link to="/faq">FAQ</Link></li>
                     <li className="list-item"><Link to="/service">Services</Link></li>
                     <li className="list-item"><Link to="/contact-us">Contact Us</Link></li>
                  </ul>
               </div>
               <div className="col-lg-2 col-md-6 footer-link iq-rmt-40">
                  <h5 className="iq-fw-7 ">Information</h5>
                  <ul className="list-inline">
                     <li className="list-item"><Link to="/pricing">Pricing</Link></li>
                     <li className="list-item"><Link to="/portfolio">Portfolio</Link></li>
                     <li className="list-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
                     <li className="list-item"><Link to="/service">Our Benefits</Link></li>
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6 footer-link iq-rmt-40">
                  <div className="iq-location">
                     <h5 className="iq-fw-7 ">Location</h5>
                     <Link to="/contact-us"><img src={MapImg} className="img-fluid mt-5 " alt="location" /></Link>
                  </div>
               </div>
            </>
        )
    }
}