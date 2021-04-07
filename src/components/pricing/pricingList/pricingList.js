import React, {useState} from 'react';
import PricingImg from '../../../images/pricing/1.png';
import PricingModal from '../pricingModal';
import '../pricingModal/pricingModal.css';

const PricingList = () =>{
    const [modalActive, setModalActive] = useState(false)
    
        return(
            <section className="iq-pricingplan">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                        <div className="section-title">
                            <p className="mt-2 text-uppercase iq-fw-3 iq-ls-3">Best Ever Price</p>
                            <h2 className="title iq-fw-8">Our Flexible Pricing Plans</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="row  no-gutters ">
                        <div className="col-lg-12">
                        <div className=" pricing-info">
                            <div className="row">
                            <div className="col-lg-2 col-sm-12"> <img src={PricingImg} className="img-fluid" alt="list" /></div>
                            <div className="col-lg-7 col-sm-12 align-self-center">
                                <div className="pricing-plan">
                                <div className="section-title mb-3">
                                    <h3 className="title iq-fw-8 ">Starter</h3>
                                </div>
                                <div className="row ">
                                    <div className="col-sm-12">
                                    <ul className="pricing-list">
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Email Marketing</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>Content Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle  text-green mr-2"></i>Voice Optimize</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>SEO Consulting</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>Video Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Advertising</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-center align-self-center">
                                <h2 className="price iq-fw-8">$29 <span className="text-gray iq-font-18 iq-fw-6">/ Frist payment </span></h2>
                                <a className="slide-button button popup-pusrchase-win" href="##" id="starter" onClick={() => setModalActive(true)}>
                                    <div className="first">Purchase</div>
                                    <div className="second">Purchase</div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className=" pricing-info mt-4 mb-4">
                            <div className="row">
                            <div className="col-lg-2 col-sm-12"> <img src={PricingImg} className="img-fluid" alt="list" /></div>
                            <div className="col-lg-7 col-sm-12 align-self-center">
                                <div className="pricing-plan">
                                <div className="section-title mb-3">
                                    <h3 className="title iq-fw-8 ">Enterprice</h3>
                                </div>
                                <div className="row ">
                                    <div className="col-sm-12">
                                    <ul className="pricing-list">
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Email Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Content Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Voice Optimize</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>SEO Consulting</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>Video Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Advertising</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-center align-self-center">
                                <h2 className="price iq-fw-8">$49 <span className="text-gray iq-font-18 iq-fw-6">/ Frist payment </span></h2>
                                <a className="slide-button button popup-pusrchase-win" href="##" id="enterprice" onClick={() => setModalActive(true)}>
                                <div className="first">Purchase</div>
                                <div className="second">Purchase</div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className=" pricing-info">
                            <div className="row">
                            <div className="col-lg-2 col-sm-12"> <img src={PricingImg} className="img-fluid" alt="list" /></div>
                            <div className="col-lg-7 col-sm-12 align-self-center">
                                <div className="pricing-plan">
                                <div className="section-title mb-3">
                                    <h3 className="title iq-fw-8 ">Professional</h3>
                                </div>
                                <div className="row ">
                                    <div className="col-sm-12">
                                    <ul className="pricing-list">
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Email Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Content Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle  text-green mr-2"></i>Voice Optimize</li>
                                        <li className="item"><i className="fa fa-check-circle  text-green mr-2"></i>SEO Consulting</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Video Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Advertising</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-center align-self-center">
                                <h2 className="price iq-fw-8">$99 <span className="text-gray iq-font-18 iq-fw-6">/ Frist payment </span></h2>
                                <a className="slide-button button popup-pusrchase-win" href="##" id="professional" onClick={() => setModalActive(true)}>
                                <div className="first">Purchase</div>
                                <div className="second">Purchase</div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className=" pricing-info">
                            <div className="row">
                            <div className="col-lg-2 col-sm-12"> <img src={PricingImg} className="img-fluid" alt="list" /></div>
                            <div className="col-lg-7 col-sm-12 align-self-center">
                                <div className="pricing-plan">
                                <div className="section-title mb-3">
                                    <h3 className="title iq-fw-8 ">Luxury</h3>
                                </div>
                                <div className="row ">
                                    <div className="col-sm-12">
                                    <ul className="pricing-list">
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Email Marketing</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>Content Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle  text-green mr-2"></i>Voice Optimize</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>SEO Consulting</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>Video Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Advertising</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-center align-self-center">
                                <h2 className="price iq-fw-8">$149 <span className="text-gray iq-font-18 iq-fw-6">/ Frist payment </span></h2>
                                <a className="slide-button button popup-pusrchase-win" href="##" id="luxury" onClick={() => setModalActive(true)}>
                                <div className="first">Purchase</div>
                                <div className="second">Purchase</div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className=" pricing-info mt-4 mb-4">
                            <div className="row">
                            <div className="col-lg-2 col-sm-12"> <img src={PricingImg} className="img-fluid" alt="list" /></div>
                            <div className="col-lg-7 col-sm-12 align-self-center">
                                <div className="pricing-plan">
                                <div className="section-title mb-3">
                                    <h3 className="title iq-fw-8 ">VIP</h3>
                                </div>
                                <div className="row ">
                                    <div className="col-sm-12">
                                    <ul className="pricing-list">
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Email Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Content Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Voice Optimize</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>SEO Consulting</li>
                                        <li className="item"><i className="fas fa-times-circle main-color mr-2"></i>Video Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Advertising</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-center align-self-center">
                                <h2 className="price iq-fw-8">$199 <span className="text-gray iq-font-18 iq-fw-6">/ Frist payment </span></h2>
                                <a className="slide-button button popup-pusrchase-win" href="##" id="vip" onClick={() => setModalActive(true)}>
                                <div className="first">Purchase</div>
                                <div className="second">Purchase</div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className=" pricing-info">
                            <div className="row">
                            <div className="col-lg-2 col-sm-12"> <img src={PricingImg} className="img-fluid" alt="list" /></div>
                            <div className="col-lg-7 col-sm-12 align-self-center">
                                <div className="pricing-plan">
                                <div className="section-title mb-3">
                                    <h3 className="title iq-fw-8 ">Godlike</h3>
                                </div>
                                <div className="row ">
                                    <div className="col-sm-12">
                                    <ul className="pricing-list">
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Email Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Content Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle  text-green mr-2"></i>Voice Optimize</li>
                                        <li className="item"><i className="fa fa-check-circle  text-green mr-2"></i>SEO Consulting</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Video Marketing</li>
                                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Advertising</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 text-center align-self-center">
                                <h2 className="price iq-fw-8">$299 <span className="text-gray iq-font-18 iq-fw-6">/ First payment </span></h2>
                                <a className="slide-button button popup-pusrchase-win" href="##" id="godlike" onClick={() => setModalActive(true)}>
                                <div className="first">Purchase</div>
                                <div className="second">Purchase</div>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PricingModal active={modalActive} setActive={setModalActive} />
        </section>
        )
}

export default PricingList;