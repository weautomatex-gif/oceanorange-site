// src/components/checkout/OrderSummary.tsx
// Order review panel displayed during checkout.
// Shows the list of items being purchased, quantities, prices,
// shipping method, and the order total.

type OrderSummaryProps = {
  subtotal: number;
  shipping: number;
  total: number;
};

export default function OrderSummary({ subtotal, shipping, total }: OrderSummaryProps) {
  // TODO: Read cart items from CartContext and list them here
  // TODO: Format currency with utility from src/lib/utils.ts
  return (
    <div>
      <h2>Order Review</h2>
      {/* Cart item list */}
      <p>Subtotal: £{subtotal.toFixed(2)}</p>
      <p>Shipping: £{shipping.toFixed(2)}</p>
      <p>Total: £{total.toFixed(2)}</p>
      <p>OrderSummary (placeholder)</p>
    </div>
  );
}
