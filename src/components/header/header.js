import React from 'react';
import {Link} from 'react-router-dom';
import LogoExmpl from '../headerNav/logoExmpl.png';

export default class Header extends React.Component {
    
    render() {
        return (
            <header id="main-header" className="header-one">
                <nav id="menu-1" className="mega-menu" data-color="">
                    <div className="menu-list-items">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="menu-logo">
                                        <li>
                                            <Link to="/"><img src={LogoExmpl} alt="logo" className="img-fluid" /></Link>
                                        </li>
                                        </ul>
                                        <ul className="menu-search-bar">
                                        <li className="menu-contact iq-fw-5"><a href="tel:0123456789" ><i className="fas fa-phone pr-1 "></i> 0 123 456 789</a></li>
                                        </ul>
                                        <ul className="menu-links">
                                        <li >
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us" className="active">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/portfolio">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to="/pricing">Pricing</Link>
                                        </li>                            
                                        <li><Link to="/contact-us">Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}