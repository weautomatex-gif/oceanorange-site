// src/app/checkout/success/page.tsx
// Order confirmation / thank you page.
// Displayed after a successful Stripe payment.
// Shows order summary, estimated delivery, and prompts to continue shopping.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed!",
};

export default function CheckoutSuccessPage() {
  // TODO: Read Stripe session ID from search params and retrieve order details
  // TODO: Clear cart in CartContext after successful payment
  // TODO: Display order details and next steps
  return (
    <div>
      <h1>🎉 Order Confirmed!</h1>
      <p>Thank you for your purchase. Your order is on its way.</p>
      {/* Order details */}
      {/* Continue shopping CTA */}
      <p>Checkout success page (placeholder)</p>
    </div>
  );
}
