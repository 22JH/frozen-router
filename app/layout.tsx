"use client";
import "./globals.css";

import Link from "next/link";
import { useEffect } from "react";
import PageTransitionEffect from "./Effects";
import TransitionProvder from "./Effects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log("layout mount");
    return () => {
      console.log("layout unmount");
    };
  }, []);
  return (
    <html lang="en">
      <body>
        <main>
          <div className="w-full h-15 bg-slate-400">
            <Link href="/">home</Link>
            <Link href="/mypage">mypage</Link>
          </div>
          <TransitionProvder>{children}</TransitionProvder>
        </main>
      </body>
    </html>
  );
}
