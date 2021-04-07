import React from 'react';
import MapImg from './map.gif';

export default class FooterNav extends React.Component {
    render () {
        return(
            <>
                <div className="col-lg-2 col-md-6 footer-link  iq-rmt-40">
                  <h5 className="iq-fw-7 ">Links</h5>
                  <ul className="list-inline">
                     <li className="list-item"><a href="index.html">Home</a></li>
                     <li className="list-item"><a href="about-us.html">About us</a></li>
                     <li className="list-item"><a href="faq.html">FAQ</a></li>
                     <li className="list-item"><a href="service.html">Services</a></li>
                     <li className="list-item"><a href="contact-us.html">Contact Us</a></li>
                  </ul>
               </div>
               <div className="col-lg-2 col-md-6 footer-link iq-rmt-40">
                  <h5 className="iq-fw-7 ">Information</h5>
                  <ul className="list-inline">
                     <li className="list-item"><a href="pricing.html">Pricing</a></li>
                     <li className="list-item"><a href="client.html">Customers</a></li>
                     <li className="list-item"><a href="portfolio.html">Portfolio</a></li>
                     <li className="list-item"><a href="privacy-policy.html">Privacy Policy</a></li>
                     <li className="list-item"><a href="service.html">Our Benefits</a></li>
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6 footer-link iq-rmt-40">
                  <div className="iq-location">
                     <h5 className="iq-fw-7 ">Location</h5>
                     <a href="contact-us.html"><img src={MapImg} className="img-fluid mt-5 " alt="location" /></a>
                  </div>
               </div>
            </>
        )
    }
}