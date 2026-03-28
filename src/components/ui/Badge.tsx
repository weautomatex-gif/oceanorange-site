// src/components/ui/Badge.tsx
// Product badge component.
// Used on ProductCard to highlight states like 'New', 'Sale', 'Limited', 'Sold Out'.
// Colour-coded by badge type using brand accent colours.

type BadgeVariant = "new" | "sale" | "limited" | "sold-out";

type BadgeProps = {
  variant: BadgeVariant;
  label?: string;
};

const BADGE_LABELS: Record<BadgeVariant, string> = {
  new: "New",
  sale: "Sale",
  limited: "Limited",
  "sold-out": "Sold Out",
};

export default function Badge({ variant, label }: BadgeProps) {
  // TODO: Apply Tailwind colour classes per variant (e.g. sale → coral accent)
  return (
    <span data-badge={variant}>
      {label ?? BADGE_LABELS[variant]}
    </span>
  );
}
