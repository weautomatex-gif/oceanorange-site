// src/components/ui/Toast.tsx
// Notification toast component.
// Displays brief feedback messages (e.g. "Added to cart!", error messages).
// Auto-dismisses after a configurable timeout.
// Uses Framer Motion for slide-in/out animations.

"use client";

type ToastVariant = "success" | "error" | "info";

type ToastProps = {
  message: string;
  variant?: ToastVariant;
  onDismiss: () => void;
};

export default function Toast({ message, variant = "success", onDismiss }: ToastProps) {
  // TODO: Auto-dismiss after 4 seconds
  // TODO: Animate with Framer Motion (slide from bottom-right)
  return (
    <div role="alert" aria-live="polite" data-variant={variant}>
      <p>{message}</p>
      <button onClick={onDismiss} aria-label="Dismiss notification">✕</button>
    </div>
  );
}
