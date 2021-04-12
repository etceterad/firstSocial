import React from 'react';
import AboutImg from '../../../images/service/3.png';
import Accordeon from '../../accordion';
import OtherImg from './2.jpg';

export default class ServicesAbout extends React.Component {
    render() {
        return(
            <div className="overview-block-ptb">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12 text-center">
                     <div className="section-title">
                        <p className="mt-2 text-uppercase  iq-fw-3 iq-ls-3">About Services</p>
                        <h2 className="title iq-fw-8">Digital Marketing Services</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="about-us-container pt-0  position-relative">
               <div className="container">
                  <div className="row flex-row-reverse ">
                     <div className="col-lg-6 align-self-center mb-5  wow fadeInRight">
                        <Accordeon />
                     </div>
                     <div className="col-lg-6 pt-5 wow fadeInLeft">
                        <img src={OtherImg} className="img-fluid" alt="" />
                     </div>
                  </div>
               </div>
               <div className="scrollme">
                  <img src={AboutImg}  className="img-fluid service-three animateme"
                     data-when="enter"
                     data-from="0.5"
                     data-to="0"
                     data-translatex="100" alt=" " />
               </div>
            </div>
         </div>
        )
    }
}