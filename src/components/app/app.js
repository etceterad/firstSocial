import React from 'react';
import Header from '../header';
import Offer from '../offer';
import MainContent from '../mainContent';
import Footer from '../footer';
// import { BrowserRouter as Router, Route} from "react-router-dom";
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
        <>
            <Header/>
            <Offer />
            <MainContent />
            <Footer />
        </>
    )
}

export default App;