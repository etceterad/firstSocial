import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import ServicesAbout from '../servicesAbout';
import ServicesSolutions from '../servicesSolutions';
import OurServices from '../../ourServices';

export default class ServicesPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Service"
        }
    }

    render() {
        return(
            <>
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