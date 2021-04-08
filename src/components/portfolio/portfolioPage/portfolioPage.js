import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import PortfolioGrid from '../portfolioGrid';

export default class PortfolioPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Portfolio",
            activeClass: true,
            activeId: 3
        }
    }

    // setActiveClass() {
    //     this.setState({
    //         activeClass: true
    //     })
    // }

    render() {
        return (
            <>
                <Header active={this.state.activeId} />
                <Offer titleActive={this.state.titleActive} />
                <PortfolioGrid />
                <Footer />
            </>
        )
    }
}