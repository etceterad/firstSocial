import React from 'react';

const PricingListItem = (props) => {

        const {activateModal, pricingListImg, optionContentMarketing, optionConsulting, optionVideoMarketing, itemName, itemPrice} = props;

    return(
        <div className=" pricing-info wow fadeInUp">
            <div className="row">
            <div className="col-lg-2 col-sm-12"> <img src={pricingListImg} className="img-fluid" alt="list" /></div>
            <div className="col-lg-7 col-sm-12 align-self-center">
                <div className="pricing-plan">
                <div className="section-title mb-3">
                    <h3 className="title iq-fw-8 ">{itemName}</h3>
                </div>
                <div className="row ">
                    <div className="col-sm-12">
                    <ul className="pricing-list">
                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Email Marketing</li>
                        <li className="item"><i className={optionContentMarketing ? "fas fa-times-circle text-green mr-2" : "fas fa-times-circle main-color mr-2"}></i>Content Marketing</li>
                        <li className="item"><i className="fa fa-check-circle  text-green mr-2"></i>Voice Optimize</li>
                        <li className="item"><i className={optionConsulting ? "fas fa-times-circle text-green mr-2" : "fas fa-times-circle main-color mr-2"}></i>SEO Consulting</li>
                        <li className="item"><i className={optionVideoMarketing ? "fas fa-times-circle text-green mr-2" : "fas fa-times-circle main-color mr-2"}></i>Video Marketing</li>
                        <li className="item"><i className="fa fa-check-circle text-green mr-2"></i>Advertising</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12 text-center align-self-center">
                <h2 className="price iq-fw-8">${itemPrice} <span className="text-gray iq-font-18 iq-fw-6">/ Frist payment </span></h2>
                <a className="slide-button button popup-pusrchase-win" href=" " onClick={activateModal}>
                    <div className="first">Purchase</div>
                    <div className="second">Purchase</div>
                </a>
            </div>
            </div>
        </div>
    )
}

export default PricingListItem;