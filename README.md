# 🌊 Ocean Orange

**Ocean Orange** is a beach lifestyle brand selling custom-designed t-shirts, jumpers, and beach-oriented apparel, fulfilled via [Printful](https://www.printful.com/).

## Tech Stack

| Layer        | Technology                              |
|--------------|-----------------------------------------|
| Framework    | Next.js 14 (App Router)                 |
| Language     | TypeScript                              |
| Styling      | Tailwind CSS                            |
| Animations   | Framer Motion                           |
| Payments     | Stripe                                  |
| Fulfilment   | Printful API                            |

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/ocean-orange-site.git
   cd ocean-orange-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Fill in your Stripe and Printful API keys
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ocean-orange-site/
├── public/              # Static assets (images, fonts, logo, favicon)
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components (layout, home, shop, cart, checkout, ui)
│   ├── lib/             # Utility libraries (Stripe, Printful, constants)
│   ├── hooks/           # Custom React hooks
│   ├── context/         # Global state providers (Cart)
│   ├── types/           # TypeScript type definitions
│   └── data/            # Mock data for development
├── tailwind.config.ts   # Tailwind + Ocean Orange brand theme
├── next.config.mjs      # Next.js configuration
└── .env.local.example   # Environment variable template
```

## Brand Colors

| Name           | Hex       |
|----------------|-----------|
| Ocean Blue     | `#1B6FA8` |
| Sunset Orange  | `#F28C38` |
| Deep Navy      | `#0A2540` |
| Sand Beige     | `#F5E6D0` |
| Coral Accent   | `#FF6B5A` |
| Seafoam        | `#7DD3C0` |

## Deployment

Deploy to [Vercel](https://vercel.com/) with zero configuration — just connect your GitHub repository and add environment variables in the Vercel dashboard.
