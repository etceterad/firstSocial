import React from 'react';
import {Link} from 'react-router-dom';
import LogoExmpl from '../headerNav/logoExmpl.png';

export default class Header extends React.Component {
    
    render() {
        const {active} = this.props;

        return (
            <>
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
                                                <Link to="/about-us" className={active === 2 ? "active" : ""}>About us</Link>
                                            </li>
                                            <li>
                                                <Link to="/portfolio" className={active === 3 ? "active" : "" }>Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link to="/faq" className={active === 4 ? "active" : ""}>FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/pricing" className={active === 5 ? "active" : ""}>Pricing</Link>
                                            </li>                            
                                            <li><Link to="/contact-us" className={active === 6 ? "active" : ""}>Contact us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}