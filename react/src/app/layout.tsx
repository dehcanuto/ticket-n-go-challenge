import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import { Header } from "@/components/organisms";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket and Go - Challenge",
  description: "Desafio frontend da Ticket and Go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-800`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
