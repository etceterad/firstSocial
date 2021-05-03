import React from 'react';
import { Link } from 'react-router-dom';// img's
import Masonry from 'react-masonry-css';
import DoneProjectsItem from '../doneProjectsItem';
import SecondImg from './images/02.jpg';
import ThirdImg from './images/03.jpg';
import FourthImg from './images/04.jpg';
import FithImg from './images/05.jpg';
import SixthImg from './images/06.jpg';
import SeventhImg from './images/07.jpg';

import '../../../css/style.css';

export default class DoneProjects extends React.Component {
    render() {
        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
          };

        return(
            <section className="iq-project position-relative pt-0">
                <div className="container">
                    <div className="row mb-3 align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7 col-8">
                            <h2  className="display-2  iq-fw-9 d-inline-block title"><span className="counter">1520</span> <sup className=" d-inline-block">+</sup></h2>
                            <h3 className="d-inline-block  iq-fw-8">Project Done.</h3>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 col-4">
                            <Link className="slide-button button float-right explore-btn" to="/portfolio">
                                <div className="first">Explore All</div>
                                <div className="second">Explore All</div>
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="container-fluid">
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid "
                            columnClassName="my-masonry-grid_column" 
                        >
                                <DoneProjectsItem
                                    projectsItemImg={FithImg}
                                />
                                <DoneProjectsItem
                                    projectsItemImg={FourthImg}
                                />
                                <DoneProjectsItem
                                    projectsItemImg={ThirdImg}
                                />
                                <DoneProjectsItem
                                    projectsItemImg={SecondImg}
                                />
                                <DoneProjectsItem
                                    projectsItemImg={SecondImg}
                                />
                                <DoneProjectsItem
                                    projectsItemImg={SixthImg}
                                />
                                <DoneProjectsItem
                                    projectsItemImg={SeventhImg}
                                />
                                <DoneProjectsItem
                                    projectsItemImg={FithImg}
                                />
                        </Masonry>
                    </div>
            </section>
        )
    }
}