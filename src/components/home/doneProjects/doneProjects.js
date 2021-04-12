import React from 'react';
import {GridList, GridListTile} from '@material-ui/core';
// img's
import Background from './images/13.png';
import FirstImg from './images/01.jpg';
import SecondImg from './images/02.jpg';
import ThirdImg from './images/03.jpg';
import FourthImg from './images/04.jpg';
import FithImg from './images/05.jpg';
import SixthImg from './images/06.jpg';
import SeventhImg from './images/07.jpg';
import EighthImg from './images/08.jpg';

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
                            <div className="iq-masonry iq-columns-4">
                            <GridList>
                                    <div className="iq-masonry-item creative">
                                        <div className="iq-portfolio">
                                            <img src={FirstImg} className="img-fluid" alt="done project" />
                                            <div className="portfolio-info">
                                                <a href=""><span className="text-black">Design Concept</span></a>
                                                <a href="#" className="text-uppercase text-gray float-right">Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-masonry-item digital">
                                        <div className="iq-portfolio">
                                            <img src={SecondImg} className="img-fluid" alt="done project" />
                                            <div className="portfolio-info">
                                                <a href=""><span className="text-black">Design Concept</span></a>
                                                <a href="#" className="text-uppercase text-gray float-right">Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-masonry-item business">
                                        <div className="iq-portfolio">
                                            <img src={ThirdImg} className="img-fluid" alt="done project" />
                                            <div className="portfolio-info">
                                                <a href=""><span className="text-black">Design Concept</span></a>
                                                <a href="#" className="text-uppercase text-gray float-right">Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-masonry-item seo business">
                                        <div className="iq-portfolio">
                                            <img src={FourthImg} className="img-fluid" alt="done project" />
                                            <div className="portfolio-info">
                                                <a href=""><span className="text-black">Design Concept</span></a>
                                                <a href="#" className="text-uppercase text-gray float-right">Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-masonry-item creative seo">
                                        <div className="iq-portfolio">
                                            <img src={FithImg} className="img-fluid" alt="done project" />
                                            <div className="portfolio-info">
                                                <a href=""><span className="text-black">Design Concept</span></a>
                                                <a href="#" className="text-uppercase text-gray float-right">Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-masonry-item digital seo">
                                        <div className="iq-portfolio">
                                            <img src={SixthImg} className="img-fluid" alt="done project" />
                                            <div className="portfolio-info">
                                                <a href=""><span className="text-black">Design Concept</span></a>
                                                <a href="#" className="text-uppercase text-gray float-right">Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-masonry-item creative seo">
                                        <div className="iq-portfolio">
                                            <img src={SeventhImg} className="img-fluid" alt="done project" />
                                            <div className="portfolio-info">
                                                <a href=""><span className="text-black">Design Concept</span></a>
                                                <a href="#" className="text-uppercase text-gray float-right">Design</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-masonry-item digital seo">
                                        <div className="iq-portfolio">
                                            <img src={EighthImg} className="img-fluid" alt="done project" />
                                            <div className="portfolio-info">
                                                <a href=""><span className="text-black">Design Concept</span></a>
                                                <a href="#" className="text-uppercase text-gray float-right">Design</a>
                                            </div>
                                        </div>
                                    </div>
                                </GridList>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}