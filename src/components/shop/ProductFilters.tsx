"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";

type Category = "all" | "mens" | "womens" | "kids" | "jumpers";
type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

interface ProductFiltersProps {
  category: Category;
  sort: SortOption;
  onCategoryChange: (c: Category) => void;
  onSortChange: (s: SortOption) => void;
  total: number;
  filtered: number;
}

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mens", label: "Men's" },
  { value: "womens", label: "Women's" },
  { value: "kids", label: "Kids'" },
  { value: "jumpers", label: "Jumpers" },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low–High" },
  { value: "price-desc", label: "Price: High–Low" },
  { value: "newest", label: "Newest" },
];

export default function ProductFilters({
  category,
  sort,
  onCategoryChange,
  onSortChange,
  total,
  filtered,
}: ProductFiltersProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const currentSort = SORT_OPTIONS.find((o) => o.value === sort);

  return (
    <div className="sticky top-[80px] z-30 bg-white border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Category pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <SlidersHorizontal size={16} className="text-gray-400 shrink-0" />
          {CATEGORIES.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onCategoryChange(value)}
              className={`font-sans text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${
                category === value
                  ? "bg-[#0A2540] border-[#0A2540] text-white"
                  : "border-gray-200 text-[#0A2540] hover:border-[#0A2540]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Sort + count */}
        <div className="flex items-center gap-4">
          <span className="font-sans text-sm text-gray-400 shrink-0">
            {filtered} of {total} products
          </span>
          <div className="relative">
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 font-sans text-sm border border-gray-200 rounded-full px-4 py-1.5 hover:border-[#0A2540] transition-colors"
            >
              {currentSort?.label}
              {sortOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-10 bg-white border border-gray-100 rounded-xl shadow-lg py-2 w-48 z-50">
                {SORT_OPTIONS.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => { onSortChange(value); setSortOpen(false); }}
                    className={`block w-full text-left px-4 py-2 font-sans text-sm hover:bg-gray-50 transition-colors ${
                      sort === value ? "text-[#F28C38] font-medium" : "text-[#0A2540]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
