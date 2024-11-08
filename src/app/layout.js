import { Inter } from "next/font/google";
import "./globals.css";
// search context provider
import { SearchContextProvider } from "./context/search";
import { CartProvider } from "./context/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marrs - Car Store",
  description: "Developed by Muzamil Niaz",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <CartProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      </CartProvider>
    </SearchContextProvider>
  );
}
