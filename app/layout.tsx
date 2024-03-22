'use client';

import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import { RecoilRoot } from 'recoil';
import { MainProvider } from "@/components/providers/MainProvider"; import { MainLayout } from "@/components/template/MainLayout";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className={inter.className}>
          <RecoilRoot>
            <MainProvider>
              <MainLayout>{children}</MainLayout>
            </MainProvider>
          </RecoilRoot>
        </div>
      </body>
    </html>
  );
}
