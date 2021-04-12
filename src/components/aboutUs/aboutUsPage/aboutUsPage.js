import React from 'react';
import Offer from '../../offer';
import Header from '../../header';
import OurServices from '../../ourServices';
import AboutUsInfo from '../aboutUsInfo';
import Footer from '../../footer';
import Preloader from '../../preloader';
import WOW from 'wowjs';

export default class AboutUsPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "About Us",
            activeId: 2
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            new WOW.WOW({
                live: false
            }).init();
        }, 500)
    }

    render() {
        return(
            <>
                <Preloader />
                <Header active={this.state.activeId} />
                <Offer titleActive={this.state.titleActive} />
                <div className="main-content">
                    <OurServices />
                    <AboutUsInfo />
                </div>
                <Footer />
            </>
        )
    }
}