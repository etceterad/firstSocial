
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import DoneProjectsSliderItem from './doneProjectsSliderItem';
// img's
import Background from '../doneProjects/images/13.png';
import FirstImg from '../doneProjects/images/01.jpg';
//css
import '../../../css/style.css';


export default class DoneProjects extends React.Component {
    render() {
        return(
            <section className="iq-project position-relative p-0">
                <div className="scrollme">
                    <img src={Background} className="img-fluid project-overlay-left animateme"
                    data-when="enter"
                    data-from="0.5"
                    data-to="0"
                    data-translatey="100" alt="done project" />
                </div>
                <div className="container">
                <div className="row mb-3">
                    <div className="col-lg-12">
                        <h2  className="display-2  iq-fw-9 d-inline-block title"><span className="counter">1520</span> <sup className=" d-inline-block">+</sup></h2>
                        <h3 className="d-inline-block  iq-fw-8">Project Done</h3>
                        <a className="slide-button button mt-4 float-right explore-btn" href="portfolio.html">
                            <div className="first">Explore All </div>
                            <div className="second">Explore All </div>
                        </a>
                    </div>
                </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-masonry-block ">
                                <OwlCarousel 
                                    className="owl-carousel" 
                                    nav={false} 
                                    autoplay={true} 
                                    loop={true} 
                                    dots={false} 
                                    items={4} 
                                    autoplayTimeout={3000} 
                                    autoplayHoverPause={true} 
                                    margin={15}
                                    responsive={{
                                        0:{
                                            items:1
                                        },
                                        500:{
                                            items:2
                                        },
                                        750: {
                                            items:3
                                        },
                                        1000: {
                                            items:4
                                        }   
                                    }} 
                                >
                                    <DoneProjectsSliderItem img={FirstImg} />
                                    <DoneProjectsSliderItem img={FirstImg} />
                                    <DoneProjectsSliderItem img={FirstImg} />
                                    <DoneProjectsSliderItem img={FirstImg} />
                                    <DoneProjectsSliderItem img={FirstImg} />
                                    <DoneProjectsSliderItem img={FirstImg} />
                                    <DoneProjectsSliderItem img={FirstImg} />
                                    <DoneProjectsSliderItem img={FirstImg} />
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}