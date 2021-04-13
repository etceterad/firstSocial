import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Offer from '../../offer';
import ContactUsForm from '../contactUsForm';
import ContactUsInfo from '../contactUsInfo';
import Preloader from '../../preloader';
import WOW from 'wowjs';

export default class ContactUsPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Contact Us",
            activeId: 6,
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            new WOW.WOW({
                live: false
            }).init();
        }, 500)
    }

    render() {
        return (
            <>
                <Preloader />
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