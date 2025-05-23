import type { Metadata } from "next";
import { Nunito, Pacifico } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/shared/header";
import React from "react";

export const metadata: Metadata = {
  title: "Next App | Главная",
  description: "Generated by create next app",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
