
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(""); // replace with your secret key

router.post("/create-checkout-session", async (req, res) => {
    const { hoardingId, hoardingDimension, hourlyRate } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: `Hoarding: ${hoardingDimension}`,
                    },
                    unit_amount: hourlyRate * 100,
                },
                quantity: 1,
            }],
            mode: "payment",
            success_url: `http://localhost:5173/user/success?hoardingId=${hoardingId}&hoardingDimension=${hoardingDimension}&hourlyRate=${hourlyRate}`,
            cancel_url: "http://localhost:3000/payment-cancelled",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Stripe session error:", error);
        res.status(500).json({ error: "Failed to create Stripe session" });
    }
});

module.exports = router;
