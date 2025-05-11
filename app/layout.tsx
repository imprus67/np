import type { Metadata } from "next";
import { Nunito, Pacifico } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/shared/providers";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dancing = Pacifico({
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
