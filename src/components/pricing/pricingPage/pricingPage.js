import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import PricingOffer from '../pricingOffer';
import PricingList from '../pricingList';

export default class PricingPage extends React.Component {
    render() {
        return(
            <>
                <Header />
                <PricingOffer />
                <div className="main-content">
                    <PricingList />
                </div>
                <Footer />
            </>
        )
    }
}