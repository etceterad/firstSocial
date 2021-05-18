import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PricingCheckout from '../pricingCheckout';

const PUBLIC_KEY = "pk_test_TYooMQauvdEDq54NiTphI7jx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = (props) => {
    const { amount, name } = props;

	return (
		<Elements stripe={stripeTestPromise}>
			<PricingCheckout amount={amount} resetActive={props.resetActive} name={name} />
		</Elements> 
	)
}

export default StripeContainer;