// src/components/cart/CartEmpty.tsx
// Empty cart state component.
// Shown when the shopping cart contains no items.
// Includes a friendly illustration and a CTA to start shopping.

export default function CartEmpty() {
  // TODO: Add branded illustration (e.g. empty beach bag SVG)
  // TODO: Link CTA to /shop
  return (
    <div>
      {/* Empty state illustration */}
      <h2>Your cart is empty</h2>
      <p>Looks like you haven&apos;t added anything yet.</p>
      {/* Shop CTA */}
      <p>CartEmpty (placeholder)</p>
    </div>
  );
}
