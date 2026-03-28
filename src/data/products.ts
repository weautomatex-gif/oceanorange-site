export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: "mens" | "womens" | "kids" | "jumpers";
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  isFeatured: boolean;
  isNew: boolean;
  collection: string;
}

export const products: Product[] = [
  // ─── Men's ───────────────────────────────────────────────────────────
  {
    id: "mens-001",
    slug: "sunset-wave-tee",
    name: "Sunset Wave Tee",
    description:
      "Born at golden hour on a Cornish beach, the Sunset Wave Tee captures that fleeting moment when the sky turns amber and the ocean glows. 100% organic cotton, garment-dyed for a lived-in softness.",
    price: 27.99,
    category: "mens",
    collection: "mens",
    colors: [
      { name: "Ocean Blue", hex: "#1B6FA8" },
      { name: "Sunset Orange", hex: "#F28C38" },
      { name: "Charcoal", hex: "#374151" },
      { name: "Sand", hex: "#F5E6D0" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: "mens-002",
    slug: "deep-dive-tee",
    name: "Deep Dive Tee",
    description:
      "Inspired by the stillness below the surface — where the world goes quiet and every colour deepens. A classic crew neck cut from heavy-weight organic cotton in the richest deep navy.",
    price: 24.99,
    category: "mens",
    collection: "mens",
    colors: [
      { name: "Navy", hex: "#0A2540" },
      { name: "Seafoam", hex: "#7DD3C0" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: "mens-003",
    slug: "coral-reef-tee",
    name: "Coral Reef Tee",
    description:
      "Vivid and alive — just like the reefs Stuart photographs on his underwater adventures. This lightweight tee features a subtle reef-inspired print on the back hem, in a relaxed oversized cut.",
    price: 27.99,
    category: "mens",
    collection: "mens",
    colors: [
      { name: "Coral", hex: "#FF6B5A" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Sand", hex: "#F5E6D0" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    id: "mens-004",
    slug: "golden-hour-tee",
    name: "Golden Hour Tee",
    description:
      "That last hour before the sun slips below the horizon — everything glows. Our most premium tee, cut from a buttery-soft pima cotton blend with a relaxed fit and dropped shoulders.",
    price: 29.99,
    category: "mens",
    collection: "mens",
    colors: [
      { name: "Sunset Orange", hex: "#F28C38" },
      { name: "Ocean Blue", hex: "#1B6FA8" },
      { name: "Charcoal", hex: "#374151" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80",
    ],
    isFeatured: false,
    isNew: true,
  },

  // ─── Women's ─────────────────────────────────────────────────────────
  {
    id: "womens-001",
    slug: "sea-breeze-tee",
    name: "Sea Breeze Tee",
    description:
      "Light as the breeze off the water on a warm summer morning. This flowy cropped tee in 100% organic cotton moves with you — perfect from beach to boardwalk.",
    price: 27.99,
    category: "womens",
    collection: "womens",
    colors: [
      { name: "Seafoam", hex: "#7DD3C0" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Sand", hex: "#F5E6D0" },
      { name: "Coral", hex: "#FF6B5A" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: "womens-002",
    slug: "turtle-bay-tee",
    name: "Turtle Bay Tee",
    description:
      "Our most-loved design — a hand-drawn sea turtle on the chest, inspired by Stuart's underwater photography. Made from recycled cotton blend in a relaxed fit that works everywhere.",
    price: 24.99,
    category: "womens",
    collection: "womens",
    colors: [
      { name: "Ocean Blue", hex: "#1B6FA8" },
      { name: "Sand", hex: "#F5E6D0" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: "womens-003",
    slug: "ocean-mist-tee",
    name: "Ocean Mist Tee",
    description:
      "Soft, subtle, and effortlessly beautiful — just like the morning sea mist rolling in off the water. A feminine fitted cut in our softest organic ring-spun cotton.",
    price: 27.99,
    category: "womens",
    collection: "womens",
    colors: [
      { name: "Seafoam", hex: "#7DD3C0" },
      { name: "Coral", hex: "#FF6B5A" },
      { name: "Navy", hex: "#0A2540" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    id: "womens-004",
    slug: "coastal-bloom-tee",
    name: "Coastal Bloom Tee",
    description:
      "Where wildflowers meet the shoreline. This limited-design tee features a delicate floral wave pattern, inspired by the clifftop blooms Stuart photographs each spring.",
    price: 29.99,
    category: "womens",
    collection: "womens",
    colors: [
      { name: "Sand", hex: "#F5E6D0" },
      { name: "Coral", hex: "#FF6B5A" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    ],
    isFeatured: false,
    isNew: true,
  },

  // ─── Kids' ───────────────────────────────────────────────────────────
  {
    id: "kids-001",
    slug: "little-explorer-tee",
    name: "Little Explorer Tee",
    description:
      "For the tiny adventurers who find wonder in every wave. This durable kids' tee features our signature compass rose design and is built to withstand every sandy beach day.",
    price: 19.99,
    category: "kids",
    collection: "kids",
    colors: [
      { name: "Seafoam", hex: "#7DD3C0" },
      { name: "Sunset Orange", hex: "#F28C38" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      "https://images.unsplash.com/photo-1471286174890-9c112ff931f8?w=800&q=80",
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "kids-002",
    slug: "baby-wave-tee",
    name: "Baby Wave Tee",
    description:
      "Their first wave. Our softest fabric — 100% organic cotton brushed for extra gentleness — with a tiny embroidered wave on the chest. The perfect first Ocean Orange piece.",
    price: 17.99,
    category: "kids",
    collection: "kids",
    colors: [
      { name: "Sand", hex: "#F5E6D0" },
      { name: "Ocean Blue", hex: "#1B6FA8" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80",
      "https://images.unsplash.com/photo-1482849297070-f4fae2173ebe?w=800&q=80",
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: "kids-003",
    slug: "starfish-adventures-tee",
    name: "Starfish Adventures Tee",
    description:
      "Rock pooling, sandcastle building, first surf lessons — this tee is made for it all. Bold starfish graphic on the front, soft on the inside, tough enough for whatever adventures lie ahead.",
    price: 19.99,
    category: "kids",
    collection: "kids",
    colors: [
      { name: "Coral", hex: "#FF6B5A" },
      { name: "Seafoam", hex: "#7DD3C0" },
      { name: "Sand", hex: "#F5E6D0" },
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80",
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    id: "kids-004",
    slug: "rainbow-reef-tee",
    name: "Rainbow Reef Tee",
    description:
      "All the colours of the reef in one cheerful design. This bright, playful tee is guaranteed to be their favourite — especially when paired with sandy feet and a big smile.",
    price: 19.99,
    category: "kids",
    collection: "kids",
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Seafoam", hex: "#7DD3C0" },
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80",
      "https://images.unsplash.com/photo-1542327897-4141b355e8d4?w=800&q=80",
    ],
    isFeatured: false,
    isNew: true,
  },

  // ─── Jumpers ─────────────────────────────────────────────────────────
  {
    id: "jumpers-001",
    slug: "voyager-sweatshirt",
    name: "Voyager Sweatshirt",
    description:
      "For those mornings when the surf is up but the air is crisp. The Voyager is a 380gsm fleece-backed sweatshirt with a relaxed boxy fit — the one you'll reach for every single day.",
    price: 44.99,
    category: "jumpers",
    collection: "jumpers",
    colors: [
      { name: "Navy", hex: "#0A2540" },
      { name: "Sand", hex: "#F5E6D0" },
      { name: "Charcoal", hex: "#374151" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
      "https://images.unsplash.com/photo-1614251055880-ee96e4803393?w=800&q=80",
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    id: "jumpers-002",
    slug: "harbour-crew-neck",
    name: "Harbour Crew Neck",
    description:
      "Classic crew neck, coastal soul. The Harbour is our most versatile jumper — lightweight enough for summer evenings and layerable for winter swells. Embroidered chest logo, ribbed cuffs.",
    price: 39.99,
    category: "jumpers",
    collection: "jumpers",
    colors: [
      { name: "Ocean Blue", hex: "#1B6FA8" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Coral", hex: "#FF6B5A" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: "jumpers-003",
    slug: "driftwood-hoodie",
    name: "Driftwood Hoodie",
    description:
      "Named after the weathered wood that tumbles ashore, the Driftwood hoodie has that same honest, worn-in comfort. Double-layered hood, kangaroo pocket, and our heaviest fleece at 420gsm.",
    price: 49.99,
    category: "jumpers",
    collection: "jumpers",
    colors: [
      { name: "Charcoal", hex: "#374151" },
      { name: "Sand", hex: "#F5E6D0" },
      { name: "Navy", hex: "#0A2540" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80",
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: "jumpers-004",
    slug: "seafarer-pullover",
    name: "Seafarer Pullover",
    description:
      "Every voyage needs the right kit. The Seafarer is a half-zip pullover with a sailor-inspired neckline, crafted from a midweight organic cotton blend — perfect for life on and off the water.",
    price: 44.99,
    category: "jumpers",
    collection: "jumpers",
    colors: [
      { name: "Seafoam", hex: "#7DD3C0" },
      { name: "Navy", hex: "#0A2540" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
    ],
    isFeatured: false,
    isNew: true,
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);
export const getNewProducts = () => products.filter((p) => p.isNew);
export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: Product["category"]) =>
  products.filter((p) => p.category === category);
export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
