'use client';

import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import { RecoilRoot } from 'recoil';
import { MainProvider } from "@/app/components/providers/MainProvider";
import { MainLayout } from "@/app/components/template/MainLayout";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "LLM-Json-Reader",
//   description: "Jsonファイルを読むだけの物",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <RecoilRoot>
          <MainProvider>
            <MainLayout>
              <main>{children}</main>
            </MainLayout>
          </MainProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
