import React from 'react';
import OurAchievmentsImg from './1.jpg';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class OurAchievments extends React.Component {

    render() {
        return (
            <section className="iq-solutions position-relative  light-gray-bg ">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-12 align-self-center wow fadeInLeft">
                     <p className="mt-2 text-uppercase iq-fw-3 iq-ls-3 mb-1">About us</p>
                     <h2 className="iq-fw-8 mb-2">Our Achievements</h2>
                     <p>Since 2010 Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum. lorem quis bibendum auctor.</p>
                     <div className="row mt-5">
                        <div className="col-lg-6 col-md-12">
                           <div className="media align-items-center">
                              <i className="ion-ios-pie-outline align-self-center"></i>
                              <div className="media-body ml-3">
                                 <CountUp className="counter" end={1520} duration={3} redraw={false} >
                                    {({ countUpRef, start }) => (
                                       <VisibilitySensor onChange={start} delayedCall>
                                          <span ref={countUpRef} />
                                       </VisibilitySensor>
                                 )}
                                 </CountUp>
                                 <p className="mb-0">Projects Done.</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                           <div className="media align-items-center">
                              <i className="ion-ios-heart-outline align-self-center"></i>
                              <div className="media-body ml-3">
                                 <CountUp className="counter" end={1240} duration={3} redraw={false} >
                                    {({ countUpRef, start }) => (
                                       <VisibilitySensor onChange={start} delayedCall>
                                          <span ref={countUpRef} />
                                       </VisibilitySensor>
                                    )}
                                 </CountUp>
                                 <p style={{marginBottom: "0"}}>Happy Clients.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                     <img src={OurAchievmentsImg} className="img-fluid wow fadeInRight" alt="our achievments" />
                  </div>
               </div>
            </div>
         </section>
        )
    }
}
