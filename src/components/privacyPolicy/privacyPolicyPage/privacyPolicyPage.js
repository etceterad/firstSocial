import React from 'react';
import Header from '../../header';
import Offer from '../../offer';
import PrivacyPolicyInfo from '../privacyPolicyInfo';
import Footer from '../../footer';


export default class PrivacyPolicyPage extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            titleActive: "Privacy Policy",
            activeClass: false
        }
    }

    setActiveClass() {
        this.setState({
            activeClass: true
        })
    }

    render() {
        return (
            <>
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