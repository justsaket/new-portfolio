import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPYLT — Protein With Personality",
  description: "An immersive beverage landing page recreation built for Markas 3.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
