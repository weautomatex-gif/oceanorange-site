// src/components/shop/QuickView.tsx
// Quick view modal for products.
// Opens when hovering/clicking a ProductCard to show key product details
// (images, size, colour picker, add to cart) without navigating to the PDP.

type QuickViewProps = {
  productId: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function QuickView({ productId, isOpen, onClose }: QuickViewProps) {
  // TODO: Fetch product details by productId when modal opens
  // TODO: Render within the reusable Modal component
  // TODO: Include ProductImages, SizeSelector, ColorSelector, AddToCartButton
  return (
    <div aria-hidden={!isOpen}>
      {/* Modal wrapper */}
      {/* ProductImages */}
      {/* SizeSelector */}
      {/* ColorSelector */}
      {/* AddToCartButton */}
      <p>QuickView: {productId} (placeholder)</p>
    </div>
  );
}
