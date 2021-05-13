import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentCheckout from "../paymentCheckout"

const PUBLIC_KEY = "pk_test_TYooMQauvdEDq54NiTphI7jx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = (props) => {
    const { amount } = props;

	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentCheckout amount={amount} />
		</Elements> 
	)
}

export default StripeContainer;