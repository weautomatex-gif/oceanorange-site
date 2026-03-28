// src/components/checkout/CheckoutForm.tsx
// Stripe Elements payment form for the checkout page.
// Wraps Stripe's CardElement (or PaymentElement for the new integration)
// and handles form submission, payment confirmation, and error display.
// Must be rendered inside a Stripe Elements provider.

"use client";

export default function CheckoutForm() {
  // TODO: Wrap in <Elements stripe={stripePromise} options={options}>
  // TODO: Use useStripe() and useElements() hooks
  // TODO: Handle form submission → confirmPayment → redirect to /checkout/success
  return (
    <form>
      {/* Stripe PaymentElement */}
      {/* Submit button */}
      {/* Error display */}
      <p>CheckoutForm — Stripe Elements (placeholder)</p>
    </form>
  );
}
