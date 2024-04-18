import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moonlight Space",
  description: "the offical Moonlight Marketplace for Images/Plugins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link rel="icon" type="image/x-icon" href="/img/icon.png"></link>






    </html>
  );
}
