import React from 'react';
import Header from '../../header';
import Offer from '../../offer';
import PrivacyPolicyInfo from '../privacyPolicyInfo';
import Footer from '../../footer';
import Preloader from '../../preloader';
import WOW from 'wowjs';


export default class PrivacyPolicyPage extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            titleActive: "Privacy Policy",
            activeClass: false
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            new WOW.WOW({
                live: false
            }).init();
        }, 500)
    }

    setActiveClass() {
        this.setState({
            activeClass: true
        })
    }

    render() {
        return (
            <>
                <Preloader />
                <Header active={this.state.activeClass} setActive={this.setActiveClass}/>
                <Offer titleActive={this.state.titleActive}/>
                <div className="main-content">
                    <PrivacyPolicyInfo />
                </div>
                <Footer />
            </>
        )
    }
}