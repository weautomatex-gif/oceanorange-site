import type { ProductColor } from "@/data/products";

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: string | null;
  onSelect: (color: ProductColor) => void;
}

export default function ColorSelector({ colors, selectedColor, onSelect }: ColorSelectorProps) {
  return (
    <div>
      <label className="font-sans font-medium text-sm text-[#0A2540] block mb-3">
        Colour:{" "}
        <span className="font-normal text-gray-500">{selectedColor ?? "Select"}</span>
      </label>
      <div className="flex flex-wrap gap-2.5">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => onSelect(color)}
            title={color.name}
            aria-label={`Select colour ${color.name}`}
            aria-pressed={selectedColor === color.name}
            className={`w-7 h-7 rounded-full border-2 transition-all duration-200 ${
              selectedColor === color.name
                ? "border-[#F28C38] ring-2 ring-offset-2 ring-[#F28C38]"
                : "border-gray-200 hover:border-gray-400"
            }`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
