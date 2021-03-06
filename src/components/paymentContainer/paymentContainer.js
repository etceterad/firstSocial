import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentCheckout from "../paymentCheckout"

const PUBLIC_KEY = "pk_test_TYooMQauvdEDq54NiTphI7jx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = (props) => {
    const { amount, activeTabId, number } = props;

	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentCheckout amount={amount} activeTabId={activeTabId} number={number} resetActive={props.resetActive} />
		</Elements> 
	)
}

export default StripeContainer;