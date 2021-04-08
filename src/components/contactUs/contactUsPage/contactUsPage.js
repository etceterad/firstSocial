import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import ContactUsOffer from '../contactUsOffer';
import ContactUsForm from '../contactUsForm';
import ContactUsInfo from '../contactUsInfo';

export default class ContactUsPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <ContactUsOffer />
                    <div className="main-content">
                        <ContactUsForm />
                        <ContactUsInfo />
                    </div>
                <Footer />
            </>
        )
    }
}