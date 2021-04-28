import React from 'react';
import Offer from '../../offer';
import Preloader from '../../preloader';
import Header from '../../header';
import AccountActivity from '../accountActivity';
import ManageAccount from '../manageAccount';
import Footer from '../../footer';
import WOW from 'wowjs';

export default class AccountPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Account Settings"
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
        return(
            <>
                <Preloader />
                <Header />
                <Offer titleActive={this.state.titleActive} />
                <div className="main-content">
                    <AccountActivity />
                    <ManageAccount />
                </div>
                <Footer />
            </> 
        )
    }
}