import React from 'react';
import AboutUsOffer from '../aboutUsOffer';
import Header from '../../header';
import OurServices from '../../ourServices';
import AboutUsInfo from '../aboutUsInfo';
import Footer from '../../footer';

export default class AboutUsPage extends React.Component {
    render() {
        return(
            <>
                <Header />
                <AboutUsOffer />
                <div className="main-content">
                    <OurServices />
                    <AboutUsInfo />
                </div>
                <Footer />
            </>
        )
    }
}