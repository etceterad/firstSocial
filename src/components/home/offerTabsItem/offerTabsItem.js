import React from 'react';
import TikTokApi from '../../../services';

export default class OfferTabsItem extends React.Component {
    tikTokApi = new TikTokApi();

    constructor(props) {
        super(props)

        this.state = {
            firstName: {},
            desiredNumber: " "
        }

        this.handleInputLoginChange = this.handleInputLoginChange.bind(this)
    }

    handleInputLoginChange(e) {
        this.setState({
            firstName: e.target.value
        })
        console.log("Input: " + e.target.value)
    }

    render() {
        const {price, tabsImg, formTitle, placeholderValue, tabsToggleClass, imageClass, activateModal, runPost, numberInput, number} = this.props;

        return(
            <div className={tabsToggleClass}>
                <div className="main-form__tab-calculate wow fadeInLeft">
                    <h3 className="main-form__calculate-title">
                        {formTitle}
                    </h3>
                    <form >
                        <input 
                            type="text" 
                            className="main-form__input" 
                            required 
                            onChange={this.handleInputLoginChange} 
                            placeholder="Your TIK-TOK Login" 
                        />
                        <input 
                            type="text" 
                            className={(this.state.desiredNumber).length === 0 ? "main-form__input touched-input" : "main-form__input"} 
                            required 
                            onChange={numberInput} 
                            placeholder={"Number of desired " + placeholderValue} 
                        /><br/>
                        <div className="main-form__calculated-area">
                            <div className="calculated-area__button" onClick={(e) => runPost(e, this.state.firstName)}>
                                <button 
                                    type="submit" 
                                    onClick={activateModal} 
                                    disabled={number === 0 || number === "" } 
                                    className="button form-button"
                                >
                                    BUY
                                </button>
                            </div>   
                            <div className="calculated-area__price">
                                <label htmlFor="calculated-price">Price:</label>
                                <output id="calculated-price">{price}$</output>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={imageClass}>
                    <img src={tabsImg} alt="img" />
                </div>
            </div>       
        )
    }
}