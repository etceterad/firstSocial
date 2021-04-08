import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import FaqMainContent from '../faqMainContent';

export default class FaqPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "FAQ",
            activeId: 4
        }
    }

    render() {
        return(
            <>
                <Header active={this.state.activeId} />
                <Offer titleActive={this.state.titleActive}/>
                <div className="main-content">
                    <FaqMainContent />
                </div>
                <Footer />
            </>
        )
    }
}