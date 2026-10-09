import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const SpaceGrotesk = localFont({
  src: "./font/SpaceGrotesk.woff2",
  weight: "300 700",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "PDP",
  description: "Product Detail Page",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${SpaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}