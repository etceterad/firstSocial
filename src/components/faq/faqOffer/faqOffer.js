import React from 'react';
import {Link} from 'react-router-dom';
import AboutImg from './about.png';
import SecondImg from './02.png';


export default class FaqOffer extends React.Component {
    render() {
        return(
            <section class="iq-breadcrumb">
                <div class="iq-breadcrumb-info">
                    <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-7 align-self-center">
                                    <h2 class="iq-fw-9 mb-3">FAQ</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div class="col-md-5">
                                    <img src={AboutImg} class="img-fluid" alt="offer" />
                                </div>
                            </div>
                        </div>            
                    </div>
                <div class="iq-breadcrumb-img">
                    <img src={SecondImg} class="img-fluid breadcrumb-two" alt="offer" />
                </div>
            </section>
        )
    }
} 