import React from 'react';
import {Link} from 'react-router-dom';
import LogoExmpl from '../headerNav/logoExmpl.png';

export default class Header extends React.Component {
    listener = null;

    constructor() {
        super()

        this.state = {
            activeMenu: false,
            nav: false
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.setActiveMenu = this.setActiveMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listener)
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
    
    render() {
        const {active} = this.props;

        return (
            <>
                <header id="main-header" className={`header-one ${this.state.nav && 'sticked'}`}>
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
                                            <div className={this.state.activeMenu ? "menu-btn open" : "menu-btn"} onClick={this.setActiveMenu}>
                                                <div className="menu-btn__burger">
                                                </div>
                                            </div>
                                            <ul className="menu-search-bar">
                                            <li className="menu-contact iq-fw-5"><a href="tel:0123456789" ><i className="fas fa-phone pr-1 "></i> 0 123 456 789</a></li>
                                            </ul>
                                            <ul className={this.state.activeMenu ? "menu-links active-menu" : "menu-links"}>
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