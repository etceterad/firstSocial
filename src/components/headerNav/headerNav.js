import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/style.css';
import logo from './logoExmpl.png';


const HeaderNav = () => {
    return (
        <header id="main-header" className="header-three">
            <nav id="menu-1" className="mega-menu">
                <div class="menu-list-items">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="menu-logo">
                                <li>
                                    <Link to="/"><img src={logo} alt="logo" className="img-fluid pr-4" /></Link>
                                </li>
                            </ul>
                            <ul class="menu-contact">
                                <li className=" text-black iq-fw-9"><a href="tel:0123456789" ><i className="fas fa-phone pr-2 pl-4"></i> 0 123 456 789</a></li>
                            </ul>
                            <ul className="menu-links">
                                <li >
                                    <Link to="/" className="active">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about-us">About us</Link>
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
                                <li>
                                        <Link to="/contact-us">Contact us</Link>
                                </li>
                            </ul>
                            <ul className="menu-sidebar">
                            <li>
                                <a className="slide-button button" href="login.html">
                                    <div className="first">Login</div>
                                    <div className="second">Login</div>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderNav;