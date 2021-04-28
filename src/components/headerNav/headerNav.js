import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/style.css';
import logo from './logoExmpl.png';


export default class HeaderNav extends React.Component {
    listener = null;

    constructor() {
        super()

        this.state = {
            activeMenu: false,
            nav: false
        }

        this.setActiveMenu = this.setActiveMenu.bind(this);
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
        this.setState(prevState => ({
            activeMenu: !prevState.activeMenu
        }))
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
                                <div className={this.state.activeMenu ? "menu-btn open" : "menu-btn"} onClick={this.setActiveMenu}>
                                    <div className="menu-btn__burger">
                                    </div>
                                </div>
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
                                    <Link className="slide-button button" to="/login">
                                        <div className="first">Login</div>
                                        <div className="second">Login</div>
                                    </Link>
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