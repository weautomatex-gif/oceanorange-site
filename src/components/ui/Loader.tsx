// src/components/ui/Loader.tsx
// Loading spinner and skeleton placeholder components.
// Used throughout the site for async data states —
// ProductGrid skeletons, button spinners, and page transitions.

type LoaderProps = {
  type?: "spinner" | "skeleton";
  className?: string;
};

export default function Loader({ type = "spinner", className }: LoaderProps) {
  // TODO: Implement animated spinner (Tailwind animate-spin)
  // TODO: Implement skeleton card variant for product grid loading
  if (type === "skeleton") {
    return <div className={className} aria-busy="true" aria-label="Loading…" />;
  }
  return (
    <div className={className} role="status" aria-label="Loading…">
      {/* Spinner SVG */}
      <span>Loading…</span>
    </div>
  );
}
