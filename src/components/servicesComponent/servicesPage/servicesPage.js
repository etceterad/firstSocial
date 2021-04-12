import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import ServicesAbout from '../servicesAbout';
import ServicesSolutions from '../servicesSolutions';
import OurServices from '../../ourServices';
import Preloader from '../../preloader';
import WOW from 'wowjs';

export default class ServicesPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Service"
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
                <Header />
                <Offer titleActive={this.state.titleActive} />
                <div className="main-content">
                    <ServicesAbout />
                    <ServicesSolutions />
                    <OurServices />
                </div>
                <Footer />
            </>
        )
    }
}