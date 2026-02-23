import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Favi Craze — Custom T-Shirt Printing in Mumbai & Pune | Personalized Apparel",
  description: "Premium custom t-shirt printing, hoodies, corporate gifting & personalized apparel in Mumbai & Pune. DTF/DTG printing, no MOQ, sizes XS-7XL. Award-winning quality. Order now!",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[69px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
