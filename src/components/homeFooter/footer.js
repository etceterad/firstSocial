import React from 'react';
import FooterNav from '../homeFooterNav';
import LogoFooter from './logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer class="footer-three position-relative">
                <div class="container">
                    <div class="row ">
                    <div class=" col-lg-5 col-md-6  iq-rmt-40">
                        <div class="iq-footer-logo mb-5">
                            <a href="index.html"><img src={LogoFooter} class="img-fluid" alt="image" /></a>
                        </div>
                        <form class="position-relative subscribe-form">
                            <div class="form-group mb-0">
                                <input type="email" class="form-control position-relative subscription-email  mb-0" placeholder="Enter Email" />
                            </div>
                            <a class="slide-button button bt-subscribe subscription-button " href="javascript:void(0)">
                                <div class="first">Subscribe</div>
                                <div class="second">Subscribe</div>
                            </a>
                        </form>
                        <div class="contact mt-4 d-inline-block">
                            <i class="fa fa-phone"></i><span class="iq-fw-5 ml-2"> 0 123 456 789</span>
                            <div class="email d-inline-block"><a href="Mail:Mail@TikTokFans.com"> Mail@TikTokFans.com</a></div>
                        </div>
                    </div>

                    <FooterNav />

                    </div>
                    <div class="row">
                    <div class="col-lg-12">
                        <hr />
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="social-media">
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook-f iq-fw-6"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter iq-fw-6"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin iq-fw-6"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 text-right">
                        <div class="footer-copyright iq-fw-5">Copyrights 2019 © <a href="#" class="text-green iq-fw-5">TikTokFans</a> </div>
                    </div>

                    </div>
                </div>
                <div id="back-to-top">
                    <a class="top" id="top" href="#top"><i class="ion-ios-arrow-thin-up"></i></a>
                </div>
            </footer>
        )
    }
}