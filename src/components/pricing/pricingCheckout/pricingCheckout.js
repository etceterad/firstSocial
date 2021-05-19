import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Formik, Field } from 'formik';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import SucceededImg from '../../../images/success.svg'

const CARD_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

const PricingCheckout = (props) =>  {
    const [succeeded, setSucceeded ] = useState(false)
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const { amount } = props;
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmitNative = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })  

    if(!error) {
        console.log(amount)
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: (amount*100),
                id
            })

            if(response.data.succeeded) {
                console.log("Successful payment")
                setSucceeded(true)
                setProcessing(false)
            } else {
                console.log(`error`)                
                setError(`Payment failed`);
                setProcessing(false);
            }

        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("error else")

    }
    }

    const handleChangeNative = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };  

    useEffect(() => {
        if(succeeded) {
            setTimeout(() => props.resetActive(), 4000)
        }
    })

    return ( 
        <div>
        {succeeded ?
            <div className="success-container" >
                <p className={succeeded ? "result-message" : "result-message hidden-result"}>
                    Payment succeeded, see the result in your
                    <a
                        href={`https://dashboard.stripe.com/test/payments`}
                    >
                    {" "}
                    Stripe dashboard.
                    </a> Refresh the page to pay again.
                </p>
                <img src={SucceededImg} className="success-img" alt="" />
            </div>
            :
            <div>
                <div className="payment-info">
                    <h5 className="text-center">Payment Information</h5>
                    <div className="d-flex payment-info__container">
                        <div className="payment-product__info">
                            <p 
                                className="product-info__text"
                            >
                                {props.name}
                            </p>
                        </div>
                        <div className="payment-product__price">
                            <p className="product-price__text">
                                {amount}$
                            </p>
                        </div>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        check: false
                    }}
                    validateOnBlur
                    onSubmit={values => console.log(values)}
                >
                {({ values, isValid, dirty }) => (
                    <form id="payment-form" onSubmit={handleSubmitNative}>
                        <label>
                            <Field
                                type="checkbox"
                                name="check"
                            />
                            <span className="payment-check-label">
                                I agree with Privacy Policy and Terms of service
                            </span>
                        </label>
                        <CardElement id="card-element" options={CARD_OPTIONS} onChange={handleChangeNative} />
                        <button
                            disabled={processing || disabled || succeeded || !isValid || !dirty || !values.check}
                            id="submit"
                            className="checkout-btn"
                        >
                            <span id="button-text">
                            {processing ? (
                                <div className="spinner-payment" id="spinner"></div>
                            ) : (
                                "Pay now"
                            )}
                            </span>
                        </button>
                        {error && (
                            <div className="card-error" role="alert">
                            {error}
                            </div>
                        )}  
                    </form>
                )}
                </Formik>
            </div>
        }
        </div>
    )
}

export default PricingCheckout;