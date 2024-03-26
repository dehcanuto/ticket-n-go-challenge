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
        <main className="flex min-h-screen flex-col items-center">
          <div className="container mx-auto my-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
