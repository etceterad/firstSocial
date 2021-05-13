const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount: amount,
			currency: "USD",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			succeeded: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			succeeded: false
		})
	}
})

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})