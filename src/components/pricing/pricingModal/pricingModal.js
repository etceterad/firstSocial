import React from 'react';
import './pricingModal.css';

const PricingModal = ({active, setActive, name, price}) => {

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
            <div className="purchase-popup" onClick={e => e.stopPropagation()}>
                <h2 className="purchase-popup__title">
                    You want to buy {name}? <br /> It will cost {price}$
                </h2> 
                <div className="purchase-popup__form">
                    <form action="">
                    <input type="text" className="purchase-popup__form-input" placeholder="Your TikTok login" />
                    <input type="text" className="purchase-popup__form-input" placeholder="Your e-mail" /><br />
                    <input type="checkbox" className="purchase-popup__form-check" id="purchase-popup-checkbox"/>
                    <label className="purchase-popup__form-label" for="purchase-popup-checkbox">I accept the user agreement</label><br />
                    <div className="purchase-popup__button-container">
                        <button className="purchase-popup__form-button button">Purchase</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )   
}

export default PricingModal;