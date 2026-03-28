interface SunburstEffectProps {
  rays?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export default function SunburstEffect({
  rays = 16,
  color = "#F28C38",
  opacity = 0.07,
  className = "",
}: SunburstEffectProps) {
  const angleStep = 360 / rays;
  const rayWidth = 2;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}
    >
      <div className="animate-sunburst w-[200%] h-[200%] absolute">
        <svg
          viewBox="-100 -100 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {Array.from({ length: rays }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2="0"
              y2="-100"
              stroke={color}
              strokeWidth={rayWidth}
              strokeOpacity={opacity}
              transform={`rotate(${i * angleStep})`}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
