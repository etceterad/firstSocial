import React from 'react';
import AboutImg from './about.png';
import SecondImg from './02.png';
import {Link} from 'react-router-dom';

export default class Offer extends React.Component {

    render() {

        return (
            <section className="iq-breadcrumb">
                <div className="iq-breadcrumb-info">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 align-self-center">
                            <h2 className="iq-fw-8 mb-3">{this.props.titleActive}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{this.props.titleActive}</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-5">
                            <img src={AboutImg} className="img-fluid" alt="offer" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="iq-breadcrumb-img">
                    <img src={SecondImg} className="img-fluid breadcrumb-two" alt="offer" />
                </div>
            </section>
        )
    }
}