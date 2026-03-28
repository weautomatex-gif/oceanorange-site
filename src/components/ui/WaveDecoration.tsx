type WaveVariant = "gentle" | "medium" | "dramatic";

interface WaveDecorationProps {
  color?: string;
  flip?: boolean;
  variant?: WaveVariant;
  className?: string;
}

const paths: Record<WaveVariant, string> = {
  gentle:
    "M0,40 C150,60 350,20 600,40 C850,60 1050,20 1440,40 L1440,80 L0,80 Z",
  medium:
    "M0,50 C200,10 400,70 720,35 C1000,5 1200,60 1440,30 L1440,80 L0,80 Z",
  dramatic:
    "M0,60 C150,0 350,80 600,20 C850,-20 1100,70 1440,10 L1440,80 L0,80 Z",
};

export default function WaveDecoration({
  color = "#FFFFFF",
  flip = false,
  variant = "gentle",
  className = "",
}: WaveDecorationProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full leading-none ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: variant === "dramatic" ? 80 : variant === "medium" ? 64 : 48 }}
      >
        <path d={paths[variant]} fill={color} />
      </svg>
    </div>
  );
}
