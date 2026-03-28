// src/components/cart/CartItem.tsx
// Single cart line item component.
// Displays product thumbnail, name, variant (size/colour), quantity controls,
// unit price, and a remove button.

import type { CartItem as CartItemType } from "@/types/cart";

type CartItemProps = {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  // TODO: Build quantity +/- stepper
  // TODO: Animate item removal with Framer Motion exit animation
  return (
    <div>
      {/* Product thumbnail */}
      {/* Name + variant */}
      {/* Quantity stepper */}
      {/* Price */}
      {/* Remove button */}
      <p>CartItem: {item.name} (placeholder)</p>
    </div>
  );
}
