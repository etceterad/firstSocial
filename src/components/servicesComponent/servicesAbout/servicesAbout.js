import React from 'react';
import AboutImg from '../../../images/service/3.png';
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
            <div className="iq-choose-info pt-0  position-relative">
               <div className="container">
                  <div className="row flex-row-reverse ">
                     <div className="col-lg-6 align-self-center mb-5">
                        
                        <div className="iq-accordion">
                           <div className="iq-ad-block ">
                              <a href="javascript:void(0)" className="ad-title iq-fw-6 ">Why do we use it?</a>
                              <div className="ad-details">
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                 </p>
                              </div>
                           </div>
                           <div className="iq-ad-block ">
                              <a href="javascript:void(0)" className="ad-title iq-fw-6 ">Where does it come from?</a>
                              <div className="ad-details">
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                 </p>
                              </div>
                           </div>
                           <div className="iq-ad-block ">
                              <a href="javascript:void(0)" className="ad-title iq-fw-6 ">There are many variationof passages?</a>
                              <div className="ad-details">
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                 </p>
                              </div>
                           </div>
                           <div className="iq-ad-block ">
                              <a href="javascript:void(0)" className="ad-title iq-fw-6 ">Standard chunk of Lorem Ipsum used since the 1500s?</a>
                              <div className="ad-details">
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 pt-5">
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