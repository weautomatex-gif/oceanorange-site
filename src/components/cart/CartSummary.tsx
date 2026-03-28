// src/components/cart/CartSummary.tsx
// Cart summary panel.
// Displays itemised subtotal, shipping estimate, taxes, and grand total.
// Includes a primary CTA to proceed to checkout.

type CartSummaryProps = {
  subtotal: number;
  shipping?: number;
  total: number;
};

export default function CartSummary({ subtotal, shipping, total }: CartSummaryProps) {
  // TODO: Format currency using a utility from src/lib/utils.ts
  // TODO: Add promo code input field
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Subtotal: £{subtotal.toFixed(2)}</p>
      <p>Shipping: {shipping !== undefined ? `£${shipping.toFixed(2)}` : "Calculated at checkout"}</p>
      <p>Total: £{total.toFixed(2)}</p>
      {/* Promo code input */}
      {/* Checkout CTA */}
      <p>CartSummary (placeholder)</p>
    </div>
  );
}
