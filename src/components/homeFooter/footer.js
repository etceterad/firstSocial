import React from 'react';
import FooterNav from '../homeFooterNav';
import LogoFooter from './logo.png';
import {Link} from 'react-router-dom'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email : ""
        }

        this.handleEmailInput = this.handleEmailInput.bind(this)
    }

    handleEmailInput(e) {
        console.log(this.state.email)
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <footer className="footer-three position-relative">
                <div className="container">
                    <div className="row ">
                    <div className=" col-lg-5 col-md-6  iq-rmt-40">
                        <div className="iq-footer-logo mb-5">
                            <Link to="/"><img src={LogoFooter} className="img-fluid" alt=" footer" /></Link>
                        </div>
                        <form className="position-relative subscribe-form">
                            <div className="form-group mb-0">
                                <input type="email" className="form-control position-relative subscription-email mb-0" onChange={this.handleEmailInput} placeholder="Enter Email" />
                            </div>
                            <a className="slide-button button bt-subscribe subscription-button " href=" ">
                                <div className="first">Subscribe</div>
                                <div className="second">Subscribe</div>
                            </a>
                        </form>
                        <div className="contact mt-4 d-inline-block">
                            <i className="fa fa-phone"></i><span className="iq-fw-5 ml-2"> 0 123 456 789</span>
                            <div className="email d-inline-block"><Link to="Mail:Mail@TikTokFans.com"> Mail@TikTokFans.com</Link></div>
                        </div>
                    </div>

                    <FooterNav />

                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <hr />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="social-media">
                            <ul className="social">
                                <li><Link to="#"><i className="fab fa-facebook-f iq-fw-6"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter iq-fw-6"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin iq-fw-6"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-right">
                        <div className="footer-copyright iq-fw-5">Copyrights 2019 © <Link to="#" className="text-green iq-fw-5">TikTokFans</Link> </div>
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