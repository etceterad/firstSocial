import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../css/style.css';
import logo from './logoExmpl.png';
import HeaderHamburger from '../../images/tiktokfans-hamburger.png';
import HeaderHamburgerClose from '../../images/tiktokfans-close.png';


export default class HeaderNav extends React.Component {
    listener = null;

    constructor() {
        super()

        this.state = {
            activeMenu: false,
            hiddenButton: true,
            nav: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listener )
    }

    handleScroll = () =>{
        if (window.pageYOffset > 15) {
            if(!this.state.nav){
              this.setState({ nav: true });
            }
        }else{
            if(this.state.nav){
              this.setState({ nav: false });
            }
        }
    }

    setActiveMenu() {
        this.setState({
            activeMenu: true
        })
    }

    resetActiveMenu() {
        this.setState ({
            activeMenu: false
        })
    }

    setHiddenButton() {
        this.setState({
            hiddenButton: false
        })
    }

    resetHiddenButton() {
        this.setState({
            hiddenButton: true
        })
    }

    functionForHamburger() {
        this.setActiveMenu();
        this.setHiddenButton();
    }

    functionForHamburgerClose() {
        this.resetHiddenButton();
        this.resetActiveMenu();
    }

    render(){
        return (
            <header id="main-header" className={`header-three ${this.state.nav && 'sticked wow fadeInDown'}`}>
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
                                <a href="##" onClick={() => this.functionForHamburgerClose()}>
                                    <img className={this.state.hiddenButton ? "header-hamburger-close hidden-btn" : "header-hamburger-close"} src={HeaderHamburgerClose} alt="hamburger-close"/>
                                </a>
                                <a href="##" onClick={() => this.functionForHamburger()}>
                                    <img className={this.state.hiddenButton ? "header-hamburger" : "header-hamburger hidden-btn"} src={HeaderHamburger} alt="hamburger"/>
                                </a>
                                <ul className={this.state.activeMenu ? "menu-links active-menu" : "menu-links"}>
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
    }

   
};