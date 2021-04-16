import React from 'react';

export default class OfferTabsItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            desiredNumber: ""
        }

        this.handleInputLoginChange = this.handleInputLoginChange.bind(this)
        this.handleInputDesiredNumberChange = this.handleInputDesiredNumberChange.bind(this)
    }

    handleInputLoginChange(e) {
        this.setState({
            firstName: e.target.value
        })
        console.log("Input: " + e.target.value)
    }

    handleInputDesiredNumberChange(e) {
        this.setState({
            desiredNumber: e.target.value.replace(/[^0-9]/ig, '')
        })
        console.log(this.state.desiredNumber);
    }

    render() {
        const {tabsImg, formTitle, placeholderValue, tabsToggleClass} = this.props;

        return(
            <div className={tabsToggleClass}>
                <div className="main-form__tab-calculate wow fadeInLeft">
                    <h3 className="main-form__calculate-title">
                        {formTitle}
                    </h3>
                    <form action="">
                        <input type="text" className="main-form__input" onChange={this.handleInputLoginChange} placeholder="Your TIK-TOK Login" />
                        <input type="text" className="main-form__input" onChange={this.handleInputDesiredNumberChange} placeholder={"Number of desired " + placeholderValue} /><br/>
                        <div className="main-form__calculated-area">
                            <div className="calculated-area__button">
                                <button type="submit" className="button form-button">BUY</button>
                            </div>   
                            <div className="calculated-area__price">
                                <label htmlFor="calculated-price">Price:</label>
                                <output id="calculated-price">49$</output>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="main-form__tab-img wow fadeInRight">
                    <img src={tabsImg} alt="img" />
                </div>
            </div>       
        )
    }
}