import React from 'react';
import {Link} from 'react-router-dom';
import AboutImg from './about.png';
import SecondImg from './02.png';

export default class AboutUsOffer extends React.Component {
    render() {
        return(
            <section className="iq-breadcrumb">
                <div className="iq-breadcrumb-info">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 align-self-center">
                        <h2 className="iq-fw-8 mb-3">About Us</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                        </div>
                        <div className="col-md-5">
                        <img src={AboutImg} className="img-fluid" alt="offer" />
                        </div>
                    </div>            </div>
                    </div>
                    <div className="iq-breadcrumb-img">
                    <img src={SecondImg} className="img-fluid breadcrumb-two" alt="offer" />
                </div>
            </section>
        )
    }
}