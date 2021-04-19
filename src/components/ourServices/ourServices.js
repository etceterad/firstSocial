import React from 'react';
import OurServicesImg from './16.png';

export default class OurServices extends React.Component {

    render() {
        return (
            <section className="iq-works position-relative pt-0 we-offer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div className="section-title">
                    <p className="mt-2 text-uppercase iq-fw-3 iq-ls-3">Best Ever Services</p>
                    <h2 className="title  iq-fw-8">What We Offer</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 wow fadeInUp">
                  <div className="services purple" >
                    <div className="services-info">
                      <div className="service-shap purple"><i className="ion-ios-cloud-download-outline"></i></div>
                      <h5 className="float-left mt-4">Data Analysis</h5>
                      <div className="clearfix"></div>
                      <p className="mt-3 mb-0">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                    </div>
                    <a href="service.html" className="button-info">Read More <span className="float-right">. . .</span></a>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp">
                  <div className="services purple " >
                    <div className="services-info">
                      <div className="service-shap purple"><i className="ion-ios-bookmarks-outline"></i></div>
                      <h5 className="float-left mt-4">PPC Marketing</h5>
                      <div className="clearfix"></div>
                      <p className="mt-3 mb-0">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                    </div>
                    <a href="service.html" className="button-info">Read More <span className="float-right">. . .</span></a>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp">
                  <div className="services purple mb-lg-0 " >
                    <div className="services-info">
                      <div className="service-shap purple"><i className="ion-ios-pie-outline"></i></div>
                      <h5 className="float-left mt-4">Business Analytics</h5>
                      <div className="clearfix"></div>
                      <p className="mt-3 mb-0">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                    </div>
                    <a href="service.html" className="button-info">Read More <span className="float-right">. . .</span></a>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp">
                  <div className="services purple mb-lg-0" >
                    <div className="services-info">
                      <div className="service-shap purple"><i className="ion-ios-world-outline"></i></div>
                      <h5 className="float-left mt-4">Social media marketing</h5>
                      <div className="clearfix"></div>
                      <p className="mt-3 mb-0">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                    </div>
                    <a href="service.html" className="button-info">Read More <span className="float-right">. . .</span></a>
                  </div>
                </div>
              </div>
            </div>
            <img src={OurServicesImg} className="img-fluid iqwork-two" alt="our services" />
          </section>
        )
    }
}