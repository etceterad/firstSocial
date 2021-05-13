import React, { useState } from 'react'
import axios from 'axios'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

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

const PaymentCheckout = (props) =>  {
    const [succeeded, setSucceeded ] = useState(false)
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const { amount } = props;
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
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

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };  

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement id="card-element" options={CARD_OPTIONS} onChange={handleChange} />
            <button
                disabled={processing || disabled || succeeded}
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
            <p className={succeeded ? "result-message" : "result-message hidden-result"}>
                Payment succeeded, see the result in your
                <a
                    href={`https://dashboard.stripe.com/test/payments`}
                >
                {" "}
                Stripe dashboard.
                </a> Refresh the page to pay again.
            </p>
            </form>
    )
}

export default PaymentCheckout;