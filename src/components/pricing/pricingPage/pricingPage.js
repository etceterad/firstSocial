import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import PricingList from '../pricingList';
import Preloader from '../../preloader';
import WOW from 'wowjs';

export default class PricingPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Pricing",
            activeId: 5
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            new WOW.WOW({
                live: false
            }).init();
        }, 700)
    }

    render() {
        return(
            <>
                <Preloader />
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