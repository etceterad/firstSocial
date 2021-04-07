import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import PortfolioOffer from '../portfolioOffer';
import PortfolioGrid from '../portfolioGrid';

export default class PortfolioPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <PortfolioOffer />
                <PortfolioGrid />
                <Footer />
            </>
        )
    }
}