import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentCheckout from "../paymentCheckout"

const PUBLIC_KEY = "pk_test_51HtYdVCx9gPGc0ZJ5jCJr9DCN2Y1YjxV8AM32wbiUkAaXyp4zSxhd2ELKE6QaqPK8qvfOGamAdkDUiQcucW2w3qG00p3fZ2vOo"

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