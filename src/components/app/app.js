import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import HomePage from '../home/homePage';
import AboutUsPage from '../aboutUs/aboutUsPage';
import PortfolioPage from '../portfolio/portfolioPage';
import FaqPage from '../faq/faqPage';
import PricingPage from '../pricing/pricingPage';
import ServicesPage from '../servicesComponent/servicesPage';
import ScrollToTop from '../scrollToTop';

import '../../css/style.css';
import '../../css/all.min.css';
import '../../css/bootstrap.min.css';
import '../../css/mega_menu.css';
import '../../css/ionicons.min.css';
import '../../css/owl.carousel.min.css'
import '../../css/menu_menu_reset.min.css';
import '../../css/responsive.css';
import '../../css/owl.carousel.min.css';
import '../../css/timeline.css';
import '../../css/typography.css';
import '../../css/wow.css';


export default class App extends React.Component {

    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Switch location={this.props.location}>
                    <Route path="/" exact>
                    <HomePage />
                    </Route>
                    <Route path="/about-us"><AboutUsPage /></Route>
                    <Route path="/portfolio"><PortfolioPage /></Route>
                    <Route path="/faq"><FaqPage /></Route>
                    <Route path="/pricing"><PricingPage /></Route>
                    <Route path="/service"><ServicesPage /></Route>
                    </Switch> 
                </ScrollToTop>
            </Router>
        )
    }
}

