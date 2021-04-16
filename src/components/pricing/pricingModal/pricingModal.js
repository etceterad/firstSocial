import React from 'react';
import './pricingModal.css';

export default class PricingModal extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            login: "",
            email: "",
            checkboxAgreement: true
        }

        this.handleLoginInput = this.handleLoginInput.bind(this)
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handleCheckboxArgeementInput = this.handleCheckboxArgeementInput.bind(this)
    }

    handleLoginInput(e) {
        console.log(this.state.login)
        this.setState({
            login: e.target.value
        })
    }

    handleEmailInput(e) {
        console.log(this.state.email)
        this.setState({
            email: e.target.value
        })
    }

    handleCheckboxArgeementInput(e) {
        console.log(this.state.checkboxAgreement)
        // e.target.value = e.target.checked
        this.setState({
            checkboxAgreement: e.target.checked
        })
    }

    render() {

        const {resetActive, active, name, price} = this.props;

        return(
            <div className={active ? "modal active" : "modal"} onClick={resetActive} >
                <div className="purchase-popup" onClick={e => e.stopPropagation()}>
                    <h2 className="purchase-popup__title">
                        You want to buy {name}? <br /> It will cost {price}$
                    </h2> 
                    <div className="purchase-popup__form">
                        <form action="">
                        <input type="text" className="purchase-popup__form-input" onChange={this.handleLoginInput} placeholder="Your TikTok login" />
                        <input type="text" className="purchase-popup__form-input" onChange={this.handleEmailInput} placeholder="Your e-mail" /><br />
                        <input
                            type="checkbox" 
                            className="purchase-popup__form-check" 
                            onChange={this.handleCheckboxArgeementInput} 
                            checked={this.state.checkboxAgreement} 
                            id="purchase-popup-checkbox"
                         />
                        <label className="purchase-popup__form-label" for="purchase-popup-checkbox">I accept the user agreement</label><br />
                        <button className="purchase-popup__form-button button">Purchase</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }       
}