import React from 'react';
import FooterNav from '../footerNav';
import OwlCarousel from 'react-owl-carousel';
import FourthImg from '../../images/footer/4.png';
import FooterLogo from '../../images/footer/logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-one footer-bg  position-relative">
      <img src={FourthImg} className="img-fluid fshap-after" alt="footer" />
      <div className="iq-subscribe pattern-left  container position-relative" id="iq-subscribe">
        <div className="pattern-right">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 iq-subscribe__text">
              <div className="title-box text-left ">
                <h2 className="title mb-3 text-white">Let's Discuss</h2>
                <p className="text-white iq-fw-4 mb-0">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
            <form className="position-relative subscribe-form mt-5 mt-lg-0">
                <div className="form-group mb-0">
                  <input type="email" className="form-control position-relative subscription-email  mb-0" placeholder="Enter Email" />
                </div>
               <a className="slide-button button bt-subscribe subscription-button " href=" ">
                <div className="first">Subscribe</div>
                <div className="second">Subscribe</div>
              </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contactinfo">
        <div className="container p-0">
          <div className="row ">
            <div className="col-lg-4 col-md-6">
              <div className="iq-footer-logo">
                <a href="index.html"><img src={FooterLogo} className="img-fluid" alt="footer" /></a>
              </div>
              <div className="footer-copyright mb-4 iq-fw-5 mt-3">©Copyrights 2019 TikTokFans</div>
              <div>
                <div className="social-media d-inline-block float-left ml-4">
                  <ul className="social">
                    <li><a href=" "><i className="fab fa-facebook-f iq-fw-6"></i></a></li>
                    <li><a href=" "><i className="fab fa-twitter iq-fw-6"></i></a></li>
                    <li><a href=" "><i className="fab fa-linkedin iq-fw-6"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="contact mt-4 d-inline-block">
                <a href="tel:0123456789"> <i className="fa fa-phone"></i><span className="iq-fw-5"> 0 123 456 789</span></a>
                <div className="email d-inline-block"><a href="Mail:mail@TikTokFans.com"> mail@TikTokFans.com</a></div>
              </div>
            </div>
            <FooterNav />
            <div className="col-lg-4 col-md-6">
              <div className="testimonials">
                <OwlCarousel id="iqtestimonials" className="owl-carousel riq-mt-40" autoplay={true} loop={true} nav={false} dots={false} items={1} margin={15}>
                  <div className="item">
                    <div className="desc">
                      <p className="mb-0">Progravida <span className="text-black iq-fw-7">#nibh vel velit auctor</span> alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum. <a href=" " className="text-black iq-fw-7">https://iqonicthemes.com</a></p>
                    </div>
                    <div className="author">
                      <div className="float-left d-flex mr-3">
                        <i className="fab fa-twitter text-white"></i>
                      </div>
                      <div className=" float-left ">
                        <div className="overview">
                          <a href=" ">
                            <h6 className="name text-black mb-0">iqonicthemes</h6>
                          </a>
                          <div className="details">2 Months Ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="desc">
                      <p className="mb-0">Progravida <span className="text-black iq-fw-7">#nibh vel velit auctor</span> alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum. <a href=" " className="text-black iq-fw-7">https://iqonicthemes.com</a></p>
                    </div>
                    <div className="author">
                      <div className="float-left d-flex mr-3">
                        <i className="fab fa-twitter text-white"></i>
                      </div>
                      <div className=" float-left ">
                        <div className="overview">
                          <h6 className="name text-black mb-0">iqonicthemes</h6>
                          <div className="details">2 Months Ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="desc">
                      <p className="mb-0">Progravida <span className="text-black iq-fw-7">#nibh vel velit auctor</span> alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum. <a href=" " className="text-black iq-fw-7">https://iqonicthemes.com</a></p>
                    </div>
                    <div className="author">
                      <div className="float-left d-flex mr-3">
                        <i className="fab fa-twitter text-white"></i>
                      </div>
                      <div className=" float-left ">
                        <div className="overview">
                          <h6 className="name text-black mb-0">iqonicthemes</h6>
                          <div className="details">2 Months Ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="back-to-top">
        <a className="top" id="top" href="#top"><i className="ion-ios-arrow-thin-up"></i></a>
      </div>
    </footer>
        )
    }
}