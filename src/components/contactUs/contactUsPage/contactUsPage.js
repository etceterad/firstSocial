import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import ContactUsForm from '../contactUsForm';
import ContactUsInfo from '../contactUsInfo';

export default class ContactUsPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Contact Us",
            activeId: 6
        }
    }

    render() {
        return (
            <>
                <Header active={this.state.activeId} />
                <Offer titleActive={this.state.titleActive}/>
                    <div className="main-content">
                        <ContactUsForm />
                        <ContactUsInfo />
                    </div>
                <Footer />
            </>
        )
    }
}