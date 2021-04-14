import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import PortfolioGrid from '../portfolioGrid';
import WOW from 'wowjs';
import Preloader from '../../preloader';

export default class PortfolioPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Portfolio",
            activeClass: true,
            activeId: 3
        }
    }

    componentDidMount() {
        new WOW.WOW({
          live: false
      }).init();
    }

    render() {
        return (
            <>
                <Preloader />
                <Header active={this.state.activeId} />
                <Offer titleActive={this.state.titleActive} />
                <PortfolioGrid />
                <Footer />
            </>
        )
    }
}