import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CartDrawer from "@/components/layout/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ocean Orange | Beach Lifestyle Apparel",
  description:
    "Handcrafted beach lifestyle apparel inspired by the ocean. T-shirts, jumpers and coastal gear designed through the lens of a photographer.",
  keywords: ["beach apparel", "surf clothing", "ocean lifestyle", "t-shirts", "jumpers", "coastal"],
  openGraph: {
    siteName: "Ocean Orange",
    type: "website",
    locale: "en_GB",
    title: "Ocean Orange | Beach Lifestyle Apparel",
    description: "Handcrafted beach lifestyle apparel inspired by the ocean.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <body className="bg-white text-[#0A2540] font-sans antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
