import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import PricingList from '../pricingList';

export default class PricingPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Pricing",
            activeId: 5
        }
    }

    render() {
        return(
            <>
                <Header active={this.state.activeId}/>
                <Offer titleActive={this.state.titleActive}/>
                <div className="main-content">
                    <PricingList />
                </div>
                <Footer />
            </>
        )
    }
}