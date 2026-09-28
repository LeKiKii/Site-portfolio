import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nexa = localFont({
  src: [
    { path: './fonts/Nexa-Thin.woff2', weight: '100', style: 'normal' },
    { path: './fonts/Nexa-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Nexa-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Nexa-Book.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Nexa-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Nexa-XBold.woff2', weight: '800', style: 'normal' },
    { path: './fonts/Nexa-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-nexa',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Killian Lescure | UI/UX Designer",
  description: "Créatif et curieux, je combine design graphique, interfaces intuitives et web.",
};

import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${nexa.variable} font-sans antialiased`}>
        <Loader />
        <Cursor />
        <SmoothScroll>
          {children}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
