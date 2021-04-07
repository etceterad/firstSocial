import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import FaqOffer from '../faqOffer';
import FaqMainContent from '../faqMainContent';

export default class FaqPage extends React.Component {
    render() {
        return(
            <>
                <Header />
                <FaqOffer />
                <div className="main-content">
                    <FaqMainContent />
                </div>
                <Footer />
            </>
        )
    }
}