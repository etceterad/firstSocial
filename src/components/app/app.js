import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import HomePage from '../home/homePage';
import AboutUsPage from '../aboutUs/aboutUsPage';
import PortfolioPage from '../portfolio/portfolioPage';

import '../../css/style.css';
import '../../css/all.min.css';
import '../../css/bootstrap.min.css';
import '../../css/mega_menu.css';
import '../../css/ionicons.min.css';
import '../../css/owl.carousel.min.css'
import '../../css/magnific-popup.css';
import '../../css/menu_menu_reset.min.css';
import '../../css/responsive.css';
import '../../css/owl.carousel.min.css';
import '../../css/timeline.css';
import '../../css/typography.css';
import '../../css/wow.css';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                 </Route>
                <Route path="/about-us"><AboutUsPage /></Route>
                <Route path="/portfolio"><PortfolioPage /></Route>
            </Switch> 
        </Router>
    )
}

export default App;