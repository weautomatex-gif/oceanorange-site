// src/components/shop/ProductGrid.tsx
// Responsive product grid layout.
// Renders a grid of ProductCard components, adapting columns for
// mobile, tablet, and desktop breakpoints.

import type { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  // TODO: Build responsive grid (2 cols mobile → 3 cols tablet → 4 cols desktop)
  // TODO: Add loading skeleton state using Loader component
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {/* ProductCard */}
          <p>ProductGrid item: {product.name} (placeholder)</p>
        </div>
      ))}
    </div>
  );
}
