import React from 'react';
import $ from 'jquery';
import Background13 from './images/13.png';
import OfferSubscribersImg from './images/5.png';
import OfferLikesImg from './images/06.png';
import OfferViewsImg from './images/08.png';

export default class Offer extends React.Component {
    // constructor() {
    //     super()

    //     this.initTabs = this.initTabs.bind(this);
    // }

    // componentDidMount() {
    //     this.initTabs();
    // }

    // initTabs() {
    //     $('ul.about-us').on('click', 'li:not(.active)', (e) => {
    //         e.preventDefault();
    //       $(this)
    //         .addClass('active').siblings().removeClass('active')
    //         .closest('.main-form__content').find('div.main-form__tab').removeClass('active-tab').eq($(this).index()).addClass('active-tab');
    //     });
    // }

    render() {
        return (
            <div className="main-form">
                <div className="left-img"><img src={Background13} className="img-fluid" alt="offer" /></div>
                <section className="main-form__section">
                    <div className="container">
                    <div className="main-form__text">
                        <h1 className="main-form__title">
                            Form title
                        </h1>
                        <p className="main-form__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi quidem dolores doloremque impedit sit nemo pariatur, dignissimos et. Aspernatur nam amet itaque et dolor debitis illum ipsum voluptatem impedit.
                        </p>
                    </div>
                    <div className="main-form__content">
                        <div className="our-info"> 
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="about-us text-center list-inline">
                                        <li className="list-inline-item"><a href="#" className="active"><span>Subscribers</span></a></li>
                                        <li className="list-inline-item"><a href="#"><span>Likes</span></a></li>
                                        <li className="list-inline-item"><a href="#"><span>Views</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="main-form__tab active-tab">
                            <div className="main-form__tab-calculate wow fadeInLeft">
                                <h3 className="main-form__calculate-title">
                                You want Subscribers?
                                </h3>
                                <form action="">
                                    <input type="text" className="main-form__input" placeholder="Your TIK-TOK Login" />
                                    <input type="text" className="main-form__input" placeholder="Number of desired Subscribers" /><br/>
                                    <div className="main-form__calculated-area">
                                        <div className="calculated-area__button">
                                            <button type="submit" className="button form-button">BUY</button>
                                        </div>   
                                        <div className="calculated-area__price">
                                            <label htmlFor="calculated-price">Price:</label>
                                            <output id="calculated-price">49$</output>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="main-form__tab-img wow fadeInRight">
                                <img src={OfferSubscribersImg} alt="img" />
                            </div>
                        </div>
                        <div className="main-form__tab">
                            <div className="main-form__tab-calculate wow fadeInLeft">
                                <h3 className="main-form__calculate-title">
                                You want Likes?
                                </h3>
                                <form action="">
                                <input type="text" className="main-form__input" placeholder="Your TIK-TOK Login" />
                                <input type="text" className="main-form__input" placeholder="Number of desired Likes" /><br />
                                <div className="main-form__calculated-area">
                                    <div className="calculated-area__button">
                                        <button type="submit" className="button form-button">BUY</button>
                                    </div>   
                                    <div className="calculated-area__price">
                                        <label htmlFor="calculated-price">Price:</label>
                                        <output id="calculated-price">49$</output>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className="main-form__tab-img likes-img wow fadeInRight">
                                <img src={OfferLikesImg} alt="img" />
                            </div>
                        </div>
                        <div className="main-form__tab">
                            <div className="main-form__tab-calculate wow fadeInLeft">
                                <h3 className="main-form__calculate-title">
                                You want Views?
                                </h3>
                                <form action="">
                                    <input type="text" className="main-form__input" placeholder="Your TIK-TOK Login" />
                                    <input type="text" className="main-form__input" placeholder="Number of desired Views" /><br />
                                    <div className="main-form__calculated-area">
                                        <div className="calculated-area__button">
                                            <button type="submit" className="button form-button">BUY</button>
                                        </div>   
                                        <div className="calculated-area__price">
                                            <label htmlFor="calculated-price">Price:</label>
                                            <output id="calculated-price">49$</output>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="main-form__tab-img views-img wow fadeInRight">
                                <img src={OfferViewsImg} alt="img"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}