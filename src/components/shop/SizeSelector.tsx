interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="font-sans font-medium text-sm text-[#0A2540]">Size</label>
        <button
          className="font-sans text-xs text-[#1B6FA8] underline hover:text-[#F28C38] transition-colors"
          type="button"
        >
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onSelect(size)}
            className={`px-4 py-2 rounded-lg border font-sans text-sm font-medium transition-all duration-200 ${
              selectedSize === size
                ? "bg-[#0A2540] border-[#0A2540] text-white"
                : "border-gray-200 text-[#0A2540] hover:border-[#0A2540]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
