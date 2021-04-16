import React from 'react';
import DoneProjectsItem from '../doneProjectsItem';
import OwlCarousel from 'react-owl-carousel';
// img's
import FirstImg from './images/01.jpg';

import '../../../css/style.css';

export default class DoneProjects extends React.Component {
    render() {
        return(
            <section className="iq-project position-relative pt-0">
                <div className="container">
                    <div className="row mb-3 align-items-center">
                        <div className="col-lg-6 ">
                            <h2  className="display-2  iq-fw-9 d-inline-block title"><span className="counter">1520</span> <sup className=" d-inline-block">+</sup></h2>
                            <h3 className="d-inline-block  iq-fw-8">Project Done.</h3>
                        </div>
                        <div className="col-lg-6 ">
                            <a className="slide-button button float-right explore-btn" href="portfolio.html">
                                <div className="first">Explore All</div>
                                <div className="second">Explore All</div>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                            <OwlCarousel 
                                id="portfolio-carousel" 
                                className="owl-carousel" 
                                autoplay={true} 
                                autoplayTimeout={2500} 
                                autoplayHoverPause={true} 
                                loop={true} 
                                nav={false} 
                                dots={false} 
                                items={4} 
                                itemsLaptop={3} 
                                itemsTab={3} 
                                itemsMobile={1} 
                                itemsMobileSm={1} 
                                margin={30}
                                autoWidth={true}
                            >
                                <DoneProjectsItem projectsItemImg={FirstImg} />
                                <DoneProjectsItem projectsItemImg={FirstImg} />
                                <DoneProjectsItem projectsItemImg={FirstImg} />
                                <DoneProjectsItem projectsItemImg={FirstImg} />
                                <DoneProjectsItem projectsItemImg={FirstImg} />
                                <DoneProjectsItem projectsItemImg={FirstImg} />
                                <DoneProjectsItem projectsItemImg={FirstImg} />
                                <DoneProjectsItem projectsItemImg={FirstImg} />
                                </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}